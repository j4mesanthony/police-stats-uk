import { Force as IForce } from '../interfaces/interfaceLibrary';

export class Force implements IForce {

    constructor(public id: string, public name:string) {}

    view() {
        console.warn(`Viewing ${this.name}`);
        // goTo(`${FORCES}`); // won't work because vue router can only be injected inside setup()
    }
}