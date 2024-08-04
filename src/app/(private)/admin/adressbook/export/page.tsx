import { ExcelImportForm } from "@/components/admin/adressbook/forms/excel-import-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function AdminNewAdressbookPage() {
    return (
        <div className="container relative grid grid-cols-2  justify-center self-center pt-4">
            <Card className=" mx-auto">
                <CardHeader className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Добавить множественную запись
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
                        <li>Ваш файл excel должен содержать один лист, для одного отдела и быть формата .xlsx</li>
                        <li>Заголовки столбцов должны сторго соответствовать (соблюдая строчность):</li>
                        <ul className="ml-4 list-disc">
                            <li><strong>"ФИО"</strong> - для стобца Фамилия Имя Отчество.</li>
                            <li><strong>"Должность"</strong> - для столбца с должностью.</li>
                            <li><strong>"Почта"</strong> - для стобца email.</li>
                            <li><strong>"Рабочий телефон"</strong> - для столбца с внешним или городским телефоном.
                                Должен быть записан также как будет отображаться, например +7(495)000-00-00.</li>
                            <li><strong>"Внутренний телефон"</strong> - для столбца с добавочный внутреннем номером.</li>
                            <li><strong>"Личный телефон"</strong> - для столбца с личным или мобильным телефоном.
                                Должен быть записан также как будет отображаться, например +7(916)000-00-00.</li>
                        </ul>
                        <li>После подготовки файла выберите компанию, затем отдел и добавте файл в форму.
                            Если вы не нашли компанию или нужный отдел, необходимо перейти в раздел "Компании" и создать.</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}