import { Expression } from "../../expression";
import { BinaryOperatorImplementation } from "../../implementations/binary-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";
import {
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
  IntPrimitive,
  Ivec2Primitive,
  Ivec3Primitive,
  Ivec4Primitive,
  BoolPrimitive,
  Bvec2Primitive,
  Bvec3Primitive,
  Bvec4Primitive,
  castToBoolean,
  primitiveArities,
  AnyNonMatFloatPrimitive,
  AnyBoolPrimitive,
  AnyCastablePrimitive,
} from "../../primitive";

export function greaterThanEqual(
  a: Expression<FloatPrimitive>,
  b: Expression<FloatPrimitive>
): Expression<BoolPrimitive>;

export function greaterThanEqual(
  a: Expression<Vec2Primitive>,
  b: Expression<Vec2Primitive>
): Expression<Bvec2Primitive>;

export function greaterThanEqual(
  a: Expression<Vec3Primitive>,
  b: Expression<Vec3Primitive>
): Expression<Bvec3Primitive>;

export function greaterThanEqual(
  a: Expression<Vec4Primitive>,
  b: Expression<Vec4Primitive>
): Expression<Bvec4Primitive>;

export function greaterThanEqual(
  a: Expression<IntPrimitive>,
  b: Expression<IntPrimitive>
): Expression<BoolPrimitive>;

export function greaterThanEqual(
  a: Expression<Ivec2Primitive>,
  b: Expression<Ivec2Primitive>
): Expression<Bvec2Primitive>;

export function greaterThanEqual(
  a: Expression<Ivec3Primitive>,
  b: Expression<Ivec3Primitive>
): Expression<Bvec3Primitive>;

export function greaterThanEqual(
  a: Expression<Ivec4Primitive>,
  b: Expression<Ivec4Primitive>
): Expression<Bvec4Primitive>;

export function greaterThanEqual<
  TPrimitive extends AnyNonMatFloatPrimitive & AnyCastablePrimitive
>(
  a: Expression<TPrimitive>,
  b: Expression<TPrimitive>
): Expression<AnyBoolPrimitive> {
  return new Expression(
    new BinaryOperatorImplementation(
      castToBoolean[a.primitive],
      a.javascript,
      ">=",
      b.javascript
    ),
    primitiveArities[a.primitive] === 1
      ? new BinaryOperatorImplementation(
          castToBoolean[a.primitive],
          a.glsl,
          ">=",
          b.glsl
        )
      : new FunctionImplementation(
          castToBoolean[a.primitive],
          "greaterThanEqual",
          [a.glsl, b.glsl]
        )
  );
}
