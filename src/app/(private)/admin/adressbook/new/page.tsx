import { AdressbookForm } from "@/components/admin/adressbook/forms/adressbook-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function AdminNewAdressbookPage() {
    return (
        <div className="container relative flex-col justify-center self-center pt-4">
            <Card className=" max-w-[400px] mx-auto">
                <CardHeader className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Запись в адресную книгу
                    </h1>
                </CardHeader>
                <CardContent className="grid  gap-6">
                    <AdressbookForm />
                </CardContent>
            </Card>
        </div>
    )
}