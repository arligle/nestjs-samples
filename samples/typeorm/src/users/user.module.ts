import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../entities";
import { UsersService } from "./users.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [],
  exports: [TypeOrmModule],
})
export class UsersModule {}
