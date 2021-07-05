import {
  AnyNonMatFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";
import { func } from "../../../helpers";

export function sqrt(x: Expression<FloatPrimitive>): Expression<FloatPrimitive>;

export function sqrt(x: Expression<Vec2Primitive>): Expression<Vec2Primitive>;

export function sqrt(x: Expression<Vec3Primitive>): Expression<Vec3Primitive>;

export function sqrt(x: Expression<Vec4Primitive>): Expression<Vec4Primitive>;

export function sqrt(
  x: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  return func(`Math.sqrt`, `sqrt`, x);
}
