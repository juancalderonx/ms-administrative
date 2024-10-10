import { Inject as NestJsInject } from "@nestjs/common";

export function Inject(token: string) {
  return NestJsInject(token);
}
