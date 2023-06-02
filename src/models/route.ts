import { Route as IRoute } from '../interfaces/interfaceLibrary';

export class Route implements IRoute {

    constructor(public name: string, public path: string, public isActive: boolean, public children: Array<Route>, public hideFromMenu: boolean) {};

}