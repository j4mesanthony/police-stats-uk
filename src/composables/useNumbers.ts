import { UseNumbers } from "../interfaces/interfaceLibrary"

export function useNumbers(): UseNumbers {

    function formatLargeNumber(input: number) {
        return '';
    }

    return {
        formatLargeNumber
    }
}