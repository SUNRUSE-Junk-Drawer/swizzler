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

export function mat2(
  a: Expression<BasePrimitive | Mat2Primitive | Mat3Primitive | Mat4Primitive>
): Expression<Mat2Primitive>;
export function mat2(...args: Four): Expression<Mat2Primitive>;

export function mat2(
  ...args: ReadonlyArray<Expression<AnyPrimitive>>
): Expression<Mat2Primitive> {
  if (args[0].primitive === `mat2`) {
    return args[0] as Expression<Mat2Primitive>;
  } else if (
    args.length === 1 &&
    args[0].primitive !== `vec4` &&
    args[0].primitive !== `ivec4` &&
    args[0].primitive !== `bvec4`
  ) {
    return new Expression(
      new MatrixResizeImplementation(
        `mat2`,
        new CastToFloatImplementation(
          args[0].javascript as Implementation<AnyCastablePrimitive>
        )
      ),
      new FunctionImplementation(
        `mat2`,
        `mat2`,
        args.map((arg) => arg.glsl)
      )
    );
  } else {
    return new Expression(
      new ConcatenateImplementation(
        `mat2`,
        4,
        args.map(
          (arg) =>
            new CastToFloatImplementation(
              arg.javascript as Implementation<AnyCastablePrimitive>
            )
        )
      ),
      new FunctionImplementation(
        `mat2`,
        `mat2`,
        args.map((arg) => arg.glsl)
      )
    );
  }
}
