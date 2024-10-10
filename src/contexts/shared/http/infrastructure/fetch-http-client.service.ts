import fetch, { RequestInit, Response } from "node-fetch";

import { Injectable } from "@/shared/dependency-injection/injectable";
import { Logger } from "@/shared/logger/domain";

import { HttpClient } from "../domain/http-client";

@Injectable()
export class FetchHttpClient implements HttpClient {
  constructor(private readonly logger: Logger) {}

  async get<T>(url: string, options?: RequestInit): Promise<T> {
    try {
      const response: Response = await fetch(url, options);
      const responseData = await response.json();
      return responseData as T;
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(error.message);
      } else {
        this.logger.error("An unknown error occurred");
      }
      throw error;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async post<T>(url: string, data: any, options?: RequestInit): Promise<T> {
    const response: Response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      ...options,
    });
    const responseData = await response.json();
    return responseData as T;
  }
}
