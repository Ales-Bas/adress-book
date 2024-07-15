import { AdressbookForm } from "@/components/admin/adressbook/forms/adressbook-form";
import { CompanyForm } from "@/components/admin/adressbook/forms/company-form";
import { OtdelForm } from "@/components/admin/adressbook/forms/otdel-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function AdminNewAdressbookPage() {
    return (
        <div className="container relative grid grid-cols-3  justify-center self-center pt-4">
            <Card className=" mx-auto">
                <CardHeader className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Запись в адресную книгу
                    </h1>
                </CardHeader>
                <CardContent className="grid  gap-6">
                    <AdressbookForm />
                </CardContent>
            </Card>
            <Card className=" mx-auto">
                <CardHeader className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Добавить новую компанию
                    </h1>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <CompanyForm />
                </CardContent>
            </Card>
            <Card className=" mx-auto">
                <CardHeader className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Добавить новый отдел
                    </h1>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <OtdelForm />
                </CardContent>
            </Card>
        </div>
    )
}