import Link from "next/link";

export function AdminNav() {
    return (
        <div className="ml-2 ">
            <nav className="flex items-start md:items-center gap-6 text-sm font-medium flex-col md:flex-row mt-4 container">
                <Link
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                    href="/admin/"
                >
                    Компании
                </Link>
                <Link
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                    href="/admin/adressbook"
                >
                    Адресная книга
                </Link>
                <Link
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                    href="/admin/users"
                >
                    Пользователи
                </Link>
                <Link
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                    href="/admin/version"
                >
                    Версии
                </Link>
            </nav>
        </div>
    );
}