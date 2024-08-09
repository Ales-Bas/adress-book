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
        size: 138,
    },
    {
        accessorKey: "dept",
        header: "Департамент",
        size: 153,
    },
    {
        accessorKey: "post",
        header: "Должность",
        size: 157,
    },
    {
        accessorKey: "email",
        header: "Почта",
        cell: ({ cell, row }) => {
            return <Link className="text-blue" href={`mailto:${row.original.email}`}>{row.original.email}</Link>
        },
        size: 225,
    },
    {
        accessorKey: "phone",
        header: "Внешний (городской) телефон",
        size: 138,
    },
    {
        accessorKey: "inphone",
        header: "Внутр. телефон",
        cell: ({ cell, row }) => {
            return <div className="pl-6">{row.original.inphone}</div>
        },
        size: 80,
    },
    {
        accessorKey: "mobile",
        header: "Мобильный телефон",
        size: 140
    },
]
