"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";


export default function SelectTable({ data }: { data: any }) {


    const [value, setValue] = useState<any>();
    const [valueDep, setValueDep] = useState<any>();
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
        <div>
            <Button variant="ghost" className="text-base">Все организации</Button>
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
                                            <Select onValueChange={handleValueChange}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Отдел" />
                                                </SelectTrigger>
                                                <SelectContent position="popper" sideOffset={5}>
                                                    {depts.otdels.map((otdels: any) => (
                                                        <SelectItem key={otdels.id} value={otdels.id}>{otdels.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
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
