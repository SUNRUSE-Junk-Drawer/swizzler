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
import { LiteralImplementation } from "../../../implementations/literal-implementation";
import { TernaryOperatorImplementation } from "../../../implementations/ternary-operator-implementation";
import { AggregateImplementation } from "../../../implementations/aggregate-implementation";

export function refract(
  n: Expression<FloatPrimitive>,
  i: Expression<FloatPrimitive>,
  eta: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function refract(
  n: Expression<Vec2Primitive>,
  i: Expression<Vec2Primitive>,
  eta: Expression<FloatPrimitive>
): Expression<Vec2Primitive>;

export function refract(
  n: Expression<Vec3Primitive>,
  i: Expression<Vec3Primitive>,
  eta: Expression<FloatPrimitive>
): Expression<Vec3Primitive>;

export function refract(
  n: Expression<Vec4Primitive>,
  i: Expression<Vec4Primitive>,
  eta: Expression<FloatPrimitive>
): Expression<Vec4Primitive>;

export function refract(
  i: Expression<AnyNonMatFloatPrimitive>,
  n: Expression<AnyNonMatFloatPrimitive>,
  eta: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  const primitive = n.primitive;

  const javaScriptNDotI = new AggregateImplementation(
    "float",
    "+",
    new BinaryOperatorImplementation(primitive, n.javascript, "*", i.javascript)
  );

  const javascriptK = new BinaryOperatorImplementation(
    "float",
    new LiteralImplementation("float", ["1"]),
    "-",
    new BinaryOperatorImplementation(
      primitive,
      new BinaryOperatorImplementation(
        primitive,
        eta.javascript,
        "*",
        eta.javascript
      ),
      "*",
      new BinaryOperatorImplementation(
        primitive,
        new LiteralImplementation("float", ["1"]),
        "-",
        new BinaryOperatorImplementation(
          primitive,
          javaScriptNDotI,
          "*",
          javaScriptNDotI
        )
      )
    )
  );

  return new Expression(
    new TernaryOperatorImplementation(
      primitive,
      new BinaryOperatorImplementation(
        "bool",
        javascriptK,
        "<",
        new LiteralImplementation("float", ["0"])
      ),
      "?",
      new LiteralImplementation("float", ["0"]),
      ":",
      new BinaryOperatorImplementation(
        primitive,
        new BinaryOperatorImplementation(
          primitive,
          eta.javascript,
          "*",
          i.javascript
        ),
        "-",
        new BinaryOperatorImplementation(
          primitive,
          new BinaryOperatorImplementation(
            primitive,
            new BinaryOperatorImplementation(
              primitive,
              eta.javascript,
              "*",
              javaScriptNDotI
            ),
            "+",
            new FunctionImplementation("float", "Math.sqrt", [javascriptK])
          ),
          "*",
          n.javascript
        )
      )
    ),
    new FunctionImplementation(primitive, "refract", [i.glsl, n.glsl, eta.glsl])
  );
}
