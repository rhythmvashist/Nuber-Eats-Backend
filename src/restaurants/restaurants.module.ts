import { Module } from '@nestjs/common';
import { RestaurantsResolvers } from './ restaurants.resolver';

@Module({
    providers:[RestaurantsResolvers]
})
export class RestaurantsModule {}
