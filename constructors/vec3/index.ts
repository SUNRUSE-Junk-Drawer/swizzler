import {
  Vec3Primitive,
  BasePrimitive,
  AnyCastablePrimitive,
} from "../../primitive";
import { ConcatenateImplementation } from "../../implementations/concatenate-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";
import { Expression } from "../../expression";
import { Three } from "../total-components";
import { CastToFloatImplementation } from "../../implementations/cast-to-float-implementation";

/**
 * Constructs a three-dimensional float vector.
 * @param a The contents of the vector.  False = 0, true = 1.  If one component is given, it is repeated to fill the vector.
 * @returns A three-dimensional float vector constructed using the given contents.
 */
export function vec3(a: Expression<BasePrimitive>): Expression<Vec3Primitive>;

export function vec3(...a: Three): Expression<Vec3Primitive>;

export function vec3(
  ...a: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Vec3Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      `vec3`,
      3,
      a.map((arg) => new CastToFloatImplementation(arg.javascript))
    ),
    new FunctionImplementation(
      `vec3`,
      `vec3`,
      a.map((arg) => arg.glsl)
    )
  );
}
