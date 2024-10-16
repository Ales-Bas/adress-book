import { Button } from "@/components/ui/button";
import { deleteUser } from "@/lib/action.server";
import { Trash } from "lucide-react";

export function DeleteUserButton({ id }: { id: string }) {
    const deleteUserWithId = deleteUser.bind(null, id);

    return (
        <form action={deleteUserWithId}>
            <Button type="submit" variant="ghost" ><Trash className=" h-5 w-5" /></Button>
        </form>
    );
}