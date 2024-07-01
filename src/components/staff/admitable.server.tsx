import { Staff, columns } from "./columns"
import { DataTable } from "./data-table"
import { NewSelect } from "./newselect"

async function getData(): Promise<Staff[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            name: "Иванов Иван Иванович",
            post: "сотрудник",
            phone: "8 (916) 000 00 00",
            inphone: "1234",
            email: "I@example.com",
            mobile: "8 (916) 000 00 00"
        },
        {
            id: "728ed53f",
            name: "Сидорова Елена Петровна",
            post: "сотрудник",
            phone: "8 (916) 000 00 01",
            inphone: "1234",
            email: "i@example.com",
            mobile: "8 (916) 000 00 00"
        },
        {
            id: "728ed54f",
            name: "Сидоров Иван Иваныч",
            post: "сотрудник",
            phone: "8 (916) 000 00 02",
            inphone: "1234",
            email: "s@example.com",
            mobile: "8 (916) 000 00 00"
        },
        {
            id: "728ed55f",
            name: "Петров Петр Петрович",
            post: "сотрудник",
            phone: "8 (916) 000 00 03",
            inphone: "1234",
            email: "p@example.com",
            mobile: "8 (916) 000 00 00"
        },
        {
            id: "728ed56f",
            name: "Горбачева Маргарита Денисовна",
            post: "сотрудник",
            phone: "8 (916) 000 00 04",
            inphone: "1234",
            email: "g@example.com",
            mobile: "8 (916) 000 00 00"
        },
        {
            id: "728ed57f",
            name: "Ильин Иван Алексеевич",
            post: "сотрудник",
            phone: "8 (916) 000 00 05",
            inphone: "1234",
            email: "il@example.com",
            mobile: "8 (916) 000 00 00"
        },
        {
            id: "728ed58f",
            name: "Лебедев Григорий Константинович",
            post: "сотрудник",
            phone: "8 (916) 000 00 06",
            inphone: "1234",
            email: "l@example.com",
            mobile: "8 (916) 000 00 00"
        },
        {
            id: "728ed59f",
            name: "Соколов Марк Игоревич",
            post: "сотрудник",
            phone: "8 (916) 000 00 07",
            inphone: "1234",
            email: "so@example.com",
            mobile: "8 (916) 000 00 00"
        },
        {
            id: "728ed60f",
            name: "Новиков Даниил Кириллович",
            post: "сотрудник",
            phone: "8 (916) 000 00 08",
            inphone: "1234",
            email: "n@example.com",
            mobile: "8 (916) 000 00 00"
        },
        {
            id: "728ed61f",
            name: "Тарасов Семён Савельевич",
            post: "сотрудник",
            phone: "8 (916) 000 00 09",
            inphone: "1234",
            email: "ta@example.com",
            mobile: "8 (916) 000 00 00"
        },
        {
            id: "728ed62f",
            name: "Филиппова Дарья Андреевна",
            post: "сотрудник",
            phone: "8 (916) 000 00 10",
            inphone: "1234",
            email: "f@example.com",
            mobile: "8 (916) 000 00 00"
        },
    ]
}

export default async function AdminPage() {
    const data = await getData()

    return (
        <div className=" grid grid-cols-[250px_minmax(900px,_1fr)] gap-2 justify-items-center">
            <NewSelect />
            <DataTable columns={columns} data={data} />
        </div>
    )
}