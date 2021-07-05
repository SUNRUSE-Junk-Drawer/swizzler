import {
  Vec2Primitive,
  BasePrimitive,
  AnyCastablePrimitive,
} from "../../primitive";
import { ConcatenateImplementation } from "../../implementations/concatenate-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";
import { Expression } from "../../expression";
import { Two } from "../total-components";
import { CastToFloatImplementation } from "../../implementations/cast-to-float-implementation";

export function vec2(a: Expression<BasePrimitive>): Expression<Vec2Primitive>;

export function vec2(...a: Two): Expression<Vec2Primitive>;

export function vec2(
  ...args: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Vec2Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      `vec2`,
      2,
      args.map((arg) => new CastToFloatImplementation(arg.javascript))
    ),
    new FunctionImplementation(
      `vec2`,
      `vec2`,
      args.map((arg) => arg.glsl)
    )
  );
}
