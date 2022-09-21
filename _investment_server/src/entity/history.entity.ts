import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { InvestmentEntity } from "./investment.entity";


@Entity({name: "history"})
export class HistoryEntity extends BaseEntity{

    @PrimaryGeneratedColumn({type: 'int'})
    history_id: number;

    @Column({type: "varchar", length : 45})
    title: string;

    @Column({type: 'int'})
    invest: number;

    @Column({type: 'boolean'})
    current_state: boolean;
    
    @OneToOne(() => InvestmentEntity)
    @JoinColumn({name: 'investment_id'})
    investment: InvestmentEntity;
}