"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Staff = {
    id: string
    name: string
    post: string
    phone: string
    email: string
}

export const columns: ColumnDef<Staff>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    ФИО
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "post",
        header: "Должность",
    },
    {
        accessorKey: "phone",
        header: "Телефон",
    },
    {
        accessorKey: "email",
        header: "Почта",
    },
]
