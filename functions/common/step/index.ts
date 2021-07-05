import {
  AnyNonMatFloatPrimitive,
  castToBoolean,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";
import { FunctionImplementation } from "../../../implementations/function-implementation";
import { TernaryOperatorImplementation } from "../../../implementations/ternary-operator-implementation";
import { BinaryOperatorImplementation } from "../../../implementations/binary-implementation";
import { LiteralImplementation } from "../../../implementations/literal-implementation";

export function step(
  edge: Expression<FloatPrimitive>,
  x: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function step(
  edge: Expression<FloatPrimitive>,
  x: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function step(
  edge: Expression<Vec2Primitive>,
  x: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function step(
  edge: Expression<FloatPrimitive>,
  x: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function step(
  edge: Expression<Vec3Primitive>,
  x: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function step(
  edge: Expression<FloatPrimitive>,
  x: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function step(
  edge: Expression<Vec4Primitive>,
  x: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function step(
  edge: Expression<AnyNonMatFloatPrimitive>,
  x: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  const primitive = x.primitive;

  return new Expression(
    new TernaryOperatorImplementation(
      primitive,
      new BinaryOperatorImplementation(
        castToBoolean[x.primitive],
        x.javascript,
        "<",
        edge.javascript
      ),
      "?",
      new LiteralImplementation("float", ["0"]),
      ":",
      new LiteralImplementation("float", ["1"])
    ),
    new FunctionImplementation(primitive, "step", [edge.glsl, x.glsl])
  );
}
