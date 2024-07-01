import AuthorizedGuard from "../utils/authorized-guard"

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <AuthorizedGuard>
                {children}
            </AuthorizedGuard>
        </>
    )
}