import { Request, Response, NextFunction } from "express";
import { MiddlewareFn } from "type-graphql";

export const JwtMiddleware: MiddlewareFn = async (
  { args, context, info, root },
  next
) => {
  console.log(args);

  console.log(context);

  await next();
};
