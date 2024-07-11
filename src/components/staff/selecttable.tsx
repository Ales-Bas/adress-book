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

    const handleValueItems = (value: any) => {
        setValue((value));
        console.log(value)
    };

    const handleValueChange = (value: any) => {
        setSelectedOption((value));
        console.log(value)
    };

    return (
        <div >
            <div className="inline-flex items-center hover:bg-accent w-full h-10 rounded-md">
                <Link href="/" className="justify-items-start text-base font-medium ">Все организации</Link>
            </div>
            <Accordion type="single" collapsible value={value} onVolumeChange={handleValueItems}>
                {data.map((company: any) => (
                    <AccordionItem key={company.id} value={company.id}>
                        <AccordionTrigger onClick={() => router.push(`/company/${company.id}`)}>{company.name}</AccordionTrigger>
                        <AccordionContent >
                            <Accordion type="single" value={valueOtdel} onVolumeChange={setValueOtdel}>
                                {company.otdels.map((otdels: any) => (
                                    <AccordionContent key={otdels.id} className="cursor-pointer hover:bg-accent rounded-md">
                                        <Link href={`/otdel/${otdels.id}`}>{otdels.name}</Link>
                                    </AccordionContent>
                                ))}
                            </Accordion>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div >
    );
}
