import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Link {
    @PrimaryGeneratedColumn("uuid")
    Uuid: string;
    @Column()
    TikTok: string;
    @Column()
    YouTube: string;
    @Column()
    Telegram: string;
}
