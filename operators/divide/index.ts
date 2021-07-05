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
  primitiveBases,
} from "../../primitive";
import { Expression } from "../../expression";
import { binary } from "../../helpers";
import { RoundImplementation } from "../../implementations/round-implementation";

export function divide(
  a: Expression<FloatPrimitive>,
  b: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function divide(
  a: Expression<Vec2Primitive>,
  b: Expression<FloatPrimitive>
): Expression<Vec2Primitive>;

export function divide(
  a: Expression<Vec3Primitive>,
  b: Expression<FloatPrimitive>
): Expression<Vec3Primitive>;

export function divide(
  a: Expression<Vec4Primitive>,
  b: Expression<FloatPrimitive>
): Expression<Vec4Primitive>;

export function divide(
  a: Expression<FloatPrimitive>,
  b: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function divide(
  a: Expression<FloatPrimitive>,
  b: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function divide(
  a: Expression<FloatPrimitive>,
  b: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function divide(
  a: Expression<Vec2Primitive>,
  b: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function divide(
  a: Expression<Vec3Primitive>,
  b: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function divide(
  a: Expression<Vec4Primitive>,
  b: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function divide(
  a: Expression<FloatPrimitive>,
  b: Expression<Mat2Primitive>
): Expression<Mat2Primitive>;

export function divide(
  a: Expression<FloatPrimitive>,
  b: Expression<Mat3Primitive>
): Expression<Mat3Primitive>;

export function divide(
  a: Expression<FloatPrimitive>,
  b: Expression<Mat4Primitive>
): Expression<Mat4Primitive>;

export function divide(
  a: Expression<Mat2Primitive>,
  b: Expression<FloatPrimitive>
): Expression<Mat2Primitive>;

export function divide(
  a: Expression<Mat3Primitive>,
  b: Expression<FloatPrimitive>
): Expression<Mat3Primitive>;

export function divide(
  a: Expression<Mat4Primitive>,
  b: Expression<FloatPrimitive>
): Expression<Mat4Primitive>;

export function divide(
  a: Expression<Mat2Primitive>,
  b: Expression<Mat2Primitive>
): Expression<Mat2Primitive>;

export function divide(
  a: Expression<Mat3Primitive>,
  b: Expression<Mat3Primitive>
): Expression<Mat3Primitive>;

export function divide(
  a: Expression<Mat4Primitive>,
  b: Expression<Mat4Primitive>
): Expression<Mat4Primitive>;

export function divide(
  a: Expression<IntPrimitive>,
  b: Expression<IntPrimitive>
): Expression<IntPrimitive>;

export function divide(
  a: Expression<Ivec2Primitive>,
  b: Expression<IntPrimitive>
): Expression<Ivec2Primitive>;

export function divide(
  a: Expression<Ivec3Primitive>,
  b: Expression<IntPrimitive>
): Expression<Ivec3Primitive>;

export function divide(
  a: Expression<Ivec4Primitive>,
  b: Expression<IntPrimitive>
): Expression<Ivec4Primitive>;

export function divide(
  a: Expression<IntPrimitive>,
  b: Expression<Ivec2Primitive>
): Expression<Ivec2Primitive>;

export function divide(
  a: Expression<IntPrimitive>,
  b: Expression<Ivec3Primitive>
): Expression<Ivec3Primitive>;

export function divide(
  a: Expression<IntPrimitive>,
  b: Expression<Ivec4Primitive>
): Expression<Ivec4Primitive>;

export function divide(
  a: Expression<Ivec2Primitive>,
  b: Expression<Ivec2Primitive>
): Expression<Ivec2Primitive>;

export function divide(
  a: Expression<Ivec3Primitive>,
  b: Expression<Ivec3Primitive>
): Expression<Ivec3Primitive>;

export function divide(
  a: Expression<Ivec4Primitive>,
  b: Expression<Ivec4Primitive>
): Expression<Ivec4Primitive>;

export function divide(
  a: Expression<AnyNumericPrimitive>,
  b: Expression<AnyNumericPrimitive>
): Expression<AnyNumericPrimitive> {
  const unrounded = binary(a, `/`, b);

  if (primitiveBases[unrounded.primitive] === `int`) {
    return new Expression(
      new RoundImplementation(unrounded.javascript),
      unrounded.glsl
    );
  } else {
    return unrounded;
  }
}
