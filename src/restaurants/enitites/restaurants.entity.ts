import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Restaurant{
    // here we can use anything in place of "is" like  type or just _
    @Field(is => String)
    name:string;
    @Field(type => Boolean,{nullable:true})
    isVegan:Boolean
    @Field(is => String)
    address:string;
    @Field(is => String)
    ownerName:string;

}