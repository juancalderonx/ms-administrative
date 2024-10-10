import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { FastifyRequest } from "fastify";

export const Token = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): string | null => {
    const request: FastifyRequest = ctx.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    return authHeader ?? null;
  },
);
