import * as React from "react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
    return (
        <Select>
            <SelectTrigger className="w-[250px] mb-2">
                <SelectValue placeholder="Выбирете организацию..." />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Организация</SelectLabel>
                    <SelectItem value="apple">ООО Название организации</SelectItem>
                    <SelectItem value="banana">ООО Название организации</SelectItem>
                    <SelectItem value="blueberry">ООО Название организации</SelectItem>
                    <SelectItem value="grapes">ООО Название организации</SelectItem>
                    <SelectItem value="pineapple">ООО Название организации</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}