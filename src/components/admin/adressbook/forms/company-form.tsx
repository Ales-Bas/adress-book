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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCompany, updateCompany } from "@/lib/action.server";

const FormSchema = z.object({
    name: z.string({
        required_error: "Введите название",
    }),
})

type CompanyFormProps = {
    /*onSuccess?: () => void;*/
    company?: {
        id: string,
        name: string
    };
};

export function CompanyForm({ company }: any) {
    const form = useForm<z.infer<typeof FormSchema>>({
        defaultValues: company
            ? {
                name: company.name,
            }
            : undefined,
        resolver: zodResolver(FormSchema),
    })

    const { formState: { isSubmitting } } = form;

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        if (company) {
            const companyid = company.id;
            await updateCompany(companyid, data);
        } else {
            await createCompany(data);
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
                                <FormLabel>Название организации</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Название организации"
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