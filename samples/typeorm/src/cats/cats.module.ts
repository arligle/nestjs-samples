import { Module } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cat } from "src/entities";
import { CatsController } from "./cats.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [TypeOrmModule],
})
export class CatsModule {}
