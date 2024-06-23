

import { nextAuthConfig } from "@/app/utils/next-auth-config";
import LogOutButton from "@/components/auth/log-out-button";
import { getServerSession } from "next-auth";

export default async function logoutViem() {
    const session = await getServerSession(nextAuthConfig);
    return (
        <>
            {session ? (
                <div>
                    <LogOutButton />
                </div>
            ) : (
                <div>
                </div>
            )}
        </>
    )
}
