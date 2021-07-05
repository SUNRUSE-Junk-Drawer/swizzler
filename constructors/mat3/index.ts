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
import { Nine } from "../total-components";
import { CastToFloatImplementation } from "../../implementations/cast-to-float-implementation";
import { Implementation } from "../../implementations/implementation";

/**
 * Constructs a three-by-three float matrix.
 * @param a The contents of the float matrix.  False = 0, true = 1.  If one component is given, it is used to create a uniform scaling matrix (X/0/0, 0/X/0, 0/0/X).  Smaller matrices will be extended with columns/rows from an identity matrix.  Larger matrices will have their extra rows and columns truncated.
 * @returns A three-by-three float matrix constructed using the given contents.
 */
export function mat3(
  a: Expression<BasePrimitive | Mat2Primitive | Mat3Primitive | Mat4Primitive>
): Expression<Mat3Primitive>;
export function mat3(...a: Nine): Expression<Mat3Primitive>;

export function mat3(
  ...a: ReadonlyArray<Expression<AnyPrimitive>>
): Expression<Mat3Primitive> {
  if (a[0].primitive === `mat3`) {
    return a[0] as Expression<Mat3Primitive>;
  } else if (a.length === 1) {
    return new Expression(
      new MatrixResizeImplementation(
        `mat3`,
        new CastToFloatImplementation(
          a[0].javascript as Implementation<AnyCastablePrimitive>
        )
      ),
      new FunctionImplementation(
        `mat3`,
        `mat3`,
        a.map((arg) => arg.glsl)
      )
    );
  } else {
    return new Expression(
      new ConcatenateImplementation(
        `mat3`,
        4,
        a.map(
          (arg) =>
            new CastToFloatImplementation(
              arg.javascript as Implementation<AnyCastablePrimitive>
            )
        )
      ),
      new FunctionImplementation(
        `mat3`,
        `mat3`,
        a.map((arg) => arg.glsl)
      )
    );
  }
}
