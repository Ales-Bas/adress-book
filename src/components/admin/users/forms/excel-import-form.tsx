"use client";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createUserExcelFile } from "@/lib/action.server";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { Label } from "@/components/ui/label";
import { read, utils } from 'xlsx';

export function ExcelImportForm() {
    const form = useForm();
    const { formState: { isSubmitting } } = form;
    const [jsonData, setJsonData] = useState("");

    async function onSubmit() {
        await createUserExcelFile(jsonData)
    }

    async function handleFile(e: any) {
        let file = e;
        const data = await file.arrayBuffer();
        const wb = read(data);
        const ws = wb.Sheets[wb.SheetNames[0]];
        const json: any = utils.sheet_to_json(ws);
        setJsonData(JSON.stringify(json));
        console.log(json);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}            >
                <div className="grid gap-6">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="excel">Выберете файл Excel</Label>
                        <Input
                            id="excel"
                            type="file"
                            onChange={(e) => handleFile(e.target.files ? e.target.files[0] : null)} />
                    </div>
                    <Button disabled={isSubmitting}>
                        {isSubmitting ? <Spinner /> : "Добавить"}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
