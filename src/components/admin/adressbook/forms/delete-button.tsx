import { Button } from "@/components/ui/button";
import { deleteStaffAdressbook } from "@/lib/action.server";
import { Trash } from "lucide-react";

export function DeleteStaffButton({ id }: { id: string }) {
    const deleteStaffWithId = deleteStaffAdressbook.bind(null, id);

    return (
        <form action={deleteStaffWithId}>
            <Button type="submit" variant="ghost" ><Trash className=" h-5 w-5" /></Button>
        </form>
    );
}