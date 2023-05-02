interface UseStringFormatter {
    toTitleCase: (input: string) => string
}

export function useStringFormatter(): UseStringFormatter {

    function toTitleCase(input: string): string {
        const items: Array<string> = input.split(' '),
              titleCased: Array<string> = items.map(x => `${x.charAt(0).toUpperCase()}${x.substring(1)}`),
              result: string = titleCased.join(' ');

        return result;
    }

    return {
        toTitleCase
    }
}