import { MaxLength } from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";

@InputType()
export class CreateUserInput {
  @Field()
  @MaxLength(15)
  firstname: string;

  @Field()
  @MaxLength(40)
  lastname: string;

  @Field()
  @MaxLength(40)
  password: string;

  @Field({ nullable: true })
  @MaxLength(40)
  email?: string;
}

@InputType()
export class LoginUserInput {
  @Field({ nullable: true })
  @MaxLength(40)
  email: string;

  @Field({ nullable: true })
  @MaxLength(40)
  password: string;
}

@ObjectType()
export class UpdateUserInput {
  @Field()
  @MaxLength(15)
  firstname: string;

  @Field()
  @MaxLength(40)
  lastname: string;

  @Field()
  @MaxLength(40)
  password: string;

  @Field({ nullable: true })
  @MaxLength(40)
  email?: string;
}
