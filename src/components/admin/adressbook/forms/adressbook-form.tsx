"use client";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { useForm, SubmitHandler, } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createStaffAdressbook, getDataCompanyList, getDataOtdelsList, updateUser } from "@/lib/action.server";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";


const FormSchema = z.object({
    name: z.string({
        required_error: "Введите ФИО сотрудика",
    }),
    company: z.string({ required_error: "Выберите организацию" }),
    dept: z.string({ required_error: "Выберите отдел или депортамен" }),
    post: z.string({ required_error: "Введите должность" }),
    email: z.string().optional(),
    phone: z.string().optional(),
    inphone: z.string().optional(),
    mobile: z.string().optional(),
    otdelId: z.string(),
})

type AdressbookFormProps = {
    /*onSuccess?: () => void;*/
    staff?: {
        id: string,
        name: string,
        company: string,
        dept: string,
        post: string,
        email: string,
        phone: string,
        inphone: string,
        mobile: string,
        otdelId: string,
    };
};

type ICompanyList = {
    id: string;
    name: string;
};

type IOtdelList = {
    id: string;
    name: string;
};

export function AdressbookForm({ staff }: any) {
    const form = useForm<z.infer<typeof FormSchema>>({
        defaultValues: staff
            ? {
                name: staff.name,
                company: staff.company,
                dept: staff.dept,
                post: staff.post,
                email: staff.email,
                phone: staff.phone,
                inphone: staff.inphone,
                mobile: staff.mobile,
                otdelId: staff.otdelId
            }
            : {
                name: "",
                company: "",
                dept: "",
                post: "",
                email: "",
                phone: "",
                inphone: "",
                mobile: "",
                otdelId: "",
            },
        resolver: zodResolver(FormSchema),
    })
    const { setValue, watch, formState: { isSubmitting } } = form;
    const [listCompany, setListCompany] = useState<ICompanyList[]>([]);
    const [listOtdels, setListOtdels] = useState<IOtdelList[]>([]);
    const [selectedCompanyId, setSelectedCompanyId] = useState('');
    let watchCompany = watch('company');

    useEffect(() => {
        async function getCompanyList() {
            const response = await getDataCompanyList();
            setListCompany(response);
        }
        getCompanyList();
    }, []);

    useEffect(() => {
        async function getOtdelsList() {
            const res = await getDataOtdelsList(selectedCompanyId);
            setListOtdels(res);
        }
        if (watchCompany) {
            getOtdelsList();
        }
    }, [watchCompany]);


    async function onSubmit(data: z.infer<typeof FormSchema>) {
        if (staff) {
            const staffid = staff.id;
            await updateUser(staffid, data);
        } else {
            await createStaffAdressbook(data)
        }
    }

    const handleSelectChangeOtdel = (selectedItem: any) => {
        setValue("dept", selectedItem.name);
        setValue("otdelId", selectedItem.id);
    };

    const handleSelectChangeCompany = (selectedItemC: any) => {
        setValue("company", selectedItemC.name);
        setSelectedCompanyId(selectedItemC.id)
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}            >
                <div className="grid gap-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ФИО</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Фамилия Имя Отчество"
                                        type="text"
                                        autoCapitalize="none"
                                        autoComplete="name"
                                        autoCorrect="off"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <div className="mt-3">
                        <Select onValueChange={
                            (selectedItemCId) => {
                                // Находим объект item по id в списке компаний
                                const selectedItemC = listCompany.find(company => company.id === selectedItemCId);
                                // Обработка выбранного элемента
                                handleSelectChangeCompany(selectedItemC);
                            }
                        }
                        >
                            <FormControl >
                                <SelectTrigger>
                                    <SelectValue placeholder="Выберите организацию" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {listCompany.map((item) => (
                                    <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <FormField
                        control={form.control}
                        name="otdelId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Департамент</FormLabel>
                                <Select onValueChange={
                                    (selectedItemId) => {
                                        // Находим объект item по id в списке компаний
                                        const selectedItem = listOtdels.find(otdel => otdel.id === selectedItemId);
                                        // Обработка выбранного элемента
                                        handleSelectChangeOtdel(selectedItem);
                                    }
                                } defaultValue={field.value} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Выберите департамент" defaultValue={field.value} />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {listOtdels.map((item) => (
                                            <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="post"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Должность</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Укажите должность"
                                        type="text"
                                        autoCapitalize="none"
                                        autoComplete="post"
                                        autoCorrect="off"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="name@example.com"
                                        type="text"
                                        autoCapitalize="none"
                                        autoCorrect="off"

                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Номер телефона</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="+7(495)000-00-00"
                                        type="text"
                                        autoCapitalize="none"
                                        autoComplete="phone"
                                        autoCorrect="off"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="inphone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Внутренний номер</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder=""
                                        type="text"
                                        autoCapitalize="none"
                                        autoComplete="inphone"
                                        autoCorrect="off"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Личный номер</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="+7(916)000-00-00"
                                        type="text"
                                        autoCapitalize="none"
                                        autoComplete="mobile"
                                        autoCorrect="off"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Организация</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled
                                        placeholder="Заполняется автоматически"
                                        type="text"
                                        autoCapitalize="none"
                                        autoComplete="name"
                                        autoCorrect="off"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dept"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Департамент</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled
                                        placeholder="Заполняется автоматически"
                                        type="text"
                                        autoCapitalize="none"
                                        autoCorrect="off"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button disabled={isSubmitting}>
                        {isSubmitting ? <Spinner /> : "Добавить"}
                    </Button>
                </div>
            </form>
        </Form>
    );
}