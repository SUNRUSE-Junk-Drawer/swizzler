import {
  Vec2Primitive,
  BasePrimitive,
  AnyCastablePrimitive,
} from "../../primitive";
import { ConcatenateImplementation } from "../../implementations/concatenate-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";
import { Expression } from "../../expression";
import { Two } from "../total-components";
import { CastToFloatImplementation } from "../../implementations/cast-to-float-implementation";

/**
 * Constructs a two-dimensional float vector.
 * @param a The contents of the vector.  False = 0, true = 1.  If one component is given, it is repeated to fill the vector.
 * @returns A two-dimensional float vector constructed using the given contents.
 */
export function vec2(a: Expression<BasePrimitive>): Expression<Vec2Primitive>;

export function vec2(...a: Two): Expression<Vec2Primitive>;

export function vec2(
  ...a: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Vec2Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      `vec2`,
      2,
      a.map((arg) => new CastToFloatImplementation(arg.javascript))
    ),
    new FunctionImplementation(
      `vec2`,
      `vec2`,
      a.map((arg) => arg.glsl)
    )
  );
}
