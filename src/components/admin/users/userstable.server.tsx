import { columns } from "./columns"
import { DataTable } from "./usersdata-table"
import { getAllUsers } from "@/lib/action.server"


export default async function AdminUsersTable() {

    const data = await getAllUsers();

    return (
        <DataTable columns={columns} data={data} />
    )
}