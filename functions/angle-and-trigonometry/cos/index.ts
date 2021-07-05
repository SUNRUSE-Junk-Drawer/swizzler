import {
  AnyNonMatFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";
import { func } from "../../../helpers";

export function cos(
  angle: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function cos(
  angle: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function cos(
  angle: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function cos(
  angle: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function cos(
  angle: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  return func(`Math.cos`, `cos`, angle);
}
