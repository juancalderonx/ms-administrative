import { Controller, Get, Query, UseGuards } from "@nestjs/common";

import { Token } from "@/shared/decorators";
import { JwtAuthGuard } from "@/shared/guards/jwt-auth.guard";
import { PaginationDto } from "@/shared/http/infrastructure/dto/pagination.dto";

import { FindAllCompaniesUseCase } from "@/contexts/companies/application/use-cases/find-all-companies-use-case/find-all-companies.use-case";
import { V1_COMPANIES } from "@/contexts/companies/infrastructure/http-api/route.constants";

@UseGuards(JwtAuthGuard)
@Controller(V1_COMPANIES)
export class FindAllCompaniesController {
  constructor(
    private readonly findAllCompaniesUseCase: FindAllCompaniesUseCase,
  ) {}

  @Get()
  async run(@Token() token: string, @Query() paginationDto: PaginationDto) {
    return await this.findAllCompaniesUseCase.run(token, paginationDto);
  }
}
