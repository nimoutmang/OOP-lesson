import { AbstractAction } from "./Abstraction";
import { Word } from "./Word";

export class TextAction extends AbstractAction{
    constructor(private oldText: string, private newText: string, reference: Word){
        super(reference);
        this.oldText = oldText;
        this.newText = newText;
    }
    getActionName():string{
        return ""
    }
    do():void{
        return this.reference.setText(this.newText)
    }
    
    undo():void{
        return this.reference.setText(this.oldText)
    }

}