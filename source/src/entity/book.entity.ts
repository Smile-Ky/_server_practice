import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name : "bookList"})
export class BookEntity extends BaseEntity{  

  @PrimaryColumn({type : 'varchar', length : 45, nullable: false})
  flight_uuid : string;

  @Column({type : "varchar", length : 45, nullable: true})
  name : string;

  @Column({type : "varchar", length : 45, nullable: true})
  phone : string;
}
