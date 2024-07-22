"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, SquarePen } from "lucide-react";
import Link from "next/link";

export type Company = {
    id: string
    name: string
    description: string | null
}

export const columns: ColumnDef<Company>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Наименование организации
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ cell, row }) => {
            return <div className="flex">
                <Link href={`/admin/otdels/${row.original.id}`}>{row.original.name}</Link>
            </div>
        }
    },
    {
        accessorKey: "id",
        header: "Действие",
        cell: ({ cell, row }) => {
            return <div className="flex">
                <Button variant="ghost"><Link href={`/admin/${row.original.id}`}><SquarePen className=" h-5 w-5" /></Link></Button>
            </div>
        }
    }
]