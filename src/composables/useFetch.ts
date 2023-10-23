import { UseFetch } from '@/interfaces/interfaceLibrary';

const API_BASE = 'https://data.police.uk/api/';

export function useFetch(): UseFetch {
    function get(url: string): any {
        return fetch(`${API_BASE}${url}`)
            .then(res => res.json())
            .then(data => data)
            .catch(e => console.error(e));
    }

    return {
        get
    }
}
