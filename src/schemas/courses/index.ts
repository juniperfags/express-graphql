import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "../users";

@ObjectType()
@Entity()
class Course {
  @PrimaryGeneratedColumn()
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field({ nullable: true })
  sku?: string;

  @Column({
    type: Date,
  })
  @Field()
  creationDate: Date;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];

  constructor(course: Partial<Course>) {
    Object.assign(this, course);
  }
}
export default Course;
