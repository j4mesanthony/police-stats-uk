
import { useRouter } from 'vue-router';
import { Router, RouteRecord } from 'vue-router';

interface Route {
    name: string
}

interface UseNav {
    allRoutes: Array<RouteRecord>,
    goTo: (path: string) => void,
}

export function useNav(): UseNav {
    const router: Router = useRouter();

    function goTo(path: string): void {
        router.push({ name: path });
    }
    
    return {
        allRoutes: router.getRoutes(),
        goTo,
    }
}