import { columns } from "@/components/admin/home/otdels/columns"
import { DataTable } from "@/components/admin/home/otdels/otdels-table"
import { getCompanyById, getDataOtdelsList } from "@/lib/action.server"


export default async function AdminOtdelsTablePage({ params }: any) {
    const id = params.id;
    const namecompany = await getCompanyById(id);
    const data = await getDataOtdelsList(id);

    if (typeof namecompany === 'object' && namecompany !== null && Object.keys(namecompany).length > 0) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-between pt-10">
                <div className=" justify-items-center container">
                    <DataTable columns={columns} data={data} titleTable={namecompany.name} />
                </div>
            </main>
        )
    }

    return <div>Произошла ошибка при загрузке страницы!</div>
}