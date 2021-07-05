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

/**
 * Constructs a four-dimensional boolean vector.
 * @param a The contents of the vector.  If one component is given, it is repeated to fill the vector.  For integers and floats, 0 = false, otherwise, true.
 * @returns A four-dimensional boolean vector constructed using the given contents.
 */
export function bvec4(
  a: Expression<BasePrimitive | Mat2Primitive>
): Expression<Bvec4Primitive>;

export function bvec4(...a: Four): Expression<Bvec4Primitive>;

export function bvec4(
  ...a: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Bvec4Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      `bvec4`,
      4,
      a.map((arg) => new CastToBooleanImplementation(arg.javascript))
    ),
    new FunctionImplementation(
      `bvec4`,
      `bvec4`,
      a.map((arg) => arg.glsl)
    )
  );
}
