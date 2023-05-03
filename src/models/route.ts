import { Route as IRoute } from '../interfaces/interfaceLibrary';

export class Route implements IRoute {

    constructor(public name: string, public path: string, public children: Array<Route>) {};

}