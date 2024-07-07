"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, SquarePen, Trash } from "lucide-react";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Users = {
    id: string
    email: string
    role: string
    name: string | null
}



export const columns: ColumnDef<Users>[] = [

    {
        accessorKey: "id",
        header: "id",
    },
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
        accessorKey: "email",
        header: "Почта",
        cell: ({ cell, row }) => {
            return <Link className="text-blue" href={`mailto:${row.original.email}`}>{row.original.email}</Link>
        }
    },
    {
        accessorKey: "role",
        header: "Роль",
    },
    {
        accessorKey: "id",
        header: "Действие",
        cell: ({ cell, row }) => {
            return <div>
                <Button variant="ghost"><Link href={`/admin/users/${row.original.id}`}><SquarePen className=" h-5 w-5" /></Link></Button>
                <Button variant="ghost" ><Trash className=" h-5 w-5" /></Button>
            </div>
        }
    }
]