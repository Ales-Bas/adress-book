import { columns } from "@/components/admin/adressbook/columns"
import { DataTable } from "@/components/admin/adressbook/data-table"
import { getAllStaff } from "@/lib/action.server"


export default async function AdminAdressBookPage() {
    const data = await getAllStaff();

    if (!Array.isArray(data)) {
        return <div>Произошла ошибка!!! {data.message}</div>
    }

    return (
        <DataTable columns={columns} data={data} />
    )
}