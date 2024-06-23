"use client"
import { LogIn } from "lucide-react";
import { signOut } from "next-auth/react"
import { Button } from "../ui/button"

export default function LogOutButton() {
    return (
        <Button variant={"outline"}
            onClick={() => signOut({ callbackUrl: `${window.location.origin}` })}>
            <LogIn className="mr-2 h-4 w-4" />
            Выйти</Button>
    )
}