import { AnyPrimitive } from "../primitive";
import { Implementation } from "./implementation";

export class FunctionImplementation<
  TInputPrimitive extends AnyPrimitive,
  TOutputPrimitive extends AnyPrimitive
> implements Implementation<TOutputPrimitive> {
  constructor(
    public readonly primitive: TOutputPrimitive,
    private readonly name: string,
    public readonly args: ReadonlyArray<Implementation<TInputPrimitive>>
  ) {}

  render(
    renderedArgs: ReadonlyArray<ReadonlyArray<string>>
  ): ReadonlyArray<string> {
    const greatestArity = Math.max(...renderedArgs.map((arg) => arg.length));

    const output: string[] = [];

    for (let i = 0; i < greatestArity; i++) {
      output.push(
        `${this.name}(${renderedArgs
          .map((arg) => arg[Math.min(i, arg.length - 1)])
          .join(",")})`
      );
    }

    return output;
  }
}
