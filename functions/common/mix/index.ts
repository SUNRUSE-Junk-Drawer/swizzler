import {
  AnyNonMatFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";
import { FunctionImplementation } from "../../../implementations/function-implementation";
import { BinaryOperatorImplementation } from "../../../implementations/binary-implementation";

export function mix(
  x: Expression<FloatPrimitive>,
  y: Expression<FloatPrimitive>,
  a: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function mix(
  x: Expression<Vec2Primitive>,
  y: Expression<Vec2Primitive>,
  a: Expression<FloatPrimitive>
): Expression<Vec2Primitive>;

export function mix(
  x: Expression<Vec2Primitive>,
  y: Expression<Vec2Primitive>,
  a: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function mix(
  x: Expression<Vec3Primitive>,
  y: Expression<Vec3Primitive>,
  a: Expression<FloatPrimitive>
): Expression<Vec3Primitive>;

export function mix(
  x: Expression<Vec3Primitive>,
  y: Expression<Vec3Primitive>,
  a: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function mix(
  x: Expression<Vec4Primitive>,
  y: Expression<Vec4Primitive>,
  a: Expression<FloatPrimitive>
): Expression<Vec4Primitive>;

export function mix(
  x: Expression<Vec4Primitive>,
  y: Expression<Vec4Primitive>,
  a: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function mix(
  x: Expression<AnyNonMatFloatPrimitive>,
  y: Expression<AnyNonMatFloatPrimitive>,
  a: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  const primitive = x.primitive;

  return new Expression(
    new BinaryOperatorImplementation(
      primitive,
      x.javascript,
      "+",
      new BinaryOperatorImplementation(
        primitive,
        new BinaryOperatorImplementation(
          primitive,
          y.javascript,
          "-",
          x.javascript
        ),
        "*",
        a.javascript
      )
    ),
    new FunctionImplementation(primitive, "mix", [x.glsl, y.glsl, a.glsl])
  );
}
