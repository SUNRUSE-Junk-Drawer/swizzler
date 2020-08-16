import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";
import { func } from "../../../helpers";

export function log(x: Expression<FloatPrimitive>): Expression<FloatPrimitive>;

export function log(x: Expression<Vec2Primitive>): Expression<Vec2Primitive>;

export function log(x: Expression<Vec3Primitive>): Expression<Vec3Primitive>;

export function log(x: Expression<Vec4Primitive>): Expression<Vec4Primitive>;

export function log(
  x: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  return func("Math.log", "log", x);
}
