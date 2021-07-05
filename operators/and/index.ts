import { BoolPrimitive } from "../../primitive";
import { Expression } from "../../expression";
import { binary } from "../../helpers";

export function and(
  a: Expression<BoolPrimitive>,
  b: Expression<BoolPrimitive>
): Expression<BoolPrimitive> {
  return binary(a, `&&`, b);
}
