import { Controller, Get, Param } from "@nestjs/common";
import { CatsService } from "./cats.service";

@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get(":id")
  async findById(@Param("id") id) {
    return await this.catsService.findOne(id);
  }
}
