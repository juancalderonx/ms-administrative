import { createMock, Mock } from "@/tests/utils/mock";

import { HealthController } from "@/app/http-api/health/health.controller";

import { Logger } from "@/shared/logger/domain";

describe("HealthController", () => {
  let healthController: HealthController;
  let logger: Mock<Logger>;

  beforeEach(() => {
    logger = createMock<Logger>();
    healthController = new HealthController(logger);
  });

  describe("run", () => {
    it("should return is healthy", () => {
      expect(healthController.run()).toEqual({ status: "ok" });
      expect(logger.info).toHaveBeenCalledTimes(1);
    });
  });
});
