import { Body, Controller, Post } from "@nestjs/common";

import { Token } from "@/shared/decorators";

import { CreateCompanyUseCase } from "@/contexts/companies/application/use-cases/create-company-use-case/create-company.use-case";
import { V1_COMPANIES } from "@/contexts/companies/infrastructure/http-api/route.constants";
import { CreateCompanyHttpDto } from "@/contexts/companies/infrastructure/http-api/v1/create-company/create-company.http-dto";

@Controller(V1_COMPANIES)
export class CreateCompanyController {
  constructor(private readonly createCompanyUseCase: CreateCompanyUseCase) {}

  @Post()
  async run(
    @Token() token: string,
    @Body() createCompanyHttpDto: CreateCompanyHttpDto,
  ) {
    return await this.createCompanyUseCase.run(token, createCompanyHttpDto);
  }
}
