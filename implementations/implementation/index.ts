import { AnyPrimitive } from "../../primitive";

export interface Implementation<TPrimitive extends AnyPrimitive> {
  readonly primitive: TPrimitive;

  readonly args: ReadonlyArray<Implementation<AnyPrimitive>>;

  render(
    renderedArgs: ReadonlyArray<ReadonlyArray<string>>
  ): ReadonlyArray<string>;
}
