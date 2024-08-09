"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SelectTable({ data, id }: { data: any, id: string }) {
    const router = useRouter();
    const [value, setValue] = useState<any>();
    const [valueOtdel, setValueOtdel] = useState<any>();

    return (
        <div className="printnone">
            <Accordion type="single" collapsible value={value} defaultValue={id} onValueChange={setValue} >
                <Link href="/" className="text-sm font-medium ">
                    <div className="inline-flex items-center justify-start text-base hover:bg-accent w-full h-10 rounded-md">
                        Все организации
                    </div>
                </Link>
                {data.map((company: any) => (
                    <AccordionItem key={company.id} value={company.id}>
                        <AccordionTrigger onClick={() => router.push(`/company/${company.id}`)}>{company.name}</AccordionTrigger>
                        <AccordionContent >
                            <Accordion type="single" value={valueOtdel} collapsible onVolumeChange={setValueOtdel}>
                                {company.otdels.map((otdels: any) => (
                                    <Link key={otdels.id} href={`/company/${company.id}/otdel/${otdels.id}`}>
                                        <AccordionContent className="cursor-pointer hover:bg-accent rounded-md">
                                            {otdels.name}
                                        </AccordionContent>
                                    </Link>
                                ))}
                            </Accordion>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div >
    );
}
