import {
  AnyCastablePrimitive,
  AnyPrimitive,
  castToBoolean,
  CastToBoolean,
  primitiveBases,
} from "../primitive";
import { Implementation } from "./implementation";

export class CastToBooleanImplementation<TFrom extends AnyCastablePrimitive>
  implements Implementation<CastToBoolean[TFrom]> {
  constructor(private readonly a: Implementation<TFrom>) {}

  readonly primitive = castToBoolean[this.a.primitive];

  readonly args: ReadonlyArray<Implementation<AnyPrimitive>> = [this.a];

  render(
    renderedArgs: ReadonlyArray<ReadonlyArray<string>>
  ): ReadonlyArray<string> {
    if (primitiveBases[this.a.primitive] === "bool") {
      return renderedArgs[0];
    } else {
      return renderedArgs[0].map((dimension) => `!!(${dimension})`);
    }
  }
}
