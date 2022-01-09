import { Color } from "./Color";

export class Word{
    constructor(private text: string, private isBold: boolean, private color:Color){}
    isEqual(other: Word): boolean{
        return this.text === other.text && this.isBold === other.isBold && this.color === other.color;
    }
    getCode():string{
        return "<word" +" "+ "text='" +this.text+ "', " + "bold='" + this.isBold+ "', "+ "color='" + this.color+"' />";
    }
    setText(text:string){
        this.text = text;
    }
    setColor(color:Color){
        this.color = color;
    }
    setBold(isBold: boolean){
        this.isBold = isBold;
    }
}