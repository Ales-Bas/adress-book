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

export default function SelectTable() {
    const [data, setData] = useState<any>([
        {
            id: "1",
            name: "ООО Организация Один",
            deparr: [{
                id: "1.1",
                name: "Департамент 1",
                otdels: [{
                    id: "1.1.1",
                    name: "Отдел один",
                },
                {
                    id: "1.1.2",
                    name: "Отдел два",
                }
                ]
            },
            {
                id: "1.2",
                name: "Департамент 2",
                otdels: [{
                    id: "1.1.3",
                    name: "Отдел три",
                },
                {
                    id: "1.1.4",
                    name: "Отдел четыре",
                }
                ]
            }
            ],
        },
        {
            id: "2",
            name: "ООО Организация Два",
            deparr: [{
                id: "1.3",
                name: "Департамент 3",
                otdels: [{
                    id: "1.1.1",
                    name: "Отдел десять",
                },
                {
                    id: "1.1.2",
                    name: "Отдел двадцать",
                }
                ]
            },
            {
                id: "1.4",
                name: "Департамент 4",
                otdels: [{
                    id: "1.1.5",
                    name: "Отдел пятдесят ",
                },
                {
                    id: "1.1.6",
                    name: "Отдел шестьдесят",
                }
                ]
            }
            ]
        }
    ])

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
                {data.map((items: any, key: string) => (
                    <AccordionItem key={items.id} value={items.id}>
                        <AccordionTrigger >{items.name}</AccordionTrigger>
                        <AccordionContent >
                            <Accordion type="single" value={valueDep} onVolumeChange={setValueDep}>
                                {items.deparr.map((item: any, key: string) => (
                                    <AccordionItem key={item.id} value={item.id}>
                                        <AccordionTrigger>{item.name}</AccordionTrigger>
                                        <AccordionContent>
                                            <Select onValueChange={handleValueChange}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Отдел" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {item.otdels.map((i: any, key: string) => (
                                                        <SelectItem key={i.id} value={i}>{i.name}</SelectItem>
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
