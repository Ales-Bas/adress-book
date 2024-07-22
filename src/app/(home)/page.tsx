import { columns } from "@/components/staff/columns"
import { DataTable } from "@/components/staff/data-table"
import { getAllStaff } from "@/lib/action.server"


export default async function AdressPage() {
  const data = await getAllStaff();
  const title = "Общий список сотрудников"

  if (!Array.isArray(data)) {
    return <div>Произошла ошибка!!! {data.message}</div>
  }

  return (
    <DataTable columns={columns} data={data} titleTable={title} />
  )
}