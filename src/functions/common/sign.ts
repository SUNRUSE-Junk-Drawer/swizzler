import {
  AnyFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { func } from "../../helpers";

export function sign(x: Expression<FloatPrimitive>): Expression<FloatPrimitive>;

export function sign(x: Expression<Vec2Primitive>): Expression<Vec2Primitive>;

export function sign(x: Expression<Vec3Primitive>): Expression<Vec3Primitive>;

export function sign(x: Expression<Vec4Primitive>): Expression<Vec4Primitive>;

export function sign(
  x: Expression<AnyFloatPrimitive>
): Expression<AnyFloatPrimitive> {
  return func("Math.sign", "sign", x);
}
