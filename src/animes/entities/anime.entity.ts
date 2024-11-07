
import { StarRating } from "src/starrating/entities/starrating.entity";
import { Tags } from "src/tags/entities/tags.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Anime {
    @PrimaryGeneratedColumn("uuid")
    id: String
    @Column()
    Name: string;
    @Column()
    Description: string;
    @Column({ default: '' })
    ImageAnime: string;
    @Column("text", { array: true, nullable: true })
    PreviewImages: string[];
    @Column({ default: 0 })
    ViewCount: number
    @OneToMany(() => StarRating, (el) => el.RatedAnime, { cascade: true})
    @JoinColumn()
    StarRating: StarRating[]
    @ManyToMany(() => Tags)
    @JoinTable()
    Tags: Tags[]
    /*
        return this.animeRepository
      .createQueryBuilder('anime')
      .leftJoinAndSelect('anime.starRatings', 'starRating')
      .select([
        'anime.id',
        'anime.title',
        // Add other anime fields you want to select
      ])
      .addSelect('COALESCE(AVG(starRating.rating), 0)', 'averageRating')
      .groupBy('anime.id')
      .orderBy('averageRating', 'DESC')
      .getRawMany();
    */
    @CreateDateColumn()
    CreatedAt: Date
}
