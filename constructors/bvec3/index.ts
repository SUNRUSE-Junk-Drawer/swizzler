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

export function bvec3(a: Expression<BasePrimitive>): Expression<Bvec3Primitive>;

export function bvec3(...a: Three): Expression<Bvec3Primitive>;

export function bvec3(
  ...args: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Bvec3Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      `bvec3`,
      3,
      args.map((arg) => new CastToBooleanImplementation(arg.javascript))
    ),
    new FunctionImplementation(
      `bvec3`,
      `bvec3`,
      args.map((arg) => arg.glsl)
    )
  );
}
