import {
  FloatPrimitive,
  IntPrimitive,
  BoolPrimitive,
  primitiveBases,
  AnyPrimitive,
} from "../primitive";
import { Expression } from "../expression";
import { LiteralImplementation } from "../implementations/literal-implementation";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { FunctionImplementation } from "../implementations/function-implementation";
import { CastToIntImplementation } from "../implementations/cast-to-int-implementation";
import { CastToBooleanImplementation } from "../implementations/cast-to-boolean-implementation";
import { CastToFloatImplementation } from "../implementations/cast-to-float-implementation";

export function bool(
  value: boolean | Expression<AnyPrimitive>
): Expression<BoolPrimitive> {
  if (typeof value === `boolean`) {
    const implementation = new LiteralImplementation(`bool`, [
      JSON.stringify(value),
    ]);

    return new Expression(implementation, implementation);
  } else if (value.primitive === `bool`) {
    return value as Expression<BoolPrimitive>;
  } else {
    return new Expression(
      new CastToBooleanImplementation(
        new SwizzleImplementation(
          primitiveBases[value.primitive],
          value.javascript,
          [0]
        )
      ),
      new FunctionImplementation(`bool`, `bool`, [value.glsl])
    ) as Expression<BoolPrimitive>;
  }
}

export function float(
  value: number | Expression<AnyPrimitive>
): Expression<FloatPrimitive> {
  if (typeof value === `number`) {
    if (Number.isNaN(value)) {
      throw new Error(`Cannot create a float literal of NaN.`);
    } else if (!Number.isFinite(value)) {
      if (value > 0) {
        throw new Error(`Cannot create a float literal of positive infinity.`);
      } else {
        throw new Error(`Cannot create a float literal of negative infinity.`);
      }
    } else {
      const stringified = JSON.stringify(value);

      return new Expression(
        new LiteralImplementation(`float`, [stringified]),
        new LiteralImplementation(`float`, [
          stringified.includes(`.`) ? stringified : `${stringified}.`,
        ])
      );
    }
  } else {
    return new Expression(
      new CastToFloatImplementation(
        new SwizzleImplementation(
          primitiveBases[value.primitive],
          value.javascript,
          [0]
        )
      ),
      new FunctionImplementation(`float`, `float`, [value.glsl])
    ) as Expression<FloatPrimitive>;
  }
}

export function int(
  value: number | Expression<AnyPrimitive>
): Expression<IntPrimitive> {
  if (typeof value === `number`) {
    if (Number.isNaN(value)) {
      throw new Error(`Cannot create an int literal of NaN.`);
    } else if (!Number.isFinite(value)) {
      if (value > 0) {
        throw new Error(`Cannot create an int literal of positive infinity.`);
      } else {
        throw new Error(`Cannot create an int literal of negative infinity.`);
      }
    } else if (!Number.isInteger(value)) {
      throw new Error(`Cannot create an int literal of a decimal number.`);
    } else if (!Number.isSafeInteger(value)) {
      throw new Error(`Cannot create an int literal of an unsafe integer.`);
    } else {
      const stringified = JSON.stringify(value);

      return new Expression(
        new LiteralImplementation(`int`, [stringified]),
        new LiteralImplementation(`int`, [stringified])
      );
    }
  } else {
    return new Expression(
      new CastToIntImplementation(
        new SwizzleImplementation(
          primitiveBases[value.primitive],
          value.javascript,
          [0]
        )
      ),
      new FunctionImplementation(`int`, `int`, [value.glsl])
    ) as Expression<IntPrimitive>;
  }
}
