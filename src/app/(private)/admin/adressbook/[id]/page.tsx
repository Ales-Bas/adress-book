import { AdressbookForm } from "@/components/admin/adressbook/forms/adressbook-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { getStaffId } from "@/lib/action.server";
import { Suspense } from "react";

export default async function AdminEditAdressbookPage({ params }: { params: { id: string } }) {
    const id = params.id;
    const staff = await getStaffId(id);

    if (!staff) {
        <div>Ошибка получения записи!</div>
    }

    return (
        <div className="container relative  flex-col items-center justify-center self-center pt-4">
            <Card className="max-w-[400px] mx-auto">
                <CardHeader className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Внимание, не выбирайте организацию и департамент, если их не надо менять!
                    </h1>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <Suspense fallback={<Spinner />}>
                        <AdressbookForm staff={staff} />
                    </Suspense>
                </CardContent>
            </Card>
        </div>
    )
}