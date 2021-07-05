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

/**
 * Constructs a four-dimensional integer vector.
 * @param a The contents of the vector.  False = 0, true = 1.  Floats will be rounded towards zero.  If one component is given, it is repeated to fill the vector.
 * @returns A four-dimensional integer vector constructed using the given contents.
 */
export function ivec4(
  a: Expression<BasePrimitive | Mat2Primitive>
): Expression<Ivec4Primitive>;

export function ivec4(...a: Four): Expression<Ivec4Primitive>;

export function ivec4(
  ...a: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Ivec4Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      `ivec4`,
      4,
      a.map((arg) => new CastToIntImplementation(arg.javascript))
    ),
    new FunctionImplementation(
      `ivec4`,
      `ivec4`,
      a.map((arg) => arg.glsl)
    )
  );
}
