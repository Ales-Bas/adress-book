import { CompanyForm } from "@/components/admin/adressbook/forms/company-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { getCompanyById } from "@/lib/action.server";
import { Suspense } from "react";

export default async function AdminEditCompanyPage({ params }: { params: { id: string } }) {
    const id = params.id;
    const company = await getCompanyById(id);

    if (!company) {
        <div>Ошибка получения пользователя</div>
    }

    return (
        <div className="container relative  flex-col items-center justify-center self-center pt-4">
            <Card className="max-w-[400px] mx-auto">
                <CardHeader className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Введите название организации
                    </h1>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <Suspense fallback={<Spinner />}>
                        <CompanyForm company={company} />
                    </Suspense>
                </CardContent>
            </Card>
        </div>
    )
}