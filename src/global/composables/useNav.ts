
import { useRouter } from 'vue-router';
import { Router, RouteRecord } from 'vue-router';
import { UseNav } from '../../interfaces/interfaceLibrary';

export function useNav(): UseNav {
    const router: Router = useRouter();
    const availableRoutes: Array<RouteRecord> = router.getRoutes().filter(r => r.meta.isParent);

    function goTo(path: string | { name: string, params: any }): void {
        if (typeof path === 'string') {
            router.push({ name: path.toLowerCase() });
            return;
        };
        router.push(path);
    }
    
    return {
        availableRoutes,
        goTo,
        router,
    }
}