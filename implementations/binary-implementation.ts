import { AnyPrimitive } from "../primitive";
import { Implementation } from "./implementation";

export class BinaryOperatorImplementation<
  TInputPrimitive extends AnyPrimitive,
  TOutputPrimitive extends AnyPrimitive
> implements Implementation<TOutputPrimitive> {
  constructor(
    public readonly primitive: TOutputPrimitive,
    private readonly a: Implementation<TInputPrimitive>,
    private readonly symbol: string,
    private readonly b: Implementation<TInputPrimitive>
  ) {}

  readonly args: ReadonlyArray<Implementation<TInputPrimitive>> = [
    this.a,
    this.b,
  ];

  render(
    renderedArgs: ReadonlyArray<ReadonlyArray<string>>
  ): ReadonlyArray<string> {
    const arityA = renderedArgs[0].length;
    const arityB = renderedArgs[1].length;
    const greatestArity = Math.max(arityA, arityB);

    const output: string[] = [];

    for (let i = 0; i < greatestArity; i++) {
      const indexA = Math.min(i, arityA - 1);
      const indexB = Math.min(i, arityB - 1);
      output.push(
        `(${renderedArgs[0][indexA]})${this.symbol}(${renderedArgs[1][indexB]})`
      );
    }

    return output;
  }
}
