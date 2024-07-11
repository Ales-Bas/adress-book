import AdminUsersTable from "@/components/admin/users/userstable.server";

export default function AdminUsersPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-10">
            <div className=" justify-items-center container">
                <AdminUsersTable />
            </div>
        </main>

    )
}