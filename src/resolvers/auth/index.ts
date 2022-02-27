import { Arg, Mutation, Resolver } from "type-graphql";
import { Service } from "typedi";
import UserService from "../../services/users";
import { Auth } from "../users/class";
import { LoginUserInput } from "../users/class/inputs";

@Service()
@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => Auth)
  login(@Arg("input") loginUserInput: LoginUserInput) {
    return this.userService.login(loginUserInput);
  }
}

export default AuthResolver;
