class Rectangle {
  width: number;
  height: number;
  area: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.area = this.width * this.height;
  }

  changeWidth(width: number){
    this.width = width;
    this.area = width * this.height;
  }
  changHeight(height: number){
    this.height = height;
    this.area = this.width * height;
  }
  
}

let smallRectangle = new Rectangle(4, 8);
smallRectangle.changeWidth(50);
console.log(smallRectangle);



