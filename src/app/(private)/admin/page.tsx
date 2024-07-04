import { nextAuthConfig } from "../../utils/next-auth-config";
import { getServerSession } from "next-auth";
import AuthComp from "@/components/auth/page/authcomp";
import AdminPage from "@/components/staff/admitable.server";

export default async function Admin() {
    const session = await getServerSession(nextAuthConfig);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-10">
            {session ? (

                <AdminPage />

            ) : (
                <div className="w-screen h-13 flex items-center justify-center">
                    <AuthComp />
                </div>
            )}
        </main>
    );
}
