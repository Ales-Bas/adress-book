"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Staff = {
    id: string
    name: string
    dept: string
    post: string
    email: string
    phone: string
    inphone: string
    mobile: string
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
        accessorKey: "dept",
        header: "Департамент",
    },
    {
        accessorKey: "post",
        header: "Должность",
    },
    {
        accessorKey: "email",
        header: "Почта",
        cell: ({ cell, row }) => {
            return <Link className="text-blue" href={`mailto:${row.original.email}`}>{row.original.email}</Link>
        }
    },
    {
        accessorKey: "phone",
        header: "Внешний (городской) телефон",
    },
    {
        accessorKey: "inphone",
        header: "Внутр. телефон",
    },
    {
        accessorKey: "mobile",
        header: "Мобильный телефон",
    },
]
