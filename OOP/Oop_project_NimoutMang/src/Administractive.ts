import { Admin } from "./Admins";


export class Administractive{
    name: string;
    admins: Admin[] = [];
    constructor(name: string){
        this.name = name;
    }
}