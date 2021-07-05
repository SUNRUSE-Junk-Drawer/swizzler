import {
  Ivec4Primitive,
  Mat2Primitive,
  BasePrimitive,
  AnyCastablePrimitive,
} from "../../primitive";
import { ConcatenateImplementation } from "../../implementations/concatenate-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";
import { Expression } from "../../expression";
import { Four } from "../total-components";
import { CastToIntImplementation } from "../../implementations/cast-to-int-implementation";

export function ivec4(
  a: Expression<BasePrimitive | Mat2Primitive>
): Expression<Ivec4Primitive>;

export function ivec4(...a: Four): Expression<Ivec4Primitive>;

export function ivec4(
  ...args: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Ivec4Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      `ivec4`,
      4,
      args.map((arg) => new CastToIntImplementation(arg.javascript))
    ),
    new FunctionImplementation(
      `ivec4`,
      `ivec4`,
      args.map((arg) => arg.glsl)
    )
  );
}
