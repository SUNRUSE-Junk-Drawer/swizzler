import {
  Mat2Primitive,
  Mat3Primitive,
  Mat4Primitive,
  BasePrimitive,
  AnyPrimitive,
  AnyCastablePrimitive,
} from "../../primitive";
import { ConcatenateImplementation } from "../../implementations/concatenate-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";
import { Expression } from "../../expression";
import { MatrixResizeImplementation } from "../../implementations/matrix-resize-implementation";
import { Four } from "../total-components";
import { CastToFloatImplementation } from "../../implementations/cast-to-float-implementation";
import { Implementation } from "../../implementations/implementation";

/**
 * Constructs a two-by-two float matrix.
 * @param a The contents of the float matrix.  False = 0, true = 1.  If one component is given, it is used to create a uniform scaling matrix (X/0, 0/X).  Larger matrices will have their extra rows and columns truncated.
 * @returns A two-by-two float matrix constructed using the given contents.
 */
export function mat2(
  a: Expression<BasePrimitive | Mat2Primitive | Mat3Primitive | Mat4Primitive>
): Expression<Mat2Primitive>;
export function mat2(...args: Four): Expression<Mat2Primitive>;

export function mat2(
  ...a: ReadonlyArray<Expression<AnyPrimitive>>
): Expression<Mat2Primitive> {
  if (a[0].primitive === `mat2`) {
    return a[0] as Expression<Mat2Primitive>;
  } else if (
    a.length === 1 &&
    a[0].primitive !== `vec4` &&
    a[0].primitive !== `ivec4` &&
    a[0].primitive !== `bvec4`
  ) {
    return new Expression(
      new MatrixResizeImplementation(
        `mat2`,
        new CastToFloatImplementation(
          a[0].javascript as Implementation<AnyCastablePrimitive>
        )
      ),
      new FunctionImplementation(
        `mat2`,
        `mat2`,
        a.map((arg) => arg.glsl)
      )
    );
  } else {
    return new Expression(
      new ConcatenateImplementation(
        `mat2`,
        4,
        a.map(
          (arg) =>
            new CastToFloatImplementation(
              arg.javascript as Implementation<AnyCastablePrimitive>
            )
        )
      ),
      new FunctionImplementation(
        `mat2`,
        `mat2`,
        a.map((arg) => arg.glsl)
      )
    );
  }
}
