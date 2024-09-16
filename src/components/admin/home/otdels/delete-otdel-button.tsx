import { Button } from "@/components/ui/button";
import { deleteOtdel } from "@/lib/action.server";
import { Trash } from "lucide-react";

export function DeleteOtdelButton({ id }: { id: string }) {
    const deleteOtdelWithId = deleteOtdel.bind(null, id);

    return (
        <form action={deleteOtdelWithId}>
            <Button type="submit" variant="ghost" ><Trash className=" h-5 w-5" /></Button>
        </form>
    );
}