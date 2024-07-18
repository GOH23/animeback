import { Link } from "src/links/entities/link.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    Uuid: string;
    @Column()
    IsPremium: boolean;
    @Column()
    ProfileImage: string;
    @OneToOne(()=> Link)
    @JoinColumn()
    Links: Link[]
}
