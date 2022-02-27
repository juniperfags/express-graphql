import { Inject, Service } from "typedi";
import { UserArgs } from "../../resolvers/users/class/args";
import User from "../../schemas/users";
import { Connection, Repository } from "typeorm";
import {
  CreateUserInput,
  LoginUserInput,
} from "../../resolvers/users/class/inputs";
import jwt from "jsonwebtoken";
import { Auth } from "../../resolvers/users/class";

@Service()
class UserService {
  private userRepository: Repository<User>;

  getUserRepository() {
    return this.userRepository;
  }

  constructor(
    @Inject("CONNECTION")
    private readonly connection: Connection
  ) {
    this.userRepository = this.connection.getRepository(User);
  }

  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw Error("User was not found");
    }

    return user;
  }
  async findAll({ skip, take }: UserArgs): Promise<User[]> {
    const users = await this.userRepository.find();

    return users;
  }

  async create({
    firstname,
    lastname,
    email,
    password,
  }: CreateUserInput): Promise<User> {
    const user = new User({
      firstname,
      lastname,
      email,
      password,
      creationDate: new Date(),
      updateDate: new Date(),
    });

    return await this.userRepository.save(user);
  }

  async login({ email, password }: LoginUserInput): Promise<Auth> {
    const user = await this.getUserRepository().findOne({
      where: {
        email,
        password,
      },
    });

    if (!user) {
      throw new Error("User was not found");
    }

    const token = jwt.sign({ foo: "bar" }, String(process.env.SECRET_JWT));

    return {
      token,
      isLogged: true,
      lastUpdated: new Date(),
    };
  }
}

export default UserService;
