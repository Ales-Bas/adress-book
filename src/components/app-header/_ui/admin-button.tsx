"use client"
import { UserCog } from "lucide-react";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function AdminLinkButton() {
    return (
        <Button variant={"outline"} className="mr-2">
            <Link href="/admin"><UserCog className=" h-4 w-4" /></Link>
        </Button>
    )
}
