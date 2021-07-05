import {
  Ivec2Primitive,
  BasePrimitive,
  AnyCastablePrimitive,
} from "../../primitive";
import { ConcatenateImplementation } from "../../implementations/concatenate-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";
import { Expression } from "../../expression";
import { Two } from "../total-components";
import { CastToIntImplementation } from "../../implementations/cast-to-int-implementation";

/**
 * Constructs a two-dimensional integer vector.
 * @param a The contents of the vector.  False = 0, true = 1.  Floats will be rounded towards zero.  If one component is given, it is repeated to fill the vector.
 * @returns A two-dimensional integer vector constructed using the given contents.
 */
export function ivec2(a: Expression<BasePrimitive>): Expression<Ivec2Primitive>;

export function ivec2(...a: Two): Expression<Ivec2Primitive>;

export function ivec2(
  ...a: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Ivec2Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      `ivec2`,
      2,
      a.map((arg) => new CastToIntImplementation(arg.javascript))
    ),
    new FunctionImplementation(
      `ivec2`,
      `ivec2`,
      a.map((arg) => arg.glsl)
    )
  );
}
