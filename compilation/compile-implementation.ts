import { Implementation } from "../implementations/implementation";
import { AnyPrimitive } from "../primitive";

export function compileImplementation(
  prefix: string,
  implementation: Implementation<AnyPrimitive>
): string {
  const lines = [];

  function recurse(
    implementation: Implementation<AnyPrimitive>
  ): ReadonlyArray<string> {
    const renderedArgs = implementation.args.map(recurse);
    const rendered = implementation.render(renderedArgs);

    return rendered;
  }

  const final = recurse(implementation);

  if (final.length === 1) {
    lines.push(`${prefix}${final[0]};`);
  } else {
    lines.push(`${prefix}[${final.join(`, `)}];`);
  }

  return lines.join(`\n`);
}
