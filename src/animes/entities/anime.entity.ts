
import { StarRating } from "src/starrating/entities/starrating.entity";
import { Tags } from "src/tags/entities/tags.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Anime {
    @PrimaryGeneratedColumn("uuid")
    id: String
    @Column()
    Name: string;
    @Column()
    Description: string;
    @Column({default: ''})
    ImageAnime: string;
    @Column("text",{array: true,nullable: true})
    PreviewImages: string[];
    @Column({default: 0})
    ViewCount: number
    @OneToMany(()=>StarRating,(el)=>el.RatedAnime,{cascade: true})
    @JoinColumn()
    StarRating: StarRating[]
    @ManyToMany(()=>Tags,(el)=>el.Animes)
    Tags: Tags[]
    @CreateDateColumn()
    CreatedAt: Date
}
