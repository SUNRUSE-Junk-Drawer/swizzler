import { Expression } from "../../expression";
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
  BoolPrimitive,
  Bvec2Primitive,
  Bvec3Primitive,
  Bvec4Primitive,
  AnyPrimitive,
} from "../../primitive";

export function equal(
  a: Expression<FloatPrimitive>,
  b: Expression<FloatPrimitive>
): Expression<BoolPrimitive>;

export function equal(
  a: Expression<Vec2Primitive>,
  b: Expression<Vec2Primitive>
): Expression<BoolPrimitive>;

export function equal(
  a: Expression<Vec3Primitive>,
  b: Expression<Vec3Primitive>
): Expression<BoolPrimitive>;

export function equal(
  a: Expression<Vec4Primitive>,
  b: Expression<Vec4Primitive>
): Expression<BoolPrimitive>;

export function equal(
  a: Expression<Mat2Primitive>,
  b: Expression<Mat2Primitive>
): Expression<BoolPrimitive>;

export function equal(
  a: Expression<Mat3Primitive>,
  b: Expression<Mat3Primitive>
): Expression<BoolPrimitive>;

export function equal(
  a: Expression<Mat4Primitive>,
  b: Expression<Mat4Primitive>
): Expression<BoolPrimitive>;

export function equal(
  a: Expression<IntPrimitive>,
  b: Expression<IntPrimitive>
): Expression<BoolPrimitive>;

export function equal(
  a: Expression<Ivec2Primitive>,
  b: Expression<Ivec2Primitive>
): Expression<BoolPrimitive>;

export function equal(
  a: Expression<Ivec3Primitive>,
  b: Expression<Ivec3Primitive>
): Expression<BoolPrimitive>;

export function equal(
  a: Expression<Ivec4Primitive>,
  b: Expression<Ivec4Primitive>
): Expression<BoolPrimitive>;

export function equal(
  a: Expression<BoolPrimitive>,
  b: Expression<BoolPrimitive>
): Expression<BoolPrimitive>;

export function equal(
  a: Expression<Bvec2Primitive>,
  b: Expression<Bvec2Primitive>
): Expression<BoolPrimitive>;

export function equal(
  a: Expression<Bvec3Primitive>,
  b: Expression<Bvec3Primitive>
): Expression<BoolPrimitive>;

export function equal(
  a: Expression<Bvec4Primitive>,
  b: Expression<Bvec4Primitive>
): Expression<BoolPrimitive>;

export function equal<TPrimitive extends AnyPrimitive>(
  a: Expression<TPrimitive>,
  b: Expression<TPrimitive>
): Expression<BoolPrimitive> {
  a;
  b;

  throw new Error("Not implemented.");
}
