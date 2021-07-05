import { AnyPrimitive } from "../primitive";
import { Implementation } from "./implementation";

export class PropertyImplementation<
  TInputPrimitive extends AnyPrimitive,
  TOutputPrimitive extends AnyPrimitive
> implements Implementation<TOutputPrimitive> {
  constructor(
    public readonly primitive: TOutputPrimitive,
    private readonly a: Implementation<TInputPrimitive>,
    private readonly name: string
  ) {}

  readonly args: ReadonlyArray<Implementation<TInputPrimitive>> = [this.a];

  render(
    renderedArgs: ReadonlyArray<ReadonlyArray<string>>
  ): ReadonlyArray<string> {
    return renderedArgs[0].map((dimension) => `(${dimension}).${this.name}`);
  }
}
