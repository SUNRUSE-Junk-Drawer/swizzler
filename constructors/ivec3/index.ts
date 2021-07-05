import {
  Ivec3Primitive,
  BasePrimitive,
  AnyCastablePrimitive,
} from "../../primitive";
import { ConcatenateImplementation } from "../../implementations/concatenate-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";
import { Expression } from "../../expression";
import { Three } from "../total-components";
import { CastToIntImplementation } from "../../implementations/cast-to-int-implementation";

export function ivec3(a: Expression<BasePrimitive>): Expression<Ivec3Primitive>;

export function ivec3(...a: Three): Expression<Ivec3Primitive>;

export function ivec3(
  ...args: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Ivec3Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      `ivec3`,
      3,
      args.map((arg) => new CastToIntImplementation(arg.javascript))
    ),
    new FunctionImplementation(
      `ivec3`,
      `ivec3`,
      args.map((arg) => arg.glsl)
    )
  );
}
