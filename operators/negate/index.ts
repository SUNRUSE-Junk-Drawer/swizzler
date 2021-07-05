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
} from "../../primitive";
import { Expression } from "../../expression";
import { unary } from "../../helpers";

export function negate(
  a: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function negate(a: Expression<Vec2Primitive>): Expression<Vec2Primitive>;

export function negate(a: Expression<Vec3Primitive>): Expression<Vec3Primitive>;

export function negate(a: Expression<Vec4Primitive>): Expression<Vec4Primitive>;

export function negate(a: Expression<Mat2Primitive>): Expression<Mat2Primitive>;

export function negate(a: Expression<Mat3Primitive>): Expression<Mat3Primitive>;

export function negate(a: Expression<Mat4Primitive>): Expression<Mat4Primitive>;

export function negate(a: Expression<IntPrimitive>): Expression<IntPrimitive>;

export function negate(
  a: Expression<Ivec2Primitive>
): Expression<Ivec2Primitive>;

export function negate(
  a: Expression<Ivec3Primitive>
): Expression<Ivec3Primitive>;

export function negate(
  a: Expression<Ivec4Primitive>
): Expression<Ivec4Primitive>;

export function negate(
  a: Expression<AnyNumericPrimitive>
): Expression<AnyNumericPrimitive> {
  return unary(a.primitive, `-`, a);
}
