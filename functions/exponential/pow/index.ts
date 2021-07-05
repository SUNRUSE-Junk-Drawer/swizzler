import {
  AnyNonMatFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";
import { func } from "../../../helpers";

export function pow(
  x: Expression<FloatPrimitive>,
  y: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function pow(
  x: Expression<Vec2Primitive>,
  y: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function pow(
  x: Expression<Vec3Primitive>,
  y: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function pow(
  x: Expression<Vec4Primitive>,
  y: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function pow(
  x: Expression<AnyNonMatFloatPrimitive>,
  y: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  return func("Math.pow", "pow", x, y);
}
