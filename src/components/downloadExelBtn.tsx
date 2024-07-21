import { FileText } from "lucide-react";
import { Button } from "./ui/button";
import { utils, writeFile } from 'xlsx';

interface LoadExcelButtonProps {
    data: any | undefined;
    fileName?: string;
}

export default function LoadExcelButton({ data, fileName }: LoadExcelButtonProps) {
    return (
        <Button
            variant="ghost"
            className="mr-2"
            onClick={() => {
                const datas = data?.length ? data : [];
                const filterData = datas.map((item: any) => ({
                    ФИО: item.name,
                    Организация: item.company,
                    Департамент: item.dept,
                    Должность: item.post,
                    Почта: item.email,
                    "Внешний (городской) телефон": item.phone,
                    "Внутренний телефон": item.inphone,
                    "Мобильный телефон": item.mobile,

                }))
                const worksheet = utils.json_to_sheet(filterData);
                const workbook = utils.book_new();
                utils.book_append_sheet(workbook, worksheet, "Sheet1");
                writeFile(workbook, fileName ? `${fileName}.xlsx` : "data.xlsx");

            }
            }
        >
            <FileText />
        </Button>
    )
}