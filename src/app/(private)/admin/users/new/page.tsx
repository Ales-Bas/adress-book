import { UserForm } from "@/components/admin/users/forms/create-user-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { Suspense } from "react";

export default function AdminUsersPage() {
    return (
        <div className="container relative  flex-col items-center justify-center self-center pt-4">
            <Card className="max-w-[400px] mx-auto">
                <CardHeader className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Введите данные для создания пользователя
                    </h1>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <Suspense fallback={<Spinner />}>
                        <UserForm />
                    </Suspense>
                </CardContent>
            </Card>
        </div>
    )
}