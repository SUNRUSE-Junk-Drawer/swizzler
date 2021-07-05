import {
  AnyNonMatFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";
import { BinaryOperatorImplementation } from "../../../implementations/binary-implementation";
import { LiteralImplementation } from "../../../implementations/literal-implementation";
import { FunctionImplementation } from "../../../implementations/function-implementation";

export function degrees(
  radians: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function degrees(
  radians: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function degrees(
  radians: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function degrees(
  radians: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function degrees(
  radians: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  const primitive = radians.primitive;

  return new Expression(
    new BinaryOperatorImplementation(
      primitive,
      radians.javascript,
      `*`,
      new LiteralImplementation(`float`, [JSON.stringify(180 / Math.PI)])
    ),
    new FunctionImplementation(primitive, `degrees`, [radians.glsl])
  );
}
