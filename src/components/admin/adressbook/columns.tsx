"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Eye, SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DeleteStaffButton } from "./forms/delete-button";
import { ViemStaffButton } from "./forms/eye-button";
import { ViemOffStaffButton } from "./forms/eyeoff-button";

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
    viem: boolean
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
        accessorKey: "company",
        header: "Юридическое лицо",
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
        header: "Внутренний телефон",
    },
    {
        accessorKey: "mobile",
        header: "Мобильный телефон",
    },
    {
        accessorKey: "viem",
        header: "Статус",
        cell: ({ cell, row }) => {
            if (row.original.viem) {
                return <div className="flex">
                    <ViemOffStaffButton id={row.original.id} />
                </div>
            }
            return <div className="flex">
                <ViemStaffButton id={row.original.id} />
            </div>


        }
    },
    {
        accessorKey: "id",
        header: "Действие",
        cell: ({ cell, row }) => {
            return <div className="flex">
                <Button variant="ghost"><Link href={`/admin/adressbook/${row.original.id}`}><SquarePen className=" h-5 w-5" /></Link></Button>
                <DeleteStaffButton id={row.original.id} />
            </div>
        }
    }
]
