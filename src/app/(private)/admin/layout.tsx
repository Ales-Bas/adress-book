import SelectTable from "@/components/staff/selecttable";
import AuthorizedGuard from "../../utils/authorized-guard"
import { getSelectList } from "@/lib/action.server";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const dataSelect = await getSelectList();
    return (
        <>
            <AuthorizedGuard>
                <div className=" grid grid-cols-[250px_minmax(900px,_1fr)] gap-2 justify-items-center container">
                    <SelectTable data={dataSelect} />
                    {children}
                </div>
            </AuthorizedGuard>
        </>
    )
}