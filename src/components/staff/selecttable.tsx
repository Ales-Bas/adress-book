"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";


export default function SelectTable({ data }: { data: any }) {


    const [value, setValue] = useState<any>();
    const [valueDep, setValueDep] = useState<any>();
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
            <div className="inline-flex items-center hover:bg-accent w-full h-10 ">
                <Link href="/" className="justify-items-start text-base font-medium ">Все организации</Link>
            </div>
            <Accordion type="single" value={value} onVolumeChange={handleValueItems}>
                {data.map((company: any) => (
                    <AccordionItem key={company.id} value={company.id}>
                        <AccordionTrigger >{company.name}</AccordionTrigger>
                        <AccordionContent >
                            <Accordion type="single" value={valueDep} onVolumeChange={setValueDep}>
                                {company.depts.map((depts: any) => (
                                    <AccordionItem key={depts.id} value={depts.id}>
                                        <AccordionTrigger>{depts.name}</AccordionTrigger>
                                        <AccordionContent>
                                            <Accordion type="single" value={valueOtdel} onVolumeChange={setValueOtdel}>
                                                {depts.otdels.map((otdels: any) => (
                                                    <AccordionContent key={otdels.id} className="cursor-pointer hover:bg-accent">
                                                        <Link href={`/${otdels.id}`}>{otdels.name}</Link>
                                                    </AccordionContent>
                                                ))}
                                            </Accordion>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
