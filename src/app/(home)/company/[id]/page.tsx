import { columns } from "@/components/company/columns"
import { DataTable } from "@/components/company/data-table"
import { getSelectCompanyStaff } from "@/lib/action.server"


export default async function TableSelectPage({ params }: any) {
    const id = params.id;

    const selectCompany = await getSelectCompanyStaff(id);

    if (selectCompany && Array.isArray(selectCompany) && typeof selectCompany.length === 'number') {
        const allStaffs = selectCompany.flatMap(item => item.staffs);

        const data = allStaffs.sort((a, b) => {
            if (a.name !== b.name) {
                return a.name.localeCompare(b.name);
            }
            return 0;
        });
        const title = data[0]?.company

        return (
            <DataTable columns={columns} data={data} titleTable={title} />
        )
    }

}