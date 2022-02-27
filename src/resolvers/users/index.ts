import {
  Arg,
  Args,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  ResolverInterface,
  Root,
  UseMiddleware,
} from "type-graphql";
import { Service } from "typedi";
import { Context } from "vm";
import { JwtMiddleware } from "../../middlewares/auth/jwt";
import User from "../../schemas/users";
import UserService from "../../services/users";
import { UserArgs } from "./class/args";
import { CreateUserInput } from "./class/inputs";

@Service()
@Resolver(() => User)
class UserResolver implements ResolverInterface<User> {
  constructor(private userService: UserService) {}

  @Query(() => User)
  @UseMiddleware(JwtMiddleware)
  findOne(@Arg("id") id: number, @Ctx() ctx: Context) {
    return this.userService.findById(id);
  }

  @Query(() => [User])
  @UseMiddleware(JwtMiddleware)
  findAll(@Args() { skip, take }: UserArgs, @Ctx() ctx: Context) {
    return this.userService.findAll({ skip, take });
  }

  @FieldResolver()
  fullname(@Root() user: User) {
    return `${user.firstname} ${user.lastname}`;
  }

  @Mutation(() => User)
  create(@Arg("input") createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Mutation(() => User)
  update(@Arg("input") createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }
}
export default UserResolver;
