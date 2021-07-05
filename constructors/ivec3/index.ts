import {
  Ivec3Primitive,
  BasePrimitive,
  AnyCastablePrimitive,
} from "../../primitive";
import { ConcatenateImplementation } from "../../implementations/concatenate-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";
import { Expression } from "../../expression";
import { Three } from "../total-components";
import { CastToIntImplementation } from "../../implementations/cast-to-int-implementation";

/**
 * Constructs a three-dimensional integer vector.
 * @param a The contents of the vector.  False = 0, true = 1.  Floats will be rounded towards zero..  If one component is given, it is repeated to fill the vector.
 * @returns A three-dimensional integer vector constructed using the given contents.
 */
export function ivec3(a: Expression<BasePrimitive>): Expression<Ivec3Primitive>;

export function ivec3(...a: Three): Expression<Ivec3Primitive>;

export function ivec3(
  ...a: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Ivec3Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      `ivec3`,
      3,
      a.map((arg) => new CastToIntImplementation(arg.javascript))
    ),
    new FunctionImplementation(
      `ivec3`,
      `ivec3`,
      a.map((arg) => arg.glsl)
    )
  );
}
