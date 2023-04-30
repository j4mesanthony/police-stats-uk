interface UseStringFormatter {
    toTitleCase: (input: string) => string
}

export function useStringFormatter(): UseStringFormatter {

    function toTitleCase(input: string): string {
        return `${input.charAt(0).toUpperCase()}${input.substring(1)}`;
    }

    return {
        toTitleCase
    }
}