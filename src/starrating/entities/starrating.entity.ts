import { Max, Min } from "class-validator";
import { Anime } from "src/animes/entities/anime.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StarRating {
    @PrimaryGeneratedColumn("uuid")
    id: string
    @ManyToOne(()=>User,{eager: false})
    RatedUser: User;
    @ManyToOne(()=>Anime,{eager: false})
    RatedAnime: Anime
    @Column()
    @Min(1)
    @Max(5)
    Rating: number
}
