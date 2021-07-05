import {
  AnyNonMatFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";
import { func } from "../../../helpers";

export function log2(x: Expression<FloatPrimitive>): Expression<FloatPrimitive>;

export function log2(x: Expression<Vec2Primitive>): Expression<Vec2Primitive>;

export function log2(x: Expression<Vec3Primitive>): Expression<Vec3Primitive>;

export function log2(x: Expression<Vec4Primitive>): Expression<Vec4Primitive>;

export function log2(
  x: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  return func(`Math.log2`, `log2`, x);
}
