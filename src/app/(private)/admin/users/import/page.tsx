import { ExcelImportForm } from "@/components/admin/users/forms/excel-import-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function AdminNewUserExcelPage() {
    return (
        <div className="container relative grid grid-cols-2  justify-center self-center pt-4">
            <Card className=" mx-auto">
                <CardHeader className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Добавить множественную запись пользователей
                    </h1>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <ExcelImportForm />
                </CardContent>
            </Card>
            <Card className=" mx-auto">
                <CardHeader className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Инструкция по импорту из Excel
                    </h1>
                </CardHeader>
                <CardContent className="grid  gap-6">
                    <ul className="list-disc">
                        <li>Ваш файл excel должен содержать один лист и быть формата .xlsx</li>
                        <li>Заголовки столбцов должны сторго соответствовать (соблюдая строчность):</li>
                        <ul className="ml-4 list-disc">
                            <li><strong> &quot;ФИО &quot;</strong> - для стобца Фамилия Имя Отчество.</li>
                            <li><strong> &quot;Почта &quot;</strong> - для стобца email.</li>
                        </ul>
                        <li>Все поля должны иметь данные!</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}