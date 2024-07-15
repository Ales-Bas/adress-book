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
import { createOtdel, getDataCompanyList, updateOtdel } from "@/lib/action.server";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";


const FormSchema = z.object({
    name: z.string({
        required_error: "Введите ФИО сотрудика",
    }),
    companyId: z.string({ required_error: "Поле должно быть заполнено" }),
})

type AdressbookFormProps = {
    /*onSuccess?: () => void;*/
    otdels?: {
        id: string,
        name: string,
        companyId: string,
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

export function OtdelForm({ otdels }: any) {
    const form = useForm<z.infer<typeof FormSchema>>({
        defaultValues: otdels
            ? {
                name: otdels.name,
                companyId: otdels.companyId
            }
            : undefined,
        resolver: zodResolver(FormSchema),
    })
    const { formState: { isSubmitting } } = form;
    const [listCompany, setListCompany] = useState<ICompanyList[]>([]);

    useEffect(() => {
        async function getCompanyList() {
            const response = await getDataCompanyList();
            setListCompany(response);
        }
        getCompanyList();
    }, []);

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        if (otdels) {
            const otdelid = otdels.id;
            await updateOtdel(otdelid, data);
        } else {
            await createOtdel(data)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}            >
                <div className="grid gap-6">
                    <FormField
                        control={form.control}
                        name="companyId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Организация</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Выберите организацию" defaultValue={field.value} />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {listCompany.map((item) => (
                                            <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Название департамента</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Введите название отдела"
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

                    <Button disabled={isSubmitting}>
                        {isSubmitting ? <Spinner /> : "Добавить"}
                    </Button>
                </div>
            </form>
        </Form>
    );
}