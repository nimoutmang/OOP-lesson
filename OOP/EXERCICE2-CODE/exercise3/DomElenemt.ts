class DomElement {
    private name: string;
    private parent!: DomElement;
    private children: DomElement[] = [];
    constructor(name: string) {
      this.name = name;
  }
  getName():string{
      return this.name;
  }
  isRoot():boolean{
      if(this.parent === undefined){
          return true;
      }else{
          return false;
      }
  }
  addChild(child:DomElement){
      this.children.push(child);
  }
  setParent(parent:DomElement){
      this.parent = parent;
  }
  }
  
  let html = new DomElement("html");
  let head = new DomElement("head");
  let body = new DomElement("body");
  let title = new DomElement("title");
  let a = new DomElement("a");
  let h1 = new DomElement("h1");
  
  html.addChild(head);
  html.addChild(body);
  head.setParent(html);
  head.addChild(title);
  body.setParent(html);
  body.addChild(a);
  body.addChild(h1);
  title.setParent(head);
  a.setParent(body);
  h1.setParent(body);
  
  console.log(html.getName());
  console.log(body.getName());
  console.log(h1.getName());
  console.log(h1.isRoot());
  