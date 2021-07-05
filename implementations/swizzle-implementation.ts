import { AnyPrimitive } from "../primitive";
import { Implementation } from "./implementation";

export class SwizzleImplementation<
  TInputPrimitive extends AnyPrimitive,
  TOutputPrimitive extends AnyPrimitive
> implements Implementation<TOutputPrimitive> {
  constructor(
    public readonly primitive: TOutputPrimitive,
    private readonly a: Implementation<TInputPrimitive>,
    private readonly indices: ReadonlyArray<number>
  ) {}

  readonly args: ReadonlyArray<Implementation<TInputPrimitive>> = [this.a];

  render(
    renderedArgs: ReadonlyArray<ReadonlyArray<string>>
  ): ReadonlyArray<string> {
    return this.indices.map((index) => renderedArgs[0][index]);
  }
}
