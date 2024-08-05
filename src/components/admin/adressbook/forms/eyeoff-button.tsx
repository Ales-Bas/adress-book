import { Button } from "@/components/ui/button";
import { falseViemStaffAdressbook } from "@/lib/action.server";
import { Eye } from "lucide-react";

export function ViemOffStaffButton({ id }: { id: string }) {
    const falseViemStaffWithId = falseViemStaffAdressbook.bind(null, id);

    return (
        <form action={falseViemStaffWithId}>
            <Button type="submit" variant="ghost"><Eye /></Button>
        </form>
    );
}