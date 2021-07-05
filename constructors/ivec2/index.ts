import {
  Ivec2Primitive,
  BasePrimitive,
  AnyCastablePrimitive,
} from "../../primitive";
import { ConcatenateImplementation } from "../../implementations/concatenate-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";
import { Expression } from "../../expression";
import { Two } from "../total-components";
import { CastToIntImplementation } from "../../implementations/cast-to-int-implementation";

export function ivec2(a: Expression<BasePrimitive>): Expression<Ivec2Primitive>;

export function ivec2(...a: Two): Expression<Ivec2Primitive>;

export function ivec2(
  ...args: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Ivec2Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      `ivec2`,
      2,
      args.map((arg) => new CastToIntImplementation(arg.javascript))
    ),
    new FunctionImplementation(
      `ivec2`,
      `ivec2`,
      args.map((arg) => arg.glsl)
    )
  );
}
