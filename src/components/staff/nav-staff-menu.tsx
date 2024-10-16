import { getAllCompany, getSelectList } from "@/lib/action.server";
import Link from "next/link";


export async function StaffNav() {
    const dataNav = await getAllCompany();

    if (!Array.isArray(dataNav)) {
        return <div>Произошла ошибка!!! {dataNav.message}</div>
    }

    return (
        <div className="printnone">
            <nav className="flex flex-wrap items-start text-center md:items-center gap-6 text-base font-medium flex-col md:flex-row mb-4 container">
                {dataNav.map((item) => (
                    <Link
                        key={item.id}
                        className="transition-colors justify-center hover:bg-accent rounded-md p-2"
                        href={`/company/${item.id}`}
                    >
                        {item.name}
                    </Link>
                ))}

            </nav>
        </div>
    );
}