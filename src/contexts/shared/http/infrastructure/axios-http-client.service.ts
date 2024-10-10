import { Injectable } from "@nestjs/common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

import { HttpClient } from "../domain/http-client";

@Injectable()
export class AxiosHttpClient implements HttpClient {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create();
  }

  async get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(
      url,
      options,
    );
    return response.data;
  }

  async post<T>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any,
    options?: AxiosRequestConfig,
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post(
      url,
      data,
      options,
    );
    return response.data;
  }
}
