import {
  Mat2Primitive,
  BasePrimitive,
  Bvec4Primitive,
  AnyCastablePrimitive,
} from "../../primitive";
import { ConcatenateImplementation } from "../../implementations/concatenate-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";
import { CastToBooleanImplementation } from "../../implementations/cast-to-boolean-implementation";
import { Expression } from "../../expression";
import { Four } from "../total-components";

export function bvec4(
  a: Expression<BasePrimitive | Mat2Primitive>
): Expression<Bvec4Primitive>;

export function bvec4(...a: Four): Expression<Bvec4Primitive>;

export function bvec4(
  ...args: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Bvec4Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      `bvec4`,
      4,
      args.map((arg) => new CastToBooleanImplementation(arg.javascript))
    ),
    new FunctionImplementation(
      `bvec4`,
      `bvec4`,
      args.map((arg) => arg.glsl)
    )
  );
}
