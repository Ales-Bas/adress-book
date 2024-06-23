"use client";

import { ComposeChildren } from "@/lib/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../query-client";

export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <ComposeChildren>
            <QueryClientProvider client={queryClient} />
            {children}
        </ComposeChildren>
    )
}