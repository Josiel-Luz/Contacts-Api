import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}

export { Contact };
