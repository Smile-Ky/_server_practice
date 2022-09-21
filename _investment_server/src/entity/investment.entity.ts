import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./product.entity";
import { UserEntity } from "./user.entity";

@Entity({name: "investment"})
export class InvestmentEntity extends BaseEntity{

    @PrimaryGeneratedColumn({type: 'int'})
    investment_id: number;

    @Column({type: 'int', nullable: true, default: 0})
    investment: number;

    @Column({type: 'datetime', default: () => "NOW()"})
    date: Date;
    
    @ManyToOne(type => UserEntity, user => user.user_id)
    @JoinColumn({name: 'user_id'})
    user: UserEntity;

    @ManyToOne(type => ProductEntity, product => product.product_id)
    @JoinColumn({name: 'product_id'})
    product: ProductEntity;
    
}