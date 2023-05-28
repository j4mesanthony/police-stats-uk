import { UseNumbers } from "../interfaces/interfaceLibrary"

export function useNumbers(): UseNumbers {

    function formatNumber(input: number, decimals = 0): string {
        return input.toLocaleString('en-GB', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    }

    return {
        formatNumber
    }
}