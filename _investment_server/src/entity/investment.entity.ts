import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./product.entity";
import { UserEntity } from "./user.entity";

@Entity({name: "investment"})
export class InvestmentEntity extends BaseEntity{

    @PrimaryGeneratedColumn({type: 'int'})
    investment_id: string;

    @Column({type: 'int', nullable: true})
    investment: string;

    @Column({type: 'datetime', default: () => "NOW()"})
    date: string;

    @ManyToOne(type => UserEntity, user => user.user_id)
    @JoinColumn({name: 'user_id'})
    user: UserEntity;

    @ManyToOne(type => ProductEntity, product => product.product_id)
    @JoinColumn({name: 'product_id'})
    product: ProductEntity;
}
//num_user, current_amount, state 는 querybuilder 에서 as 로 만들기...

//user_id , product_id, started_at, finsihed_at, total_amount, current_amount, num_users, title