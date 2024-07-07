import { columns } from "./columns"
import { DataTable } from "./data-table"
import { getAllStaff } from "@/lib/action.server"


export default async function AdressPage() {
    const data = await getAllStaff();

    return (
        <DataTable columns={columns} data={data} />
    )
}
