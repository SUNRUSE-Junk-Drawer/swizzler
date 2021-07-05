import { AnyNumericPrimitive, AnyPrimitive } from "../primitive";
import { Implementation } from "./implementation";

export class RoundImplementation<TPrimitive extends AnyNumericPrimitive>
  implements Implementation<TPrimitive> {
  constructor(private readonly a: Implementation<TPrimitive>) {}

  readonly primitive = this.a.primitive;

  readonly args: ReadonlyArray<Implementation<AnyPrimitive>> = [this.a];

  render(
    renderedArgs: ReadonlyArray<ReadonlyArray<string>>
  ): ReadonlyArray<string> {
    return renderedArgs[0].map((dimension) => `(${dimension})^0`);
  }
}
