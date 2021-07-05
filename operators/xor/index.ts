import { BoolPrimitive } from "../../primitive";
import { Expression } from "../../expression";
import { BinaryOperatorImplementation } from "../../implementations/binary-implementation";

export function xor(
  a: Expression<BoolPrimitive>,
  b: Expression<BoolPrimitive>
): Expression<BoolPrimitive> {
  return new Expression(
    new BinaryOperatorImplementation(`bool`, a.javascript, `!=`, b.javascript),
    new BinaryOperatorImplementation(`bool`, a.glsl, `^^`, b.glsl)
  );
}
