import {
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
  Mat2Primitive,
  Mat3Primitive,
  Mat4Primitive,
  IntPrimitive,
  Ivec2Primitive,
  Ivec3Primitive,
  Ivec4Primitive,
  AnyNumericPrimitive,
  AnyMatPrimitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { binary } from "../../helpers";
import { BinaryOperatorImplementation } from "../../implementations/binary-implementation";
import { MatrixVectorMultiplyImplementation } from "../../implementations/matrix-vector-multiply-implementation";
import { MatrixMatrixMultiplyImplementation } from "../../implementations/matrix-matrix-multiply-implementation";
import { Implementation } from "../../implementations/implementation";

export function multiply(
  a: Expression<FloatPrimitive>,
  b: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function multiply(
  a: Expression<Vec2Primitive>,
  b: Expression<FloatPrimitive>
): Expression<Vec2Primitive>;

export function multiply(
  a: Expression<Vec3Primitive>,
  b: Expression<FloatPrimitive>
): Expression<Vec3Primitive>;

export function multiply(
  a: Expression<Vec4Primitive>,
  b: Expression<FloatPrimitive>
): Expression<Vec4Primitive>;

export function multiply(
  a: Expression<FloatPrimitive>,
  b: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function multiply(
  a: Expression<FloatPrimitive>,
  b: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function multiply(
  a: Expression<FloatPrimitive>,
  b: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function multiply(
  a: Expression<Vec2Primitive>,
  b: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function multiply(
  a: Expression<Vec3Primitive>,
  b: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function multiply(
  a: Expression<Vec4Primitive>,
  b: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function multiply(
  a: Expression<FloatPrimitive>,
  b: Expression<Mat2Primitive>
): Expression<Mat2Primitive>;

export function multiply(
  a: Expression<FloatPrimitive>,
  b: Expression<Mat3Primitive>
): Expression<Mat3Primitive>;

export function multiply(
  a: Expression<FloatPrimitive>,
  b: Expression<Mat4Primitive>
): Expression<Mat4Primitive>;

export function multiply(
  a: Expression<Mat2Primitive>,
  b: Expression<FloatPrimitive>
): Expression<Mat2Primitive>;

export function multiply(
  a: Expression<Mat3Primitive>,
  b: Expression<FloatPrimitive>
): Expression<Mat3Primitive>;

export function multiply(
  a: Expression<Mat4Primitive>,
  b: Expression<FloatPrimitive>
): Expression<Mat4Primitive>;

export function multiply(
  a: Expression<Mat2Primitive>,
  b: Expression<Mat2Primitive>
): Expression<Mat2Primitive>;

export function multiply(
  a: Expression<Mat3Primitive>,
  b: Expression<Mat3Primitive>
): Expression<Mat3Primitive>;

export function multiply(
  a: Expression<Mat4Primitive>,
  b: Expression<Mat4Primitive>
): Expression<Mat4Primitive>;

export function multiply(
  a: Expression<Mat2Primitive>,
  b: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function multiply(
  a: Expression<Mat3Primitive>,
  b: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function multiply(
  a: Expression<Mat4Primitive>,
  b: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function multiply(
  a: Expression<Vec2Primitive>,
  b: Expression<Mat2Primitive>
): Expression<Vec2Primitive>;

export function multiply(
  a: Expression<Vec3Primitive>,
  b: Expression<Mat3Primitive>
): Expression<Vec3Primitive>;

export function multiply(
  a: Expression<Vec4Primitive>,
  b: Expression<Mat4Primitive>
): Expression<Vec4Primitive>;

export function multiply(
  a: Expression<IntPrimitive>,
  b: Expression<IntPrimitive>
): Expression<IntPrimitive>;

export function multiply(
  a: Expression<Ivec2Primitive>,
  b: Expression<IntPrimitive>
): Expression<Ivec2Primitive>;

export function multiply(
  a: Expression<Ivec3Primitive>,
  b: Expression<IntPrimitive>
): Expression<Ivec3Primitive>;

export function multiply(
  a: Expression<Ivec4Primitive>,
  b: Expression<IntPrimitive>
): Expression<Ivec4Primitive>;

export function multiply(
  a: Expression<IntPrimitive>,
  b: Expression<Ivec2Primitive>
): Expression<Ivec2Primitive>;

export function multiply(
  a: Expression<IntPrimitive>,
  b: Expression<Ivec3Primitive>
): Expression<Ivec3Primitive>;

export function multiply(
  a: Expression<IntPrimitive>,
  b: Expression<Ivec4Primitive>
): Expression<Ivec4Primitive>;

export function multiply(
  a: Expression<Ivec2Primitive>,
  b: Expression<Ivec2Primitive>
): Expression<Ivec2Primitive>;

export function multiply(
  a: Expression<Ivec3Primitive>,
  b: Expression<Ivec3Primitive>
): Expression<Ivec3Primitive>;

export function multiply(
  a: Expression<Ivec4Primitive>,
  b: Expression<Ivec4Primitive>
): Expression<Ivec4Primitive>;

export function multiply(
  a: Expression<AnyNumericPrimitive>,
  b: Expression<AnyNumericPrimitive>
): Expression<AnyNumericPrimitive> {
  if (
    (a.primitive === `mat2` && b.primitive === `vec2`) ||
    (a.primitive === `mat3` && b.primitive === `vec3`) ||
    (a.primitive === `mat4` && b.primitive === `vec4`)
  ) {
    return new Expression(
      new MatrixVectorMultiplyImplementation(
        a.primitive,
        a.javascript as Implementation<AnyMatPrimitive>,
        b.javascript as Implementation<AnyMatPrimitive>
      ),
      new BinaryOperatorImplementation(a.primitive, a.glsl, `*`, b.glsl)
    );
  } else if (
    (a.primitive === `vec2` && b.primitive === `mat2`) ||
    (a.primitive === `vec3` && b.primitive === `mat3`) ||
    (a.primitive === `vec4` && b.primitive === `mat4`)
  ) {
    return new Expression(
      new MatrixVectorMultiplyImplementation(
        b.primitive,
        a.javascript as Implementation<AnyMatPrimitive>,
        b.javascript as Implementation<AnyMatPrimitive>
      ),
      new BinaryOperatorImplementation(b.primitive, a.glsl, `*`, b.glsl)
    );
  } else if (
    (a.primitive === `mat2` && b.primitive === `mat2`) ||
    (a.primitive === `mat3` && b.primitive === `mat3`) ||
    (a.primitive === `mat4` && b.primitive === `mat4`)
  ) {
    return new Expression(
      new MatrixMatrixMultiplyImplementation(
        a.primitive,
        a.javascript as Implementation<AnyMatPrimitive>,
        b.javascript as Implementation<AnyMatPrimitive>
      ),
      new BinaryOperatorImplementation(b.primitive, a.glsl, `*`, b.glsl)
    );
  } else {
    return binary(a, `*`, b);
  }
}
