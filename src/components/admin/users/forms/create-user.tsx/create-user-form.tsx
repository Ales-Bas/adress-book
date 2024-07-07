"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Role } from '@/service/user/type';
import { createUser } from '@/lib/action.server';
import { redirect } from 'next/navigation';

const formSchema = z.object({
    email: z.string().email(),
    role: z.union([z.literal('ADMIN'), z.literal('USER')]),
    name: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

type UserFormProps = {
    onSuccess?: () => void;
    user?: {
        id: string,
        email: string,
        role: Role,
        name: string
    };
};

export default function AdminUserForm({ user }: UserFormProps) {
    const form = useForm;
    const { register, setValue, handleSubmit } = useForm<FormValues>({
        defaultValues: user
            ? {
                email: user.email,
                role: user.role,
                name: user.name,
            }
            : undefined,
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(data: FormValues) {
        if (user) {
            await fetch(`/api/users/${user.id}`, {
                method: 'PATCH',
                body: JSON.stringify(data),
            });
        } else {
            await createUser(data);
            redirect('/admin/users')
        }
    }

    return (
        <div className="space-y-4">
            <h1 className="text-4xl font-bold">User Form</h1>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <Input {...register('email')} placeholder="Email" />
                <Select
                    defaultValue={user ? user.role : undefined}
                    onValueChange={(value: FormValues['role']) => setValue('role', value)}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="ADMIN">ADMIN</SelectItem>
                        <SelectItem value="USER">USER</SelectItem>
                    </SelectContent>
                </Select>
                <Input {...register('name')} placeholder="ФИО" />
                <Button type="submit">Отправить</Button>
            </form>
        </div>
    );
}