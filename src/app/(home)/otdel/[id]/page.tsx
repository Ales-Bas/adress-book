import { columns } from "@/components/otdel/columns"
import { DataTable } from "@/components/otdel/data-table"
import { getSelectOtdelStaff } from "@/lib/action.server"


export default async function TableSelectPage({ params }: any) {
    const id = params.id;
    const selectOtdel = await getSelectOtdelStaff(id);

    if (selectOtdel && Array.isArray(selectOtdel) && typeof selectOtdel.length === 'number') {
        const data = selectOtdel.flatMap(item => item);
        const title = `${data[0].company} ${data[0].dept}`
        return (
            <DataTable columns={columns} data={data} titleTable={title} />
        )
    }
}
