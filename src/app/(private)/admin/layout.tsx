import { getAppSessionServer } from "@/app/utils/get-app-session.server";
import AuthorizedGuard from "../../utils/authorized-guard"
import { AdminNav } from "@/components/admin/ui/menu-nav";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {

    const session = await getAppSessionServer();

    if (!session) {
        return (
            <>
                <AuthorizedGuard>
                    {children}
                </AuthorizedGuard>
            </>
        )
    }

    if (session.user.role !== "ADMIN") {
        return (
            <div>
                <p>Доступ запрещен. Пожалуйста, войдите как администратор.</p>
            </div>
        );
    }

    return (
        <>
            <AdminNav />
            {children}
        </>
    );
}