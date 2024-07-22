import { columns } from "@/components/admin/home/columns"
import { DataTable } from "@/components/admin/home/company-table"
import { getAllCompany } from "@/lib/action.server"


export default async function AdminPage() {
    const data = await getAllCompany();

    if (!Array.isArray(data)) {
        return <div>Произошла ошибка!!! {data.message}</div>
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-10">
            <div className=" justify-items-center container">
                <DataTable columns={columns} data={data} />
            </div>
        </main>
    )
}