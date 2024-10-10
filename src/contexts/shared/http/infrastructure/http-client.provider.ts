// src/shared/http/http-client.provider.ts

import { Provider } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { AxiosHttpClient } from "./axios-http-client.service";
import { FetchHttpClient } from "./fetch-http-client.service";
import { HTTP_CLIENT } from "./http-client.constants";

export const HttpClientProvider: Provider = {
  provide: HTTP_CLIENT,
  useFactory: (
    configService: ConfigService,
    axiosHttpClient: AxiosHttpClient,
    fetchHttpClient: FetchHttpClient,
  ) => {
    const httpClientType =
      configService.get<string>("HTTP_CLIENT_TYPE") || "axios";

    switch (httpClientType) {
      case "axios": {
        return axiosHttpClient;
      }
      case "fetch": {
        return fetchHttpClient;
      }
      default: {
        throw new Error(`HTTP_CLIENT_TYPE "${httpClientType}" no es válido.`);
      }
    }
  },
  inject: [ConfigService, AxiosHttpClient, FetchHttpClient],
};
