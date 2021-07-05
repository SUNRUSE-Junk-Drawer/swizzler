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

export function bvec2(a: Expression<BasePrimitive>): Expression<Bvec2Primitive>;

export function bvec2(...a: Two): Expression<Bvec2Primitive>;

export function bvec2(
  ...args: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Bvec2Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      `bvec2`,
      2,
      args.map((arg) => new CastToBooleanImplementation(arg.javascript))
    ),
    new FunctionImplementation(
      `bvec2`,
      `bvec2`,
      args.map((arg) => arg.glsl)
    )
  );
}
