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

export function vec3(a: Expression<BasePrimitive>): Expression<Vec3Primitive>;

export function vec3(...a: Three): Expression<Vec3Primitive>;

export function vec3(
  ...args: ReadonlyArray<Expression<AnyCastablePrimitive>>
): Expression<Vec3Primitive> {
  return new Expression(
    new ConcatenateImplementation(
      `vec3`,
      3,
      args.map((arg) => new CastToFloatImplementation(arg.javascript))
    ),
    new FunctionImplementation(
      `vec3`,
      `vec3`,
      args.map((arg) => arg.glsl)
    )
  );
}
