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


export default function SelectTable({ data }: { data: any }) {
    const router = useRouter()
    const [value, setValue] = useState<any>();
    const [valueOtdel, setValueOtdel] = useState<any>();
    const [selectedOption, setSelectedOption] = useState<any>();

    return (
        <div className="printnone">
            <Link href="/" className="justify-items-start text-base font-medium ">
                <div className="inline-flex items-center hover:bg-accent w-full h-10 rounded-md">
                    Все организации
                </div>
            </Link>
            <Accordion type="single" collapsible value={value} >
                {data.map((company: any) => (
                    <AccordionItem key={company.id} value={company.id}>
                        <AccordionTrigger onClick={() => router.push(`/company/${company.id}`)}>{company.name}</AccordionTrigger>
                        <AccordionContent >
                            <Accordion type="single" value={valueOtdel} onVolumeChange={setValueOtdel}>
                                {company.otdels.map((otdels: any) => (
                                    <Link key={otdels.id} href={`/otdel/${otdels.id}`}>
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
