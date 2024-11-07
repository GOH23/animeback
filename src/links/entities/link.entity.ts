import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Link {
    @PrimaryGeneratedColumn("uuid")
    Uuid: string;
    @Column({nullable: true})
    TikTok: string;
    @Column({nullable: true})
    YouTube: string;
    @Column({nullable: true})
    Telegram: string;
    @OneToOne(()=>User,us=>us.Links)
    UserOfLink: User
}
