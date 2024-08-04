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
import { createStaffExcelFile, getDataCompanyList, getDataOtdelsList, } from "@/lib/action.server";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { Label } from "@/components/ui/label";
import { read, utils } from 'xlsx';


const FormSchema = z.object({
    company: z.string({ required_error: "Выберите организацию" }),
    dept: z.string({ required_error: "Выберите отдел или депортамен" }),
    otdelId: z.string(),
})

export type AdressbookFormProps = {
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

export function ExcelImportForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        defaultValues:
        {
            company: "",
            dept: "",
            otdelId: "",

        },
        resolver: zodResolver(FormSchema),
    })
    const { setValue, watch, formState: { isSubmitting } } = form;
    const [listCompany, setListCompany] = useState<ICompanyList[]>([]);
    const [listOtdels, setListOtdels] = useState<IOtdelList[]>([]);
    const [selectedCompanyId, setSelectedCompanyId] = useState('');
    const [jsonData, setJsonData] = useState("");
    const [firstSelectionMade, setFirstSelectionMade] = useState(false);
    const [loadingSecondSelector, setLoadingSecondSelector] = useState(false);
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
            setLoadingSecondSelector(false);
        }
        if (watchCompany) {
            getOtdelsList();
        }
    }, [watchCompany]);


    async function onSubmit(data: z.infer<typeof FormSchema>) {
        await createStaffExcelFile(data, jsonData)
    }

    const handleSelectChangeOtdel = (selectedItem: any) => {
        setValue("dept", selectedItem.name);
        setValue("otdelId", selectedItem.id);
    };

    const handleSelectChangeCompany = (selectedItemC: any) => {
        setValue("company", selectedItemC.name);
        setSelectedCompanyId(selectedItemC.id);
        setFirstSelectionMade(true);
        setLoadingSecondSelector(true);
    };

    async function handleFile(e: any) {
        let file = e;
        const data = await file.arrayBuffer();
        const wb = read(data);
        const ws = wb.Sheets[wb.SheetNames[0]];
        const json: any = utils.sheet_to_json(ws);
        setJsonData(JSON.stringify(json));
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}            >
                <div className="grid gap-6">
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
                                <Select disabled={!firstSelectionMade} onValueChange={
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
                                    {loadingSecondSelector ? (
                                        <SelectContent>
                                            <Spinner />
                                        </SelectContent>
                                    ) : (
                                        <SelectContent>
                                            {listOtdels.map((item) => (
                                                <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    )}
                                </Select>
                            </FormItem>
                        )}
                    />
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="excel">Выберете файл Excel</Label>
                        <Input
                            id="excel"
                            type="file"
                            onChange={(e) => handleFile(e.target.files ? e.target.files[0] : null)} />
                    </div>
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