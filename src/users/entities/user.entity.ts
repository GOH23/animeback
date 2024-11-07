import { Link } from "src/links/entities/link.entity";
import { StarRating } from "src/starrating/entities/starrating.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
export enum UserRoles {
    Admin = "Admin",
    User = "User",
    Moderator = "Moderator",
    Premium  = "Premium",
}
@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    Uuid: string;
    @Column({default: false})
    IsPremium: boolean;
    @Column({type: 'simple-json',nullable: true})
    UserMedia: {ProfileImage: string,BannerImage: string}
    @Column({select: false,unique: true})
    Email: string;
    @Column({select: false})
    Password: string;
    @Column()
    Username: string;
    @Column({default: false})
    IsBanned: boolean 
    @Column({type: 'enum',enum: UserRoles,default: UserRoles.User})
    Role: UserRoles
    @OneToMany(()=>StarRating,el =>el.RatedUser,{eager: true})
    StarRating: StarRating[]
    @OneToOne(()=> Link,(lnk)=>lnk.UserOfLink,{
        cascade: true,
        eager: true
    })
    @Column({default: false})
    IsEmailConfirmed: boolean
    @JoinColumn()
    Links: Link
}
