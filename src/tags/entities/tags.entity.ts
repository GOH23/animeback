import { Anime } from "src/animes/entities/anime.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tags{
    @PrimaryGeneratedColumn('uuid')
    TagId: string;
    @Column({unique: true})
    Tags: string;
    @CreateDateColumn()
    CreatedAt: Date
    @ManyToMany(()=>Anime,(el)=>el.Tags)
    Animes: Anime[]
}