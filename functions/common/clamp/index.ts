import {
  AnyNonMatFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";
import { FunctionImplementation } from "../../../implementations/function-implementation";

export function clamp(
  x: Expression<FloatPrimitive>,
  minVal: Expression<FloatPrimitive>,
  maxVal: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function clamp(
  x: Expression<Vec2Primitive>,
  minVal: Expression<FloatPrimitive>,
  maxVal: Expression<FloatPrimitive>
): Expression<Vec2Primitive>;

export function clamp(
  x: Expression<Vec2Primitive>,
  minVal: Expression<Vec2Primitive>,
  maxVal: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function clamp(
  x: Expression<Vec3Primitive>,
  minVal: Expression<FloatPrimitive>,
  maxVal: Expression<FloatPrimitive>
): Expression<Vec3Primitive>;

export function clamp(
  x: Expression<Vec3Primitive>,
  minVal: Expression<Vec3Primitive>,
  maxVal: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function clamp(
  x: Expression<Vec4Primitive>,
  minVal: Expression<FloatPrimitive>,
  maxVal: Expression<FloatPrimitive>
): Expression<Vec4Primitive>;

export function clamp(
  x: Expression<Vec4Primitive>,
  minVal: Expression<Vec4Primitive>,
  maxVal: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function clamp(
  x: Expression<AnyNonMatFloatPrimitive>,
  minVal: Expression<AnyNonMatFloatPrimitive>,
  maxVal: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  const primitive = x.primitive;

  return new Expression(
    new FunctionImplementation(primitive, "Math.min", [
      maxVal.javascript,
      new FunctionImplementation(primitive, "Math.max", [
        minVal.javascript,
        x.javascript,
      ]),
    ]),
    new FunctionImplementation(primitive, "clamp", [
      x.glsl,
      minVal.glsl,
      maxVal.glsl,
    ])
  );
}
