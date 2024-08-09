import { columns } from "@/components/staff/columns"
import { DataTable } from "@/components/staff/data-table"
import { StaffNav } from "@/components/staff/nav-staff-menu";
import { getViemAllStaff } from "@/lib/action.server"


export default async function AdressPage() {
  const data = await getViemAllStaff();
  const title = "Общий список сотрудников"

  if (!Array.isArray(data)) {
    return <div>Произошла ошибка!!! {data.message}</div>
  }

  return (
    <div className="container">
      <StaffNav />
      <DataTable columns={columns} data={data} titleTable={title} />
    </div>
  )
}