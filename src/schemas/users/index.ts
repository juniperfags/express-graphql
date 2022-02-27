import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
class User {
  @PrimaryGeneratedColumn()
  @Field()
  id: string;

  @Column()
  @Field()
  firstname: string;

  @Column()
  @Field()
  lastname: string;

  @Field()
  fullname: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;

  @Column({
    type: Date,
  })
  @Field()
  creationDate: Date;

  @Column({
    type: Date,
  })
  @Field()
  updateDate: Date;

  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}
export default User;
