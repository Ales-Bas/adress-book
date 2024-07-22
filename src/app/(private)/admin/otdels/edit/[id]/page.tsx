import { OtdelForm } from "@/components/admin/adressbook/forms/otdel-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { getOtdelById } from "@/lib/action.server";
import { Suspense } from "react";

export default async function AdminEditOtdelPage({ params }: { params: { id: string } }) {
    const id = params.id;
    const otdels = await getOtdelById(id);

    if (!otdels) {
        <div>Ошибка получения записи</div>
    }
    return (
        <div className="container relative  flex-col items-center justify-center self-center pt-4">
            <Card className="max-w-[400px] mx-auto">
                <CardHeader className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Внимание, вам необходимо выбрать компанию для редактирования выбранного отдела
                    </h1>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <Suspense fallback={<Spinner />}>
                        <OtdelForm otdels={otdels} />
                    </Suspense>
                </CardContent>
            </Card>
        </div>
    )
}