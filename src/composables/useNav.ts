
import { useRouter } from 'vue-router';
import { Router, RouteRecord } from 'vue-router';
import { UseNav } from '../interfaces/interfaceLibrary';

export function useNav(): UseNav {
    const router: Router = useRouter();
    const availableRoutes: Array<RouteRecord> = router.getRoutes().filter(r => r.meta.isParent);

    function goTo(path: string): void {
        router.push({ name: path.toLowerCase() });
    }
    
    return {
        availableRoutes,
        goTo,
        router,
    }
}