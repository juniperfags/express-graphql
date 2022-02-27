import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Auth {
  @Field()
  token: string;
  @Field()
  isLogged: boolean;
  @Field()
  lastUpdated: Date;
}
