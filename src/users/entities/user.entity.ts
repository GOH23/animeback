import { Link } from "src/links/entities/link.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
enum UserRoles {
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
    @Column({unique: true})
    Email: string;
    @Column()
    Password: string;
    @Column()
    Username: string;
    @Column({type: 'enum',enum: UserRoles,default: UserRoles.User})
    Role: UserRoles
    @OneToOne(()=> Link,(lnk)=>lnk.UserOfLink,{
        cascade: true
    })
    @JoinColumn()
    Links: Link
}
