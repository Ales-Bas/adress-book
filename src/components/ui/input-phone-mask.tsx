'use client';

import React from "react";
import { Input } from "./input";

export interface IInputPhoneProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLInputElement> {
    className?: string;
    placeholder?: string
    value?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputPhone = React.forwardRef(({ className, placeholder, value, onChange }: IInputPhoneProps, ref: React.ForwardedRef<HTMLInputElement>): JSX.Element => {

    const PATTERN = /\D/g;

    const getInputNumberValue = (value: string) => {
        return value.replace(PATTERN, "");
    }

    const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        let inputNumbersValue = getInputNumberValue(input.value);
        let formattedInputValue = "";
        const selectionStart = input.selectionStart;

        if (!inputNumbersValue) {
            return (input.value = "");
        }

        if (input.value.length !== selectionStart) {
            return;
        }

        if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {

            if (inputNumbersValue[0] === '9') {
                inputNumbersValue = '7' + inputNumbersValue;
            }
            const firstSymbol = inputNumbersValue[0] === '8' ? '+7' : '+7';
            formattedInputValue = firstSymbol;

            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }

            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ')' + inputNumbersValue.substring(4, 7);
            }

            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }

            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }

            input.value = formattedInputValue;
            onChange && onChange(event);
        }
    }

    const handlePhoneKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;
        if (event.key === 'Backspace' && getInputNumberValue(input.value).length === 1) {
            input.value = "";
        }
        return input;
    }
    return (
        <Input
            ref={ref}
            onInput={handlePhoneInput}
            placeholder={placeholder}
            onKeyDown={handlePhoneKeyDown}
            value={value}
            className={className}
        />
    )
})

InputPhone.displayName = "InputPhone"
