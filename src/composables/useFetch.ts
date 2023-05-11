import { ref } from 'vue';
import type { Ref } from 'vue';
import { ArrayOrNull, StringOrNull } from '../types/typeLibrary';
import { UseFetch } from '../interfaces/interfaceLibrary';

const API_BASE = 'https://data.police.uk/';

export function useFetch(url: string): UseFetch {
    const data: Ref<ArrayOrNull> = ref(null);
    const error: Ref<StringOrNull> = ref(null);

    fetch(`${API_BASE}${url}`)
        .then((res: any) => res.json())
        .then((json: any) => data.value = json)
        .catch((e: string) => error.value = e);

    return {
        data,
        error
    }
}
