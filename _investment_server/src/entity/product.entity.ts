import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name : "product"})
export class ProductEntity extends BaseEntity{  

  @PrimaryColumn({type : 'int', nullable: false})
  product_id : number;

  @Column({type : "varchar", length : 45, nullable: true})
  title : string;

  @Column({type : "int", nullable: true})
  total_amount :number;

  @Column({type : "datetime", nullable: true})
  started_at : Date;

  @Column({type : "datetime", nullable: true})
  finished_at : Date;
}
