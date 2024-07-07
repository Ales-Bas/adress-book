import { getAppSessionServer } from "@/app/utils/get-app-session.server";
import LogOutButton from "@/components/auth/log-out-button";
import AdminLinkButton from "./admin-button";

export default async function logoutViem() {
    const session = await getAppSessionServer();

    if (!session) {
        return (
            <div>
            </div>
        )
    }

    if (session.user.role === "ADMIN") {
        return (
            <div>
                <AdminLinkButton />
                <LogOutButton />
            </div>
        );
    }

    return (
        <div>
            <LogOutButton />
        </div>
    );
}
