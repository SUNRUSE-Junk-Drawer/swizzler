import { AnyPrimitive } from "../primitive";
import { Implementation } from "./implementation";

export class MatrixResizeImplementation<
  TInputPrimitive extends AnyPrimitive,
  TOutputPrimitive extends AnyPrimitive
> implements Implementation<TOutputPrimitive> {
  constructor(
    public readonly primitive: TOutputPrimitive,
    private readonly resize: Implementation<TInputPrimitive>
  ) {}

  readonly args = [this.resize];

  render(
    renderedArgs: ReadonlyArray<ReadonlyArray<string>>
  ): ReadonlyArray<string> {
    switch (this.primitive) {
      case "mat2":
        switch (renderedArgs[0].length) {
          case 1:
            return [renderedArgs[0][0], "0", "0", renderedArgs[0][0]];

          case 9:
            return [
              renderedArgs[0][0],
              renderedArgs[0][1],
              renderedArgs[0][3],
              renderedArgs[0][4],
            ];

          case 16:
            return [
              renderedArgs[0][0],
              renderedArgs[0][1],
              renderedArgs[0][4],
              renderedArgs[0][5],
            ];
        }

        /* istanbul ignore next */
        break;

      case "mat3":
        switch (renderedArgs[0].length) {
          case 1:
            return [
              renderedArgs[0][0],
              "0",
              "0",
              "0",
              renderedArgs[0][0],
              "0",
              "0",
              "0",
              renderedArgs[0][0],
            ];

          case 4:
            return [
              renderedArgs[0][0],
              renderedArgs[0][1],
              "0",
              renderedArgs[0][2],
              renderedArgs[0][3],
              "0",
              "0",
              "0",
              "1",
            ];

          case 16:
            return [
              renderedArgs[0][0],
              renderedArgs[0][1],
              renderedArgs[0][2],
              renderedArgs[0][4],
              renderedArgs[0][5],
              renderedArgs[0][6],
              renderedArgs[0][8],
              renderedArgs[0][9],
              renderedArgs[0][10],
            ];
        }

        /* istanbul ignore next */
        break;

      case "mat4":
        switch (renderedArgs[0].length) {
          case 1:
            return [
              renderedArgs[0][0],
              "0",
              "0",
              "0",
              "0",
              renderedArgs[0][0],
              "0",
              "0",
              "0",
              "0",
              renderedArgs[0][0],
              "0",
              "0",
              "0",
              "0",
              renderedArgs[0][0],
            ];

          case 4:
            return [
              renderedArgs[0][0],
              renderedArgs[0][1],
              "0",
              "0",
              renderedArgs[0][2],
              renderedArgs[0][3],
              "0",
              "0",
              "0",
              "0",
              "1",
              "0",
              "0",
              "0",
              "0",
              "1",
            ];

          case 9:
            return [
              renderedArgs[0][0],
              renderedArgs[0][1],
              renderedArgs[0][2],
              "0",
              renderedArgs[0][3],
              renderedArgs[0][4],
              renderedArgs[0][5],
              "0",
              renderedArgs[0][6],
              renderedArgs[0][7],
              renderedArgs[0][8],
              "0",
              "0",
              "0",
              "0",
              "1",
            ];
        }

        /* istanbul ignore next */
        break;
    }

    /* istanbul ignore next */
    throw new Error(
      `Unimplemented matrix resize from ${renderedArgs[0].length} components to ${this.primitive}.`
    );
  }
}
