import {
  AnyCastablePrimitive,
  BasePrimitive,
  Bvec3Primitive,
} from "../../primitive";
import { ConcatenateImplementation } from "../../implementations/concatenate-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";
import { CastToBooleanImplementation } from "../../implementations/cast-to-boolean-implementation";
import { Expression } from "../../expression";
import { Three } from "../total-components";

/**
 * Constructs a three-dimensional boolean vector.
 * @param a The contents of the vector.  If one component is given, it is repeated to fill the vector.  For integers and floats, 0 = false, otherwise, true.
 * @returns A three-dimensional boolean vector constructed using the given contents.
 */
export function bvec3(a: Expression<BasePrimitive>): Expression<Bvec3Primitive>;

export function bvec3(...a: Three): Expression<Bvec3Primitive>;

export function bvec3(
  ...a: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Bvec3Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      `bvec3`,
      3,
      a.map((arg) => new CastToBooleanImplementation(arg.javascript))
    ),
    new FunctionImplementation(
      `bvec3`,
      `bvec3`,
      a.map((arg) => arg.glsl)
    )
  );
}
