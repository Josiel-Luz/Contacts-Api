import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from "typeorm";
import { hashSync } from "bcryptjs";
import { Contact } from "./contact.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: number;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];

  @BeforeUpdate()
  @BeforeInsert()
  hashpass() {
    this.password = hashSync(this.password, 10);
  }
}

export { User };
