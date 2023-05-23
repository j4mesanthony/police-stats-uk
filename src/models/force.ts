import { Force as IForce } from '../interfaces/interfaceLibrary';

export class Force implements IForce {

    constructor(public id: string, public name:string) {}

}