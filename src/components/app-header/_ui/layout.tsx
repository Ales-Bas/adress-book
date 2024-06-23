
export function Layout({
    logo,
    logout,
}: {
    logo?: React.ReactNode;
    logout?: React.ReactNode;
}) {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex mr-4">{logo}</div>
                <div className="flex flex-1 items-center justify-end space-x-3 ">
                    {logout}
                </div>
            </div>
        </header>
    );
}