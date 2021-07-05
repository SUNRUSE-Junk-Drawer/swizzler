import { AnyMatPrimitive } from "../primitive";
import { Implementation } from "./implementation";

export class MatrixMatrixMultiplyImplementation<
  TPrimitive extends AnyMatPrimitive
> implements Implementation<TPrimitive> {
  constructor(
    public readonly primitive: TPrimitive,
    private readonly a: Implementation<TPrimitive>,
    private readonly b: Implementation<TPrimitive>
  ) {}

  public readonly args = [this.a, this.b];

  render(
    renderedArgs: ReadonlyArray<ReadonlyArray<string>>
  ): ReadonlyArray<string> {
    const output: string[] = [];

    const rowsColumns = Math.sqrt(renderedArgs[0].length);

    for (let j = 0; j < rowsColumns; j++) {
      for (let i = 0; i < rowsColumns; i++) {
        const fragments: string[] = [];

        for (let k = 0; k < rowsColumns; k++) {
          fragments.push(
            `(${renderedArgs[0][i + k * rowsColumns]})*(${
              renderedArgs[1][j * rowsColumns + k]
            })`
          );
        }

        output.push(fragments.join(`+`));
      }
    }

    return output;
  }
}
