import { Component,OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cart!:Cart;
  constructor(private cartService: CartService,private foodService:FoodService) { 
  //   // private foodService:FoodService
  //  let foods=foodService.getAll();
  //  cartService.addToCart(foods[1]);
  // //  cartService.addToCart(foods[2]);
  //  cartService.addToCart(foods[3]);
  // //  cartService.addToCart(foods[4]);
  //  cartService.addToCart(foods[5]);
    this.setCart();
  }
   ngOnInit(): void {
       
   }

   setCart() {
    this.cart = this.cartService.getCart();
   }
   removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
   }
   changeQuantity(cartItem:CartItem, quantityInString:string){
       const quantity = parseInt(quantityInString);
       this.cartService.changeQuantity(cartItem.food.id, quantity);
       this.setCart();   
   }
  
}



// import { Component, OnInit } from '@angular/core';
// import { Cart } from '../shared/models/Cart';
// import { CartService } from '../services/cart.service';
// import { CartItem } from '../shared/models/CartItem';
// import { Foods } from '../shared/models/food';
// import { FoodService } from '../services/food/food.service';

// @Component({
//   selector: 'app-cart-page',
//   templateUrl: './cart-page.component.html',
//   styleUrls: ['./cart-page.component.css']
// })
// export class CartPageComponent implements OnInit {
//   cart: Cart = { items: [], totalPrice: 0 };

//   constructor(private cartService: CartService, private foodService: FoodService) { }

//   ngOnInit(): void {
//     this.setCart();
//   }

//   setCart() {
//     this.cart = this.cartService.getCart();
//   }

//   addToCart(food: Foods) {
//     this.cartService.addToCart(food);
//     this.setCart();
//   }

//   removeFromCart(cartItem: CartItem) {
//     this.cartService.removeFromCart(cartItem.food.id);
//     this.setCart();
//   }

//   changeQuantity(cartItem: CartItem, quantityInString: string) {
//     const quantity = parseInt(quantityInString);
//     this.cartService.changeQuantity(cartItem.food.id, quantity);
//     this.setCart();
//   }
  
// }
