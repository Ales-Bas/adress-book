import { columns } from "../../../components/staff/columns"
import { DataTable } from "../../../components/staff/data-table"
import { getSelectTableData } from "@/lib/action.server"


export default async function TableSelectPage({ params }: any) {
    const id = params.id;

    const data = await getSelectTableData(id);

    return (
        <DataTable columns={columns} data={data} />
    )
}