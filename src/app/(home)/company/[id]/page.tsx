import { columns } from "@/components/company/columns"
import { DataTable } from "@/components/company/data-table"
import { getSelectCompanyStaff } from "@/lib/action.server"


export default async function TableSelectPage({ params }: any) {
    const id = params.id;

    const selectCompany = await getSelectCompanyStaff(id);

    if (selectCompany && Array.isArray(selectCompany) && typeof selectCompany.length === 'number') {
        const data = selectCompany.flatMap(item => item.staffs);
        const title = data[0].company

        return (
            <DataTable columns={columns} data={data} titleTable={title} />
        )
    }
}