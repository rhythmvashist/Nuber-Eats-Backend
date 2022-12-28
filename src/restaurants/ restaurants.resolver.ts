import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";
import { Restaurant } from "./enitites/restaurants.entity";

@Resolver(of => Restaurant)
export class RestaurantsResolvers{
  
   @Query(returns  => Restaurant)
   myRestaurants(){
    return true
   }

   @Query(returns => [Restaurant])
   restaurants(@Args('veganOnly') veganOnly:boolean): Restaurant[]{
    return [];
   }

   @Mutation(returns => Boolean)
   createRestaurants(@Args() CreateRestaurantDto:CreateRestaurantDto):boolean{
    return true
   }
}