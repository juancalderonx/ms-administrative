import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { HealthModule } from "@/app/http-api/health/health.module";
import { ResponseNormalizerModule } from "@/app/http-api/response-normalizer/response.normalizer.module";

import { HttpModule } from "@/shared/http/infrastructure/http.module";
import { LoggerModule } from "@/shared/logger/infrastructure/logger.module";

import { CompaniesModule } from "@/contexts/companies/infrastructure/companies.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    LoggerModule,
    HttpModule,
    HealthModule,
    ResponseNormalizerModule,
    CompaniesModule,
  ],
})
export class AppModule {}
