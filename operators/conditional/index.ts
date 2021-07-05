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
  AnyPrimitive,
  combinationOfPrimitives,
  BoolPrimitive,
  Bvec2Primitive,
  Bvec3Primitive,
  Bvec4Primitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { TernaryOperatorImplementation } from "../../implementations/ternary-operator-implementation";

export function conditional(
  a: Expression<BoolPrimitive>,
  b: Expression<FloatPrimitive>,
  c: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function conditional(
  a: Expression<BoolPrimitive>,
  b: Expression<Vec2Primitive>,
  c: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function conditional(
  a: Expression<BoolPrimitive>,
  b: Expression<Vec3Primitive>,
  c: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function conditional(
  a: Expression<BoolPrimitive>,
  b: Expression<Vec4Primitive>,
  c: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function conditional(
  a: Expression<BoolPrimitive>,
  b: Expression<Mat2Primitive>,
  c: Expression<Mat2Primitive>
): Expression<Mat2Primitive>;

export function conditional(
  a: Expression<BoolPrimitive>,
  b: Expression<Mat3Primitive>,
  c: Expression<Mat3Primitive>
): Expression<Mat3Primitive>;

export function conditional(
  a: Expression<BoolPrimitive>,
  b: Expression<Mat4Primitive>,
  c: Expression<Mat4Primitive>
): Expression<Mat4Primitive>;

export function conditional(
  a: Expression<BoolPrimitive>,
  b: Expression<IntPrimitive>,
  c: Expression<IntPrimitive>
): Expression<IntPrimitive>;

export function conditional(
  a: Expression<BoolPrimitive>,
  b: Expression<Ivec2Primitive>,
  c: Expression<Ivec2Primitive>
): Expression<Ivec2Primitive>;

export function conditional(
  a: Expression<BoolPrimitive>,
  b: Expression<Ivec3Primitive>,
  c: Expression<Ivec3Primitive>
): Expression<Ivec3Primitive>;

export function conditional(
  a: Expression<BoolPrimitive>,
  b: Expression<Ivec4Primitive>,
  c: Expression<Ivec4Primitive>
): Expression<Ivec4Primitive>;

export function conditional(
  a: Expression<BoolPrimitive>,
  b: Expression<BoolPrimitive>,
  c: Expression<BoolPrimitive>
): Expression<BoolPrimitive>;

export function conditional(
  a: Expression<BoolPrimitive>,
  b: Expression<Bvec2Primitive>,
  c: Expression<Bvec2Primitive>
): Expression<Bvec2Primitive>;

export function conditional(
  a: Expression<BoolPrimitive>,
  b: Expression<Bvec3Primitive>,
  c: Expression<Bvec3Primitive>
): Expression<Bvec3Primitive>;

export function conditional(
  a: Expression<BoolPrimitive>,
  b: Expression<Bvec4Primitive>,
  c: Expression<Bvec4Primitive>
): Expression<Bvec4Primitive>;

export function conditional(
  a: Expression<BoolPrimitive>,
  b: Expression<AnyPrimitive>,
  c: Expression<AnyPrimitive>
): Expression<AnyPrimitive> {
  const primitive = combinationOfPrimitives<AnyPrimitive>(
    b.primitive,
    c.primitive
  );

  return new Expression(
    new TernaryOperatorImplementation(
      primitive,
      a.javascript,
      `?`,
      b.javascript,
      `:`,
      c.javascript
    ),
    new TernaryOperatorImplementation(
      primitive,
      a.glsl,
      `?`,
      b.glsl,
      `:`,
      c.glsl
    )
  );
}
