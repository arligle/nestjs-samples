import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";
import { Cat } from "../entities/cats.entity";

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private CatsRepository: Repository<Cat>,
  ) {}

  findOne(id: number): Promise<Cat | null> {
    return this.CatsRepository.findOneBy({ id });
  }
}
