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
    company: string
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
        size: 128,
    },
    {
        accessorKey: "company",
        header: "Юридическое лицо",
        size: 140,
    },
    {
        accessorKey: "dept",
        header: "Департамент",
        size: 154,
    },
    {
        accessorKey: "post",
        header: "Должность",
        size: 146,
    },
    {
        accessorKey: "email",
        header: "Почта",
        size: 238,
        cell: ({ cell, row }) => {
            return <Link className="text-blue" href={`mailto:${row.original.email}`}>{row.original.email}</Link>
        }

    },
    {
        accessorKey: "phone",
        header: "Внешний (городской) телефон",
        size: 135,
    },
    {
        accessorKey: "inphone",
        header: "Внутр. номер",
        size: 50,
    },
    {
        accessorKey: "mobile",
        header: "Мобильный телефон",
        size: 135,
    },
]
