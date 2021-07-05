import {
  AnyNonMatFloatPrimitive,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";
import { FunctionImplementation } from "../../../implementations/function-implementation";
import { AggregateImplementation } from "../../../implementations/aggregate-implementation";
import { BinaryOperatorImplementation } from "../../../implementations/binary-implementation";

export function length(
  x: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function length(
  x: Expression<Vec2Primitive>
): Expression<FloatPrimitive>;

export function length(
  x: Expression<Vec3Primitive>
): Expression<FloatPrimitive>;

export function length(
  x: Expression<Vec4Primitive>
): Expression<FloatPrimitive>;

export function length(
  x: Expression<AnyNonMatFloatPrimitive>
): Expression<FloatPrimitive> {
  const primitive = x.primitive;

  return new Expression(
    new FunctionImplementation(`float`, `Math.sqrt`, [
      new AggregateImplementation(
        `float`,
        `+`,
        new BinaryOperatorImplementation(
          primitive,
          x.javascript,
          `*`,
          x.javascript
        )
      ),
    ]),
    new FunctionImplementation(`float`, `length`, [x.glsl])
  );
}
