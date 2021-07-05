import { AnyFloatPrimitive } from "../primitive";
import { Implementation } from "./implementation";

export class MatrixVectorMultiplyImplementation<
  TInputA extends AnyFloatPrimitive,
  TInputB extends AnyFloatPrimitive,
  TOutput extends TInputA | TInputB
> implements Implementation<TOutput> {
  constructor(
    public readonly primitive: TOutput,
    private readonly a: Implementation<TInputA>,
    private readonly b: Implementation<TInputB>
  ) {}

  public readonly args = [this.a, this.b];

  render(
    renderedArgs: ReadonlyArray<ReadonlyArray<string>>
  ): ReadonlyArray<string> {
    const output: string[] = [];

    if (renderedArgs[0].length > renderedArgs[1].length) {
      for (let i = 0; i < renderedArgs[1].length; i++) {
        const fragments: string[] = [];

        for (let j = 0; j < renderedArgs[1].length; j++) {
          fragments.push(
            `(${renderedArgs[1][j]})*(${
              renderedArgs[0][i + j * renderedArgs[1].length]
            })`
          );
        }

        output.push(fragments.join("+"));
      }
    } else {
      for (let i = 0; i < renderedArgs[0].length; i++) {
        const fragments: string[] = [];

        for (let j = 0; j < renderedArgs[0].length; j++) {
          fragments.push(
            `(${renderedArgs[0][j]})*(${
              renderedArgs[1][i * renderedArgs[0].length + j]
            })`
          );
        }

        output.push(fragments.join("+"));
      }
    }

    return output;
  }
}
