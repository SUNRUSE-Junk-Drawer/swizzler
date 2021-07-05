import { AnyPrimitive } from "../primitive";
import { Implementation } from "./implementation";

export class UnaryOperatorImplementation<
  TInputPrimitive extends AnyPrimitive,
  TOutputPrimitive extends AnyPrimitive
> implements Implementation<TOutputPrimitive> {
  constructor(
    public readonly primitive: TOutputPrimitive,
    private readonly symbol: string,
    private readonly a: Implementation<TInputPrimitive>
  ) {}

  readonly args: ReadonlyArray<Implementation<TInputPrimitive>> = [this.a];

  render(
    renderedArgs: ReadonlyArray<ReadonlyArray<string>>
  ): ReadonlyArray<string> {
    return renderedArgs[0].map((dimension) => `${this.symbol}(${dimension})`);
  }
}
