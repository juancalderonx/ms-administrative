import { Controller, Get } from "@nestjs/common";

import { Logger } from "@/shared/logger/domain";

@Controller("health")
export class HealthController {
  constructor(private readonly logger: Logger) {}
  @Get()
  run() {
    this.logger.info("Health check");
    return { status: "ok" };
  }
}
