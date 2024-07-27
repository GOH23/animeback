import { Anime } from "src/animes/entities/anime.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StarRating {
    @PrimaryGeneratedColumn("uuid")
    id: string
    @ManyToOne(()=>User)
    RatedUser: User;
    @ManyToOne(()=>Anime)
    RatedAnime: Anime
}
