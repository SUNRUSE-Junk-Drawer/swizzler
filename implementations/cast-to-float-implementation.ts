import {
  AnyCastablePrimitive,
  AnyPrimitive,
  castToFloat,
  CastToFloat,
  primitiveBases,
} from "../primitive";
import { Implementation } from "./implementation";

export class CastToFloatImplementation<TFrom extends AnyCastablePrimitive>
  implements Implementation<CastToFloat[TFrom]> {
  constructor(private readonly a: Implementation<AnyCastablePrimitive>) {}

  readonly primitive = castToFloat[this.a.primitive] as CastToFloat[TFrom];

  readonly args: ReadonlyArray<Implementation<AnyPrimitive>> = [this.a];

  render(
    renderedArgs: ReadonlyArray<ReadonlyArray<string>>
  ): ReadonlyArray<string> {
    if (primitiveBases[this.a.primitive] === "bool") {
      return renderedArgs[0].map((dimension) => `(${dimension})?1:0`);
    } else {
      return renderedArgs[0];
    }
  }
}
