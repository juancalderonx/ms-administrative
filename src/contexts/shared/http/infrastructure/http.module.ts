import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AxiosHttpClient } from "@/shared/http/infrastructure/axios-http-client.service";
import { FetchHttpClient } from "@/shared/http/infrastructure/fetch-http-client.service";

import { HttpClientProvider } from "./http-client.provider";

@Global()
@Module({
  imports: [ConfigModule],
  providers: [HttpClientProvider, FetchHttpClient, AxiosHttpClient],
  exports: [HttpClientProvider],
})
export class HttpModule {}
