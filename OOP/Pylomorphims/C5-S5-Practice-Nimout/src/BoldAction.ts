import { AbstractAction } from "./Abstraction";
import { Word } from "./Word";

export class BoldAction extends AbstractAction{
    constructor(private oldBold: boolean, private newBold: boolean, reference: Word){
        super(reference)
        this.oldBold = oldBold;
        this.newBold = newBold;
    }
    getActionName():string{
        return 
    }
    do():void{
        return this.reference.setBold(this.newBold)
    }
    undo():void{
        return this.reference.setBold(this.oldBold);
    }
}