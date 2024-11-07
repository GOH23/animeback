import { Anime } from "src/animes/entities/anime.entity";

import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tags{
    @PrimaryGeneratedColumn('uuid')
    TagId: string;
    @Column({unique: true})
    TagName: string;
    @CreateDateColumn({select: false})
    CreatedAt: Date
}