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

/**
 * Constructs a four-dimensional float vector.
 * @param a The contents of the vector.  False = 0, true = 1.  If one component is given, it is repeated to fill the vector.
 * @returns A four-dimensional float vector constructed using the given contents.
 */
export function vec4(
  a: Expression<BasePrimitive | Mat2Primitive>
): Expression<Vec4Primitive>;

export function vec4(...a: Four): Expression<Vec4Primitive>;

export function vec4(
  ...a: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Vec4Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      `vec4`,
      4,
      a.map((arg) => new CastToFloatImplementation(arg.javascript))
    ),
    new FunctionImplementation(
      `vec4`,
      `vec4`,
      a.map((arg) => arg.glsl)
    )
  );
}
