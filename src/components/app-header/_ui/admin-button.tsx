"use client"
import { UserCog } from "lucide-react";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function AdminLinkButton() {
    return (
        <Link href="/admin">
            <Button variant={"outline"} className="mr-2">
                <UserCog className=" h-4 w-4" />
            </Button>
        </Link>
    )
}
