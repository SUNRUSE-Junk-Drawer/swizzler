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
import { LiteralImplementation } from "../../../implementations/literal-implementation";

export function reflect(
  i: Expression<FloatPrimitive>,
  n: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function reflect(
  i: Expression<Vec2Primitive>,
  n: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function reflect(
  i: Expression<Vec3Primitive>,
  n: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function reflect(
  i: Expression<Vec4Primitive>,
  n: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function reflect(
  i: Expression<AnyNonMatFloatPrimitive>,
  n: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  const primitive = n.primitive;

  return new Expression(
    new BinaryOperatorImplementation(
      primitive,
      i.javascript,
      `-`,
      new BinaryOperatorImplementation(
        primitive,
        new LiteralImplementation(`float`, [`2`]),
        `*`,
        new BinaryOperatorImplementation(
          primitive,
          new AggregateImplementation(
            `float`,
            `+`,
            new BinaryOperatorImplementation(
              primitive,
              n.javascript,
              `*`,
              i.javascript
            )
          ),
          `*`,
          n.javascript
        )
      )
    ),
    new FunctionImplementation(primitive, `reflect`, [i.glsl, n.glsl])
  );
}
