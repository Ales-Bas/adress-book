import AuthorizedGuard from "../utils/authorized-guard"

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <>
            <AuthorizedGuard>
                <main className="flex min-h-screen flex-col items-center justify-between pt-10">
                    {children}
                </main>
            </AuthorizedGuard>
        </>
    )
}