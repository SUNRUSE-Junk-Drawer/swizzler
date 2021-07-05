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

export function smoothstep(
  edge0: Expression<FloatPrimitive>,
  edge1: Expression<FloatPrimitive>,
  x: Expression<FloatPrimitive>
): Expression<FloatPrimitive>;

export function smoothstep(
  edge0: Expression<FloatPrimitive>,
  edge1: Expression<FloatPrimitive>,
  x: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function smoothstep(
  edge0: Expression<Vec2Primitive>,
  edge1: Expression<Vec2Primitive>,
  x: Expression<Vec2Primitive>
): Expression<Vec2Primitive>;

export function smoothstep(
  edge0: Expression<FloatPrimitive>,
  edge1: Expression<FloatPrimitive>,
  x: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function smoothstep(
  edge0: Expression<Vec3Primitive>,
  edge1: Expression<Vec3Primitive>,
  x: Expression<Vec3Primitive>
): Expression<Vec3Primitive>;

export function smoothstep(
  edge0: Expression<FloatPrimitive>,
  edge1: Expression<FloatPrimitive>,
  x: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function smoothstep(
  edge0: Expression<Vec4Primitive>,
  edge1: Expression<Vec4Primitive>,
  x: Expression<Vec4Primitive>
): Expression<Vec4Primitive>;

export function smoothstep(
  edge0: Expression<AnyNonMatFloatPrimitive>,
  edge1: Expression<AnyNonMatFloatPrimitive>,
  x: Expression<AnyNonMatFloatPrimitive>
): Expression<AnyNonMatFloatPrimitive> {
  const javascriptA = new FunctionImplementation(x.primitive, "Math.max", [
    new LiteralImplementation("float", ["0"]),
    new FunctionImplementation(x.primitive, "Math.min", [
      new LiteralImplementation("float", ["1"]),
      new BinaryOperatorImplementation(
        x.primitive,
        new BinaryOperatorImplementation(
          x.primitive,
          x.javascript,
          "-",
          edge0.javascript
        ),
        "/",
        new BinaryOperatorImplementation(
          edge0.primitive,
          edge1.javascript,
          "-",
          edge0.javascript
        )
      ),
    ]),
  ]);

  return new Expression(
    new BinaryOperatorImplementation(
      x.primitive,
      javascriptA,
      "*",
      new BinaryOperatorImplementation(
        x.primitive,
        javascriptA,
        "*",
        new BinaryOperatorImplementation(
          x.primitive,
          new LiteralImplementation("float", ["3"]),
          "-",
          new BinaryOperatorImplementation(
            x.primitive,
            new LiteralImplementation("float", ["2"]),
            "*",
            javascriptA
          )
        )
      )
    ),
    new FunctionImplementation(x.primitive, "smoothstep", [
      edge0.glsl,
      edge1.glsl,
      x.glsl,
    ])
  );
}
