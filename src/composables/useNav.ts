
import { useRouter } from 'vue-router';
import { Router, RouteRecord } from 'vue-router';

interface Route {
    name: string
}

interface UseNav {
    allRoutes: Array<RouteRecord>,
    groupedRoutes: Array<RouteRecord>
    goTo: (path: string) => void,
}

export function useNav(): UseNav {
    const router: Router = useRouter();
    const allRoutes: Array<RouteRecord> = router.getRoutes();
    const groupedRoutes: Array<RouteRecord> = allRoutes.filter(r => r.meta.isParent);

    function goTo(path: string): void {
        router.push({ name: path.toLowerCase() });
    }
    
    return {
        allRoutes,
        groupedRoutes,
        goTo,
    }
}