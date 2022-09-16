import { BaseEntity, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name : "user"})
export class UserEntity extends BaseEntity{  

  @PrimaryColumn({type : 'int', nullable: false})
  user_id : string;
}
