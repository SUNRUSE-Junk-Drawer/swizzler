import { AnyPrimitive } from "../primitive";
import { Implementation } from "./implementation";

export class ConcatenateImplementation<
  TInputPrimitive extends AnyPrimitive,
  TOutputPrimitive extends AnyPrimitive
> implements Implementation<TOutputPrimitive> {
  constructor(
    public readonly primitive: TOutputPrimitive,
    private readonly repeatNTimesIfSingle: number,
    public readonly args: ReadonlyArray<Implementation<TInputPrimitive>>
  ) {}

  render(
    renderedArgs: ReadonlyArray<ReadonlyArray<string>>
  ): ReadonlyArray<string> {
    const output: string[] = [];

    for (const arg of renderedArgs) {
      for (const dimension of arg) {
        output.push(dimension);
      }
    }

    while (output.length < this.repeatNTimesIfSingle) {
      output.push(output[0]);
    }

    return output;
  }
}
