import {
  AnyNonMatFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";
import { BinaryOperatorImplementation } from "../../../implementations/binary-implementation";
import { FunctionImplementation } from "../../../implementations/function-implementation";

export function mod(
  x: Expression<FloatPrimitive>,
  y: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function mod(
  x: Expression<Vec2Primitive>,
  y: Expression<FloatPrimitive>
): Expression<Vec2Primitive>;

export function mod(
  x: Expression<Vec2Primitive>,
  y: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function mod(
  x: Expression<Vec3Primitive>,
  y: Expression<FloatPrimitive>
): Expression<Vec3Primitive>;

export function mod(
  x: Expression<Vec3Primitive>,
  y: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function mod(
  x: Expression<Vec4Primitive>,
  y: Expression<FloatPrimitive>
): Expression<Vec4Primitive>;

export function mod(
  x: Expression<Vec4Primitive>,
  y: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function mod(
  x: Expression<AnyNonMatFloatPrimitive>,
  y: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  return new Expression(
    new BinaryOperatorImplementation(
      x.primitive,
      x.javascript,
      "-",
      new BinaryOperatorImplementation(
        x.primitive,
        y.javascript,
        "*",
        new FunctionImplementation(x.primitive, "Math.floor", [
          new BinaryOperatorImplementation(
            x.primitive,
            x.javascript,
            "/",
            y.javascript
          ),
        ])
      )
    ),
    new FunctionImplementation(x.primitive, "mod", [x.glsl, y.glsl])
  );
}
