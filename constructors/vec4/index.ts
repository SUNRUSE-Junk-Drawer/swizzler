import {
  Vec4Primitive,
  Mat2Primitive,
  BasePrimitive,
  AnyCastablePrimitive,
} from "../../primitive";
import { ConcatenateImplementation } from "../../implementations/concatenate-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";
import { Expression } from "../../expression";
import { Four } from "../total-components";
import { CastToFloatImplementation } from "../../implementations/cast-to-float-implementation";

export function vec4(
  a: Expression<BasePrimitive | Mat2Primitive>
): Expression<Vec4Primitive>;

export function vec4(...a: Four): Expression<Vec4Primitive>;

export function vec4(
  ...args: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Vec4Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      `vec4`,
      4,
      args.map((arg) => new CastToFloatImplementation(arg.javascript))
    ),
    new FunctionImplementation(
      `vec4`,
      `vec4`,
      args.map((arg) => arg.glsl)
    )
  );
}
