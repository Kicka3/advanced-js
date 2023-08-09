class Quark{
  constructor(color,flavor){
  this.color=color;
  this.flavor=flavor
  this.baryon_number=1/3
  }
  interact(obj){
       const color1 = obj.color;
       const color2 = this.color;
       this.color = color1;
       obj.color = color2;
    };
}