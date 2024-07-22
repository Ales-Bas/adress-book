"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, SquarePen } from "lucide-react";
import Link from "next/link";

export type Otdels = {
    id: string
    name: string
}

export const columns: ColumnDef<Otdels>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Наименование отдела
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "id",
        header: "Действие",
        cell: ({ cell, row }) => {
            return <div className="flex">
                <Button variant="ghost"><Link href={`/admin/otdels/edit/${row.original.id}`}><SquarePen className=" h-5 w-5" /></Link></Button>
            </div>
        }
    }
]