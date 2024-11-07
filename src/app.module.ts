import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinksModule } from './links/links.module';
import { AnimesModule } from './animes/animes.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Link } from './links/entities/link.entity';
import { Anime } from './animes/entities/anime.entity';
import { AuthModule } from './auth/auth.module';
import { FileController } from './file/file.controller';
import { StarratingModule } from './starrating/starrating.module';
import { StarRating } from './starrating/entities/starrating.entity';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { TagsModule } from './tags/tags.module';
import { Tags } from './tags/entities/tags.entity';
import { ConfigModule } from '@nestjs/config';
import { EmailconfirmationModule } from './emailconfirmation/emailconfirmation.module';
import { EmailModule } from './email/email.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true
    }),
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [User,StarRating, Link, Anime,Tags],
        schema:  process.env.DB_SCHEMA,
        autoLoadEntities: true,
        synchronize: true
      }
    ), LinksModule, AnimesModule, UsersModule, AuthModule, StarratingModule, BookmarksModule, TagsModule, EmailconfirmationModule, EmailModule],
  controllers: [AppController, FileController],
  providers: [AppService],
})
export class AppModule { }
