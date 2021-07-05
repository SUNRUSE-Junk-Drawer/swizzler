import {
  AnyNonMatFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";
import { FunctionImplementation } from "../../../implementations/function-implementation";
import { BinaryOperatorImplementation } from "../../../implementations/binary-implementation";

export function fract(
  x: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function fract(x: Expression<Vec2Primitive>): Expression<Vec2Primitive>;

export function fract(x: Expression<Vec3Primitive>): Expression<Vec3Primitive>;

export function fract(x: Expression<Vec4Primitive>): Expression<Vec4Primitive>;

export function fract(
  x: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  return new Expression(
    new BinaryOperatorImplementation(
      x.primitive,
      x.javascript,
      "-",
      new FunctionImplementation(x.primitive, "Math.floor", [x.javascript])
    ),
    new FunctionImplementation(x.primitive, "fract", [x.glsl])
  );
}
