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

export function radians(
  degrees: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function radians(
  degrees: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function radians(
  degrees: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function radians(
  degrees: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function radians(
  degrees: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  const primitive = degrees.primitive;

  return new Expression(
    new BinaryOperatorImplementation(
      primitive,
      degrees.javascript,
      `*`,
      new LiteralImplementation(`float`, [JSON.stringify(Math.PI / 180)])
    ),
    new FunctionImplementation(primitive, `radians`, [degrees.glsl])
  );
}
