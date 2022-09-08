import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({name : "airportList"})
@Unique(['id'])
export class AirportEntity extends BaseEntity{  

  @PrimaryGeneratedColumn({type : 'bigint', comment : 'ID'})
  id : string;

  @Column({type : "varchar", length : 20, nullable: false})
  name : string;

  @Column({type : "varchar", length : 20, nullable: false})
  code : string;
}