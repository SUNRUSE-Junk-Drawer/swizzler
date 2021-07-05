import {
  AnyNonMatFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";
import { func } from "../../../helpers";

export function floor(
  x: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function floor(x: Expression<Vec2Primitive>): Expression<Vec2Primitive>;

export function floor(x: Expression<Vec3Primitive>): Expression<Vec3Primitive>;

export function floor(x: Expression<Vec4Primitive>): Expression<Vec4Primitive>;

export function floor(
  x: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  return func("Math.floor", "floor", x);
}
