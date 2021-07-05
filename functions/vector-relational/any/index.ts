import {
  BoolPrimitive,
  Bvec2Primitive,
  Bvec3Primitive,
  Bvec4Primitive,
} from "../../../primitive";
import { Expression } from "../../../expression";
import { AggregateImplementation } from "../../../implementations/aggregate-implementation";
import { FunctionImplementation } from "../../../implementations/function-implementation";

export function any(
  a: Expression<
    BoolPrimitive | Bvec2Primitive | Bvec3Primitive | Bvec4Primitive
  >
): Expression<BoolPrimitive> {
  if (a.primitive === `bool`) {
    return a as Expression<BoolPrimitive>;
  } else {
    return new Expression(
      new AggregateImplementation(`bool`, `||`, a.javascript),
      new FunctionImplementation(`bool`, `any`, [a.glsl])
    );
  }
}
