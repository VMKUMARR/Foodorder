import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number): Foods{
   return this.getAll().find(food =>food.id==id)!;
  }
  getAllFoodByTag(tag:string) :Foods[]{
    return tag == "All"?
    this.getAll():this.getAll().filter(food =>food.tags?.includes(tag));
    // if(tag=='All')
    // return this.getAll()
    // else
    // return this.getAll().filter(food =>food.tags?.includes(tag));
   }
   getAllTag():Tag[]{
    return[
      {name:'All',count:4},
      {name:'Breakfast',count:10},
      {name:'Breaktime',count:1},
      {name:'Lunch',count:3},
      {name:'Dinner',count:2},
      {name:'Pizza',count:7}
    ];
   }

  getAll():Foods[]{
    return[
      {
        id:1,
        name:'Lemon Tea',
        cookTime:'10-20',
        price:80,
        favorite:true,
        origins:['Asam','Kerela','Gujrat'],
        star :4.3,
        imageUrl:'/assets/food1.jpg',
        tags:['Breakfast'],
      },
      {
        id:2,
        name:'Black Tea',
        cookTime:'10-20',
        price:100,
        favorite:true,
        origins:['Asam','Gujrat'],
        star :4.5,
        imageUrl:'/assets/food2.jpg',
        tags:['Breakfast','Breaktime'],
      },
      {
        id:3,
        name:'Black Coffee',
        cookTime:'10-15',
        price:100,
        favorite:false,
        origins:['Asam','Bangal'],
        star :4.3,
        imageUrl:'/assets/food3.jpg',
        tags:['Breakfast'],
      },
      {
        id:4,
        name:'Bread-selad',
        cookTime:'20-25',
        price:300,
        favorite:true,
        origins:['India','Itali'],
        star :4.7,
        imageUrl:'/assets/food4.jpg',
        tags:['Breakfast','Lunch'],
      },
      {
        id:5,
        name:'Coffee',
        cookTime:'10-20',
        price:80,
        favorite:false,
        origins:['Asam','Kerala','Gujrat'],
        star :4.3,
        imageUrl:'/assets/food5.jpg',
        tags:['Breakfast'],
      },
      {
        id:6,
        name:'Strobery-Bun',
        cookTime:'10-20',
        price:70,
        favorite:false,
        origins:['Mumbai','Dehli'],
        star :4.3,
        imageUrl:'/assets/food6.jpg',
        tags:['Breakfast'],
      },
      {
        id:7,
        name:'Nan-beriyan',
        cookTime:'30-40',
        price:150,
        favorite:true,
        origins:['India','Pakistan','Itali'],
        star :4.9,
        imageUrl:'/assets/food7.jpg',
        tags:['Lunch','Dinner'],
      },
      {
        id:8,
        name:'Selad-Sandvich',
        cookTime:'10-20',
        price:80,
        favorite:false,
        origins:['London,Mumbai'],
        star :4.3,
        imageUrl:'/assets/food8.jpg',
        tags:['Breakfast'],
      },
      {
        id:9,
        name:'Chizz Burger',
        cookTime:'10-20',
        price:50,
        favorite:false,
        origins:['India,Itali'],
        star :3.9,
        imageUrl:'/assets/food9.jpg',
        tags:['Breakfast'],
      },
      {
        id:10,
        name:'Hlaf-Eggfray',
        cookTime:'10-20',
        price:150,
        favorite:true,
        origins:['India','Dehli'],
        star :4.3,
        imageUrl:'/assets/food10.jpg',
        tags:['Breakfast'],
      },
      {
        id:11,
        name:'Frey selad',
        cookTime:'20-25',
        price:200,
        favorite:false,
        origins:['India','London','Tokiyo'],
        star :4.5,
        imageUrl:'/assets/food11.jpg',
        tags:['Breakfast'],
      },
      { 
        id:12,
        name:'Bread selad',
        cookTime:'20-25',
        price:300,
        favorite:false,
        origins:['India','London','Tokiyo'],
        star :4.5,
        imageUrl:'/assets/food12.jpg',
        tags:['Lunch','Dinner'],
     },
    {
    id:13,
    name:'Italian-Pizza',
    cookTime:'20-30',
    price:200,
    favorite:true,
    origins:['Asam','UK','Itali','Kerela','Gujrat'],
    star :4.3,
    imageUrl:'/assets/food13.jpg',
    tags:['Breakfast','lunch','Dinner','Pizza'],
    },
    {
      id:14,
      name:'Gralic-Pizaa',
      cookTime:'20-30',
      price:270,
      favorite:true,
      origins:['Asam','UK','Itali','Kerela','Gujrat'],
      star :4.3,
      imageUrl:'/assets/food14.jpg',
      tags:['Breakfast','lunch','Dinner','Pizza'],
      },
      {
        id:15,
        name:'Panner Chizz-Puzaa',
        cookTime:'20-30',
        price:210,
        favorite:false,
        origins:['Asam','UK','Itali','Kerela','Gujrat'],
        star :4.3,
        imageUrl:'/assets/food15.jpg',
        tags:['Breakfast','lunch','Dinner','Pizza']
        },
        {
          id:16,
          name:'Mix Chizz-Pizza',
          cookTime:'20-30',
          price:250,
          favorite:false,
          origins:['Asam','UK','Itali','Kerela','Gujrat'],
          star :4.3,
          imageUrl:'/assets/food16.jpg',
          tags:['Breakfast','lunch','Dinner','Pizza'],
          },
          {
            id:17,
            name:'Shahi-Pizza',
            cookTime:'20-30',
            price:300,
            favorite:true,
            origins:['Asam','UK','Itali','Kerela','Gujrat'],
            star :4.3,
            imageUrl:'/assets/food17.jpg',
            tags:['Breakfast','lunch','Dinner','Pizza'],
            },
            {
              id:18,
              name:'Garlic Chizz-Pizza',
              cookTime:'20-30',
              price:260,
              favorite:true,
              origins:['Asam','UK','Itali','Kerela','Gujrat'],
              star :4.3,
              imageUrl:'/assets/food18.jpg',
              tags:['Breakfast','lunch','Dinner','Pizza'],
              },
              {
                id:19,
                name:'Tameto Chizz-Pizza',
                cookTime:'20-30',
                price:230,
                favorite:true,
                origins:['Asam','UK','Itali','Kerela','Gujrat'],
                star :4.3,
                imageUrl:'/assets/food19.jpg',
                tags:['Breakfast','lunch','Dinner','Pizza'],
                },
                {
                  id:20,
                  name:'Margreta-Pizza',
                  cookTime:'20-30',
                  price:200,
                  favorite:false,
                  origins:['Asam','UK','Itali','Kerela','Gujrat'],
                  star :4.3,
                  imageUrl:'/assets/food20.jpg',
                  tags:['Breakfast','lunch','Dinner','Pizza'],
                  }, 
                  {
                    id:21,
                    name:'Tameto-Pizza Slice',
                    cookTime:'20-30',
                    price:180,
                    favorite:true,
                    origins:['Asam','UK','Itali','Kerela','Gujrat'],
                    star :4.3,
                    imageUrl:'/assets/food21.jpg',
                    tags:['Breakfast','lunch','Dinner','Pizza'],
                    }

      
    ];
  }
}


