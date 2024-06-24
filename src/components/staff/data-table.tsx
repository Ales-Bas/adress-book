"use client"

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import React from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Printer } from "lucide-react"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

interface TableElement extends HTMLElement {
    outerHTML: string;
}

function printTable(tableElement: TableElement): void {
    const windowPrint = window.open('', '_blank');
    if (!windowPrint) return;

    windowPrint.document.write('<html><head><title>Print</title>');
    windowPrint.document.write('<style>');
    windowPrint.document.write('svg { display: none;} thead, tr {height: 30px}; td {padding-left: 5px;}');
    windowPrint.document.write('button { border: none; background: white;} a {text-decoration: none; color: black;}');
    windowPrint.document.write('</style>');
    windowPrint.document.write('</head><body>');
    windowPrint.document.write(tableElement.outerHTML);
    windowPrint.document.write('</body></html>');
    windowPrint.document.close();

    try {
        windowPrint.print();
    } catch (error) {
        console.error("Printing failed:", error);
    }
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    })

    return (
        <div className="rounded-md border">
            <div className="flex items-center justify-between ml-2 py-4">
                <Input
                    placeholder="Поиск по ФИО..."
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <Button
                    variant="ghost"
                    className="mr-2"
                    onClick={() => printTable(document.getElementById('table') as HTMLTableElement)}
                >
                    <Printer />
                </Button>
            </div>

            <Table id="table">
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
