"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export function SignInButton() {
    const handleSignOut = () => signIn();

    return (
        <Button onClick={handleSignOut}>
            Войти
        </Button>
    );
}