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
import { createUser, updateUser } from "@/lib/action.server";
import { Role } from "@/service/user/type";

const FormSchema = z.object({
    email: z
        .string({
            required_error: "Введите адресс электронной почты",
        })
        .email({
            message: "Пожалуйста введите корректный email",
        }),
    role: z.union([z.literal('ADMIN'), z.literal('USER')]),
    name: z.string({
        required_error: "Введите адресс электронной почты",
    }),
})

type UserFormProps = {
    /*onSuccess?: () => void;*/
    user?: {
        id: string,
        email: string,
        role: Role,
        name: string
    };
};

export function StaffForm({ user }: any) {
    const form = useForm<z.infer<typeof FormSchema>>({
        defaultValues: user
            ? {
                email: user.email,
                role: user.role,
                name: user.name,
            }
            : undefined,
        resolver: zodResolver(FormSchema),
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        if (user) {
            const userid = user.id;
            await updateUser(userid, data);
        } else {
            await createUser(data);
        }
    }



    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}            >
                <div className="grid gap-6">
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
                        name="role"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Роль</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Установите роль пользователя" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="ADMIN">Админ</SelectItem>
                                        <SelectItem value="USER">Пользователь</SelectItem>
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
                    <Button>
                        Добавить
                    </Button>
                </div>
            </form>
        </Form>
    );
}