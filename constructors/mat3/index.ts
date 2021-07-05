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

export function mat3(
  a: Expression<BasePrimitive | Mat2Primitive | Mat3Primitive | Mat4Primitive>
): Expression<Mat3Primitive>;
export function mat3(...args: Nine): Expression<Mat3Primitive>;

export function mat3(
  ...args: ReadonlyArray<Expression<AnyPrimitive>>
): Expression<Mat3Primitive> {
  if (args[0].primitive === `mat3`) {
    return args[0] as Expression<Mat3Primitive>;
  } else if (args.length === 1) {
    return new Expression(
      new MatrixResizeImplementation(
        `mat3`,
        new CastToFloatImplementation(
          args[0].javascript as Implementation<AnyCastablePrimitive>
        )
      ),
      new FunctionImplementation(
        `mat3`,
        `mat3`,
        args.map((arg) => arg.glsl)
      )
    );
  } else {
    return new Expression(
      new ConcatenateImplementation(
        `mat3`,
        4,
        args.map(
          (arg) =>
            new CastToFloatImplementation(
              arg.javascript as Implementation<AnyCastablePrimitive>
            )
        )
      ),
      new FunctionImplementation(
        `mat3`,
        `mat3`,
        args.map((arg) => arg.glsl)
      )
    );
  }
}
