import { type } from "os";
import { BaseEntity, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity({name : "user"})
export class UserEntity extends BaseEntity{  

  @PrimaryColumn({type : 'int', nullable: false})
  user_id : string;

  @ManyToMany(type => ProductEntity)
  @JoinTable({
    name: "investment",
    joinColumn: {
      name: "user_id",
      referencedColumnName: "user_id"
    },
    inverseJoinColumn: {
      name: "product_id",
      referencedColumnName: "product_id"
    }
  })
  products: ProductEntity[] 
}
