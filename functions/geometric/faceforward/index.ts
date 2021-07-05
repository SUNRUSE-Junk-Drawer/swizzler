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
import { AggregateImplementation } from "../../../implementations/aggregate-implementation";
import { TernaryOperatorImplementation } from "../../../implementations/ternary-operator-implementation";
import { LiteralImplementation } from "../../../implementations/literal-implementation";
import { UnaryOperatorImplementation } from "../../../implementations/unary-implementation";

export function faceforward(
  n: Expression<FloatPrimitive>,
  i: Expression<FloatPrimitive>,
  nRef: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function faceforward(
  n: Expression<Vec2Primitive>,
  i: Expression<Vec2Primitive>,
  nRef: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function faceforward(
  n: Expression<Vec3Primitive>,
  i: Expression<Vec3Primitive>,
  nRef: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function faceforward(
  n: Expression<Vec4Primitive>,
  i: Expression<Vec4Primitive>,
  nRef: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function faceforward(
  n: Expression<AnyNonMatFloatPrimitive>,
  i: Expression<AnyNonMatFloatPrimitive>,
  nRef: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  const primitive = n.primitive;

  return new Expression(
    new TernaryOperatorImplementation(
      primitive,
      new BinaryOperatorImplementation(
        `bool`,
        new AggregateImplementation(
          `float`,
          `+`,
          new BinaryOperatorImplementation(
            primitive,
            nRef.javascript,
            `*`,
            i.javascript
          )
        ),
        `<`,
        new LiteralImplementation(`float`, [`0`])
      ),
      `?`,
      n.javascript,
      `:`,
      new UnaryOperatorImplementation(primitive, `-`, n.javascript)
    ),
    new FunctionImplementation(primitive, `faceforward`, [
      n.glsl,
      i.glsl,
      nRef.glsl,
    ])
  );
}
