import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Bike {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column({type: 'int'})
    price: number;
    @Column({type:'varchar', length:255})
    company: string;
    @Column({type:'varchar', length: 255})
    describe:  string;
}
