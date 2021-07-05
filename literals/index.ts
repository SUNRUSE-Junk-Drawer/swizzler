import {
  FloatPrimitive,
  IntPrimitive,
  BoolPrimitive,
  primitiveBases,
  primitiveArities,
  AnyPrimitive,
} from "../primitive";
import { Expression } from "../expression";
import { LiteralImplementation } from "../implementations/literal-implementation";
import { BinaryOperatorImplementation } from "../implementations/binary-implementation";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { FunctionImplementation } from "../implementations/function-implementation";

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
    const firstComponentJavascript =
      primitiveArities[value.primitive] === 1
        ? value.javascript
        : new SwizzleImplementation(
            primitiveBases[value.primitive],
            value.javascript,
            [0]
          );

    const typedJavascript =
      firstComponentJavascript.primitive === `bool`
        ? firstComponentJavascript
        : new BinaryOperatorImplementation(
            `bool`,
            firstComponentJavascript,
            `!=`,
            new LiteralImplementation(firstComponentJavascript.primitive, [`0`])
          );

    return new Expression(
      typedJavascript,
      new FunctionImplementation(`bool`, `bool`, [value.glsl])
    ) as Expression<BoolPrimitive>;
  }
}

// todo: cast
export function float(value: number): Expression<FloatPrimitive> {
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
}

// todo: cast
export function int(value: number): Expression<IntPrimitive> {
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
}
