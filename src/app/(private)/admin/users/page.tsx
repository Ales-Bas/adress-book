
import AdminUsersTable from "@/components/admin/users/userstable.server";

export default function AdminUsersPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-10">
            <div className=" grid grid-cols-[100px_minmax(900px,_1fr)] gap-2 justify-items-center container">
                <div>Навигация</div>
                <AdminUsersTable />
            </div>
        </main>

    )
}