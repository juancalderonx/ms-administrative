import type { HttpClient } from "@/shared/http/domain/http-client";

import { Inject } from "@/shared/dependency-injection/inject";
import { Injectable } from "@/shared/dependency-injection/injectable";
import { HTTP_CLIENT } from "@/shared/http/infrastructure/http-client.constants";

import { CREATE_COMPANY } from "@/contexts/companies/infrastructure/microservice.constants";

import { CreateCompanyDto } from "./create-company.dto";

@Injectable()
export class CreateCompanyUseCase {
  constructor(@Inject(HTTP_CLIENT) private readonly httpClient: HttpClient) {}

  async run(token: string, dto: CreateCompanyDto) {
    return await this.httpClient.post(CREATE_COMPANY, dto, {
      headers: {
        Authorization: token,
      },
    });
  }
}
