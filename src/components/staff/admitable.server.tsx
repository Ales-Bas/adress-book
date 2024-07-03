import { columns } from "./columns"
import { DataTable } from "./data-table"
import SelectTable from "./selecttable"
import { getAllTableData, getSelectList } from "@/lib/action.server"


export default async function AdminPage() {

    const dataSelect = await getSelectList();
    const data = await getAllTableData();

    return (
        <div className=" grid grid-cols-[250px_minmax(900px,_1fr)] gap-2 justify-items-center">
            <SelectTable data={dataSelect} />
            <DataTable columns={columns} data={data} />
        </div>
    )
}