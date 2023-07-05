import { Foods } from "./food";

export class CartItem{
    constructor(food:Foods){
        this.food=food;
        // this.price;// we can call price method useingthis methoad
    }
    food:Foods
    quantity:number=1;
    get price():number{
      return this.food.price * this.quantity;    
    }
}