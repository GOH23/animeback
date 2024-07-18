import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Anime {
    @PrimaryGeneratedColumn("uuid")
    id: String
    @Column()
    Name: string;
    @Column()
    Description: string;
    @Column()
    ImageAnime: string;
    
}
