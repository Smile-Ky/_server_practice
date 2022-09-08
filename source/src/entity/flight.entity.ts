import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name : "flightList"})
export class FlightEntity extends BaseEntity{  

  @PrimaryColumn({type : 'varchar', length : 50, nullable: false})
  uuid : string;

  @Column({type : "varchar", length : 45, nullable: true})
  departure : string;
  
  @Column({type : "varchar", length : 45, nullable: true})
  destination : string;

  @Column({type : "varchar", length : 45, nullable: true})
  departure_times : string;

  @Column({type : "varchar", length : 45, nullable: true})
  arrival_times : string;

}