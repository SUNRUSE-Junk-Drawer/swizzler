import {
  AnyNonMatFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";
import { FunctionImplementation } from "../../../implementations/function-implementation";
import { LiteralImplementation } from "../../../implementations/literal-implementation";

export function exp2(x: Expression<FloatPrimitive>): Expression<FloatPrimitive>;

export function exp2(x: Expression<Vec2Primitive>): Expression<Vec2Primitive>;

export function exp2(x: Expression<Vec3Primitive>): Expression<Vec3Primitive>;

export function exp2(x: Expression<Vec4Primitive>): Expression<Vec4Primitive>;

export function exp2(
  x: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  return new Expression(
    new FunctionImplementation(x.primitive, `Math.pow`, [
      new LiteralImplementation(`float`, [`2`]),
      x.javascript,
    ]),
    new FunctionImplementation(x.primitive, `exp2`, [x.glsl])
  );
}
