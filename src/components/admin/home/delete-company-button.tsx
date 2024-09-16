import { Button } from "@/components/ui/button";
import { deleteCompany } from "@/lib/action.server";
import { Trash } from "lucide-react";

export function DeleteCompanyButton({ id }: { id: string }) {
    const deleteCompanyWithId = deleteCompany.bind(null, id);

    return (
        <form action={deleteCompanyWithId}>
            <Button type="submit" variant="ghost" ><Trash className=" h-5 w-5" /></Button>
        </form>
    );
}