import {
  BoolPrimitive,
  Bvec2Primitive,
  Bvec3Primitive,
  Bvec4Primitive,
  AnyBoolPrimitive,
} from "../../primitive";
import { Expression } from "../../expression";
import { UnaryOperatorImplementation } from "../../implementations/unary-implementation";
import { FunctionImplementation } from "../../implementations/function-implementation";

export function not(a: Expression<BoolPrimitive>): Expression<BoolPrimitive>;

export function not(a: Expression<Bvec2Primitive>): Expression<Bvec2Primitive>;

export function not(a: Expression<Bvec3Primitive>): Expression<Bvec3Primitive>;

export function not(a: Expression<Bvec4Primitive>): Expression<Bvec4Primitive>;

export function not(
  a: Expression<AnyBoolPrimitive>
): Expression<AnyBoolPrimitive> {
  return new Expression(
    new UnaryOperatorImplementation(a.primitive, `!`, a.javascript),
    a.primitive === `bool`
      ? new UnaryOperatorImplementation(a.primitive, `!`, a.glsl)
      : new FunctionImplementation(a.primitive, `not`, [a.glsl])
  );
}
