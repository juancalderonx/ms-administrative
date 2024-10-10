import { Module } from "@nestjs/common";

import { CreateCompanyUseCase } from "@/contexts/companies/application/use-cases/create-company-use-case/create-company.use-case";
import { FindAllCompaniesUseCase } from "@/contexts/companies/application/use-cases/find-all-companies-use-case/find-all-companies.use-case";
import { CreateCompanyController } from "@/contexts/companies/infrastructure/http-api/v1/create-company/create-company.controller";
import { FindAllCompaniesController } from "@/contexts/companies/infrastructure/http-api/v1/find-all-companies/find-all-companies.controller";

@Module({
  controllers: [CreateCompanyController, FindAllCompaniesController],
  providers: [CreateCompanyUseCase, FindAllCompaniesUseCase],
  exports: [CreateCompanyUseCase, FindAllCompaniesUseCase],
})
export class CompaniesModule {}
