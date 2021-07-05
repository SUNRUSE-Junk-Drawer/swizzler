import { AnyPrimitive } from "../primitive";
import { Implementation } from "./implementation";

export class TernaryOperatorImplementation<
  TInputAPrimitive extends AnyPrimitive,
  TInputBPrimitive extends AnyPrimitive,
  TInputCPrimitive extends AnyPrimitive,
  TOutputPrimitive extends AnyPrimitive
> implements Implementation<TOutputPrimitive> {
  constructor(
    public readonly primitive: TOutputPrimitive,
    private readonly a: Implementation<TInputAPrimitive>,
    private readonly symbolAB: string,
    private readonly b: Implementation<TInputBPrimitive>,
    private readonly symbolBC: string,
    private readonly c: Implementation<TInputCPrimitive>
  ) {}

  readonly args: readonly [
    Implementation<TInputAPrimitive>,
    Implementation<TInputBPrimitive>,
    Implementation<TInputCPrimitive>
  ] = [this.a, this.b, this.c];

  render(
    renderedArgs: ReadonlyArray<ReadonlyArray<string>>
  ): ReadonlyArray<string> {
    const arityA = renderedArgs[0].length;
    const arityB = renderedArgs[1].length;
    const arityC = renderedArgs[2].length;
    const greatestArity = Math.max(arityA, arityB, arityC);

    const output: string[] = [];

    for (let i = 0; i < greatestArity; i++) {
      const indexA = Math.min(i, arityA - 1);
      const indexB = Math.min(i, arityB - 1);
      const indexC = Math.min(i, arityC - 1);
      output.push(
        `(${renderedArgs[0][indexA]})${this.symbolAB}(${renderedArgs[1][indexB]})${this.symbolBC}(${renderedArgs[2][indexC]})`
      );
    }

    return output;
  }
}
