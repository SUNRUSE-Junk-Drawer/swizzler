import { AnyPrimitive } from "../primitive";
import { Implementation } from "./implementation";

export class AggregateImplementation<
  TInputPrimitive extends AnyPrimitive,
  TOutputPrimitive extends AnyPrimitive
> implements Implementation<TOutputPrimitive> {
  constructor(
    public readonly primitive: TOutputPrimitive,
    private readonly symbol: string,
    private readonly ofComponentsOf: Implementation<TInputPrimitive>
  ) {}

  readonly args: ReadonlyArray<Implementation<TInputPrimitive>> = [
    this.ofComponentsOf,
  ];

  render(
    renderedArgs: ReadonlyArray<ReadonlyArray<string>>
  ): ReadonlyArray<string> {
    return [renderedArgs[0].join(this.symbol)];
  }
}
