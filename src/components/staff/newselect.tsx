"use client";

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar";

import { useState } from "react";

export function NewSelect() {

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

    return (
        <div>

            {
                data.map((items: any, key: string) => <Menubar key={items.id} className="flex-col items-start space-y-2 mb-2">
                    <MenubarMenu  >
                        <MenubarTrigger className="hover:cursor-pointer" value={items.id}>{items.name}</MenubarTrigger>
                        <MenubarContent>
                            {items.deparr.map((item: any, key: string) => <MenubarSub key={item.id}>
                                <MenubarSeparator />
                                <MenubarSubTrigger className="hover:cursor-pointer">{item.name}</MenubarSubTrigger>
                                <MenubarSubContent>
                                    {item.otdels.map((i: any, key: string) => <MenubarItem key={i.id} className="hover:cursor-pointer">

                                        {i.name}

                                    </MenubarItem>)}
                                </MenubarSubContent>
                            </MenubarSub>
                            )}
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
                )
            }
        </div>
    )
}