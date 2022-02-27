import { ArgsType, Field, Int } from "type-graphql";

@ArgsType()
export class UserArgs {
  @Field((type) => Int, { nullable: true, defaultValue: 10 })
  skip?: number;
  @Field((type) => Int, { nullable: true, defaultValue: 20 })
  take?: number;
}
