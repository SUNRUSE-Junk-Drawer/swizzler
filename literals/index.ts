import { FloatPrimitive, IntPrimitive, BoolPrimitive } from "../primitive";
import { Expression } from "../expression";
import { LiteralImplementation } from "../implementations/literal-implementation";

// todo: cast
export function bool(value: boolean): Expression<BoolPrimitive> {
  const implementation = new LiteralImplementation(`bool`, [
    JSON.stringify(value),
  ]);

  return new Expression(implementation, implementation);
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
