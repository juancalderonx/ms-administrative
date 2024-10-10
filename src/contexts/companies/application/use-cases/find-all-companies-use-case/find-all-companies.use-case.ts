import type { HttpClient } from "@/shared/http/domain/http-client";

import { Inject } from "@/shared/dependency-injection/inject";
import { Injectable } from "@/shared/dependency-injection/injectable";
import { PaginationDto } from "@/shared/http/infrastructure/dto/pagination.dto";
import { HTTP_CLIENT } from "@/shared/http/infrastructure/http-client.constants";

import { FIND_ALL_COMPANIES } from "@/contexts/companies/infrastructure/microservice.constants";

@Injectable()
export class FindAllCompaniesUseCase {
  constructor(@Inject(HTTP_CLIENT) private readonly httpClient: HttpClient) {}

  async run(token: string, paginationDto: PaginationDto) {
    return await this.httpClient.get(FIND_ALL_COMPANIES, {
      params: {
        page: paginationDto.page || 1,
        limit: paginationDto.limit || 10,
      },
      headers: {
        Authorization: token,
      },
    });
  }
}
