import SelectTable from "@/components/staff/selecttable";
import { getSelectList } from "@/lib/action.server";

export default async function Layout({
    children, params
}: {
    children: React.ReactNode;
    params: {
        id: string
    }
}) {
    const dataSelect = await getSelectList();
    return (
        <>
            <div className=" grid grid-cols-[200px_minmax(900px,_1fr)] gap-2 justify-items-center container">
                <SelectTable data={dataSelect} id={params.id} />
                {children}
            </div>
        </>
    )
}