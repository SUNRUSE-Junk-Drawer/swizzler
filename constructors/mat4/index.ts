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
import { Sixteen } from "../total-components";
import { CastToFloatImplementation } from "../../implementations/cast-to-float-implementation";
import { Implementation } from "../../implementations/implementation";

/**
 * Constructs a four-by-four float matrix.
 * @param a The contents of the float matrix.  False = 0, true = 1.  If one component is given, it is used to create a uniform scaling matrix (X/0/0/0, 0/X/0/0, 0/0/X/0, 0/0/0/X).  Smaller matrices will be extended with columns/rows from an identity matrix.
 * @returns A four-by-four float matrix constructed using the given contents.
 */
export function mat4(
  a: Expression<BasePrimitive | Mat2Primitive | Mat3Primitive | Mat4Primitive>
): Expression<Mat4Primitive>;
export function mat4(...a: Sixteen): Expression<Mat4Primitive>;

export function mat4(
  ...a: ReadonlyArray<Expression<AnyPrimitive>>
): Expression<Mat4Primitive> {
  if (a[0].primitive === `mat4`) {
    return a[0] as Expression<Mat4Primitive>;
  } else if (a.length === 1) {
    return new Expression(
      new MatrixResizeImplementation(
        `mat4`,
        new CastToFloatImplementation(
          a[0].javascript as Implementation<AnyCastablePrimitive>
        )
      ),
      new FunctionImplementation(
        `mat4`,
        `mat4`,
        a.map((arg) => arg.glsl)
      )
    );
  } else {
    return new Expression(
      new ConcatenateImplementation(
        `mat4`,
        4,
        a.map(
          (arg) =>
            new CastToFloatImplementation(
              arg.javascript as Implementation<AnyCastablePrimitive>
            )
        )
      ),
      new FunctionImplementation(
        `mat4`,
        `mat4`,
        a.map((arg) => arg.glsl)
      )
    );
  }
}
