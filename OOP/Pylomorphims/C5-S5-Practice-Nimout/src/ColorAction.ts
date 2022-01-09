import { AbstractAction } from "./Abstraction";
import { Color } from "./Color";
import { Word } from "./Word";
export class ColorAction extends AbstractAction{
    constructor(private oldColor: Color,private newColor: Color, reference: Word){
        super(reference);
        this.oldColor = oldColor;
        this.newColor = newColor;
    }
    
    getActionName():string{
        return "";
    }
    do():void{
        return this.reference.setColor(this.newColor);
    }
    undo():void{
        return this.reference.setColor(this.oldColor);
    }

}



