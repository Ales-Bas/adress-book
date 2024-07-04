import { columns } from "./columns"
import { DataTable } from "./data-table"
import { getAllTableData } from "@/lib/action.server"


export default async function AdminPage() {

    const data = await getAllTableData();

    return (
        <DataTable columns={columns} data={data} />
    )
}