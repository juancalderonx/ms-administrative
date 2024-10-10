import { Module } from "@nestjs/common";

import { CreateCompanyUseCase } from "@/contexts/companies/application/use-cases/create-company-use-case/create-company.use-case";
import { CreateCompanyController } from "@/contexts/companies/infrastructure/http-api/v1/create-company/create-company.controller";

@Module({
  controllers: [CreateCompanyController],
  providers: [CreateCompanyUseCase],
  exports: [CreateCompanyUseCase],
})
export class CompaniesModule {}
