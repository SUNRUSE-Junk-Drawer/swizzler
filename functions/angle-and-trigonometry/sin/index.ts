import {
  AnyNonMatFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";
import { func } from "../../../helpers";

export function sin(
  angle: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function sin(
  angle: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function sin(
  angle: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function sin(
  angle: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function sin(
  angle: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  return func(`Math.sin`, `sin`, angle);
}
