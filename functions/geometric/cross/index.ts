import { Vec3Primitive } from "../../../primitive";
import { Expression } from "../../../expression";
import { FunctionImplementation } from "../../../implementations/function-implementation";
import { BinaryOperatorImplementation } from "../../../implementations/binary-implementation";
import { SwizzleImplementation } from "../../../implementations/swizzle-implementation";

export function cross(
  x: Expression<Vec3Primitive>,
  y: Expression<Vec3Primitive>
): Expression<Vec3Primitive> {
  return new Expression(
    new BinaryOperatorImplementation(
      `vec3`,
      new BinaryOperatorImplementation(
        `vec3`,
        new SwizzleImplementation(`vec3`, x.javascript, [1, 2, 0]),
        `*`,
        new SwizzleImplementation(`vec3`, y.javascript, [2, 0, 1])
      ),
      `-`,
      new BinaryOperatorImplementation(
        `vec3`,
        new SwizzleImplementation(`vec3`, x.javascript, [2, 0, 1]),
        `*`,
        new SwizzleImplementation(`vec3`, y.javascript, [1, 2, 0])
      )
    ),
    new FunctionImplementation(`vec3`, `cross`, [x.glsl, y.glsl])
  );
}
