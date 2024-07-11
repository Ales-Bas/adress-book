"use client";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser, getDataCompanyList, updateUser } from "@/lib/action.server";
import React from "react";

const FormSchema = z.object({
    name: z.string({
        required_error: "Введите ФИО сотрудика",
    }),
    company: z.string({ required_error: "Выберите организацию" }),
    dept: z.string({ required_error: "Выберите отдел или депортамен" }),
    post: z.string({ required_error: "Введите должность" }),
    email: z
        .string({
            required_error: "Введите адресс электронной почты",
        })
        .email({
            message: "Пожалуйста введите корректный email",
        }),
    phone: z.string({ required_error: "Введите внешний номер телефона" }),
    inphone: z.string({ required_error: "Введите внутренний номер телефона" }),
    mobile: z.string({ required_error: "Введите личный номер телефона" }),
    otdel: z.string({ required_error: "Поле должно быть заполнено" }),
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
        otdel: string,
    };
};

export async function AdressbookForm({ staff }: any) {
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
                otdel: staff.otdel


            }
            : undefined,
        resolver: zodResolver(FormSchema),
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        if (staff) {
            const staffid = staff.id;
            await updateUser(staffid, data);
        } else {
            console.log(data)
            /*await createUser(data);*/
        }
    }


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
                                        type="email"
                                        autoCapitalize="none"
                                        autoComplete="email"
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
                    <Button>
                        Добавить
                    </Button>
                </div>
            </form>
        </Form>
    );
}