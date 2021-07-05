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

export function inversesqrt(
  x: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function inversesqrt(
  x: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function inversesqrt(
  x: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function inversesqrt(
  x: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function inversesqrt(
  x: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  return new Expression(
    new BinaryOperatorImplementation(
      x.primitive,
      new LiteralImplementation(`float`, [`1`]),
      `/`,
      new FunctionImplementation(x.primitive, `Math.sqrt`, [x.javascript])
    ),
    new FunctionImplementation(x.primitive, `inversesqrt`, [x.glsl])
  );
}
