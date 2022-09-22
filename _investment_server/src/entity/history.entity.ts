import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { InvestmentEntity } from "./investment.entity";


@Entity({name: "history"})
export class HistoryEntity extends BaseEntity{

    @PrimaryGeneratedColumn({type: 'int'})
    history_id: number;

    @Column({type: "datetime"})
    date: Date;

    @Column({type: "varchar", length : 45, nullable: true})
    title: string;

    @Column({type: 'int', nullable: true})
    invest: number;

    @Column({type: 'boolean', default: true})
    current_state: boolean;
    
    @Column({type: 'int'})
    user_id: number;

    @Column({type: 'int'})
    product_id: number;
}