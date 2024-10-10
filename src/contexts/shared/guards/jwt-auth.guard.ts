import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { FastifyRequest } from "fastify";

import { IS_PUBLIC_KEY } from "@/shared/decorators/public.decorator";
import { Injectable } from "@/shared/dependency-injection/injectable";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true;

    const request: FastifyRequest = context.switchToHttp().getRequest();

    const token = this.extractJwtFromHeader(request);

    if (!token) {
      throw new UnauthorizedException(
        "Token de autenticación no proporcionado",
      );
    }

    request.headers.authorization = token;

    return true;
  }

  private extractJwtFromHeader(request: FastifyRequest): string | null {
    const authHeader = request.headers.authorization;
    return authHeader ? authHeader.replace("Bearer ", "") : null;
  }
}
