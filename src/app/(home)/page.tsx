import { columns } from "@/components/staff/columns"
import { DataTable } from "@/components/staff/data-table"
import { getAllStaff } from "@/lib/action.server"


export default async function AdressPage() {
  const data = await getAllStaff();
  const title = "Общий список сотрудников"

  return (
    <DataTable columns={columns} data={data} titleTable={title} />
  )
}