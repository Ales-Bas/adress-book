import { columns } from "../../../components/staff/columns"
import { DataTable } from "../../../components/staff/data-table"
import { getSelectStaff } from "@/lib/action.server"


export default async function TableSelectPage({ params }: any) {
    const id = params.id;

    const data = await getSelectStaff(id);

    return (
        <DataTable columns={columns} data={data} />
    )
}