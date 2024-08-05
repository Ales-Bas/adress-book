import { Button } from "@/components/ui/button";
import { trueViemStaffAdressbook } from "@/lib/action.server";
import { EyeOff } from "lucide-react";

export function ViemStaffButton({ id }: { id: string }) {
    const trueViemStaffWithId = trueViemStaffAdressbook.bind(null, id);

    return (
        <form action={trueViemStaffWithId}>
            <Button type="submit" variant="ghost"><EyeOff /></Button>
        </form>
    );
}