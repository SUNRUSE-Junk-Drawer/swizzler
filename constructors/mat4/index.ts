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

export function mat4(
  a: Expression<BasePrimitive | Mat2Primitive | Mat3Primitive | Mat4Primitive>
): Expression<Mat4Primitive>;
export function mat4(...args: Sixteen): Expression<Mat4Primitive>;

export function mat4(
  ...args: ReadonlyArray<Expression<AnyPrimitive>>
): Expression<Mat4Primitive> {
  if (args[0].primitive === `mat4`) {
    return args[0] as Expression<Mat4Primitive>;
  } else if (args.length === 1) {
    return new Expression(
      new MatrixResizeImplementation(
        `mat4`,
        new CastToFloatImplementation(
          args[0].javascript as Implementation<AnyCastablePrimitive>
        )
      ),
      new FunctionImplementation(
        `mat4`,
        `mat4`,
        args.map((arg) => arg.glsl)
      )
    );
  } else {
    return new Expression(
      new ConcatenateImplementation(
        `mat4`,
        4,
        args.map(
          (arg) =>
            new CastToFloatImplementation(
              arg.javascript as Implementation<AnyCastablePrimitive>
            )
        )
      ),
      new FunctionImplementation(
        `mat4`,
        `mat4`,
        args.map((arg) => arg.glsl)
      )
    );
  }
}
