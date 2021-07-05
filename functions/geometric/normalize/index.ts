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

export function normalize(
  x: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function normalize(
  x: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function normalize(
  x: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function normalize(
  x: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function normalize(
  x: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  const primitive = x.primitive;

  return new Expression(
    new BinaryOperatorImplementation(
      primitive,
      x.javascript,
      "/",
      new FunctionImplementation("float", "Math.sqrt", [
        new AggregateImplementation(
          "float",
          "+",
          new BinaryOperatorImplementation(
            primitive,
            x.javascript,
            "*",
            x.javascript
          )
        ),
      ])
    ),
    new FunctionImplementation(primitive, "normalize", [x.glsl])
  );
}
