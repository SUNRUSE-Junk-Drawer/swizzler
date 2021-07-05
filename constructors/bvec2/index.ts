import {
  AnyCastablePrimitive,
  BasePrimitive,
  Bvec2Primitive,
} from "../../primitive";
import { ConcatenateImplementation } from "../../implementations/concatenate-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";
import { CastToBooleanImplementation } from "../../implementations/cast-to-boolean-implementation";
import { Expression } from "../../expression";
import { Two } from "../total-components";

/**
 * Constructs a two-dimensional boolean vector.
 * @param a The contents of the vector.  If one component is given, it is repeated to fill the vector.  For integers and floats, 0 = false, otherwise, true.
 * @returns A two-dimensional boolean vector constructed using the given contents.
 */
export function bvec2(a: Expression<BasePrimitive>): Expression<Bvec2Primitive>;

export function bvec2(...a: Two): Expression<Bvec2Primitive>;

export function bvec2(
  ...a: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Bvec2Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      `bvec2`,
      2,
      a.map((arg) => new CastToBooleanImplementation(arg.javascript))
    ),
    new FunctionImplementation(
      `bvec2`,
      `bvec2`,
      a.map((arg) => arg.glsl)
    )
  );
}
