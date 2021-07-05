# `swizzler` [![Continuous Integration](https://github.com/jameswilddev/swizzler/workflows/Continuous%20Integration/badge.svg)](https://github.com/jameswilddev/swizzler/actions) [![License](https://img.shields.io/github/license/jameswilddev/swizzler.svg)](https://github.com/jameswilddev/swizzler/blob/master/license) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjameswilddev%2Fswizzler.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjameswilddev%2Fswizzler?ref=badge_shield) [![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

A TypeScript DSL for building expressions which can be compiled to TypeScript, Javascript and GLSL.

## Design

As much as possible, this library mimics the feature set of GLSL (targeting WebGL, first generation).  The full set of functionality can be found by inspecting the exported types.

Inputs are declared using `reference` (for dynamic values) and `float`, `int`, etc. (for static values).  Most other exports mimic the operators (`add`, `subtract`, etc.) and functions (`sin`, `abs`, etc.) built into GLSL - though note that they manipulate logic, not values.  You must compile the expression tree to source code (`compileTypeScript`, `compileGlsl`, etc.) to execute it.

The generated code will often include multiple statements.  A prefix is given for the final statement, allowing it to either be assigned to a variable, returned or given as an argument to a function, for example.

The more logic can be included in a single compilation, the better a job can be done in the constant folding and optimization processes.

Although TypeScript requires that the values returned by `reference`, `subtract`, etc. are visible to you, they are not intended for use other than to pass to other functions from this library and are likely to significantly change.

## Example

### Input

```typescript
import {
  reference,
  float,
  vec2,
  multiply,
  dot,
  subtract,
  add,
  compileTypeScript,
  compileJavascript,
  compileGlsl,
} from "swizzler";

const argumentA = reference("vec3", "testArgumentA");
const argumentB = reference("float", "testArgumentB");

const expression = subtract(
  argumentB,
  add(
    argumentA,
    dot(
      multiply(vec2(float(2.7), float(-4)), float(3.1)),
      vec2(float(2.8), float(4.4))
    )
  )
);

console.log(compileTypeScript("const result = ", expression));

console.log(compileJavascript("const result = ", expression));

console.log(compileGlsl("vec3 a = ", expression));
```

### Outputs

#### TypeScript

```typescript
const result = [
  testArgumentB - (testArgumentA[0] + (2.7 * 3.1 * 2.8 + -4 * 3.1 * 4.4)),
  testArgumentB - (testArgumentA[1] + (2.7 * 3.1 * 2.8 + -4 * 3.1 * 4.4)),
  testArgumentB - (testArgumentA[2] + (2.7 * 3.1 * 2.8 + -4 * 3.1 * 4.4)),
];
```

#### Javascript

```javascript
const result = [
  testArgumentB - (testArgumentA[0] + (2.7 * 3.1 * 2.8 + -4 * 3.1 * 4.4)),
  testArgumentB - (testArgumentA[1] + (2.7 * 3.1 * 2.8 + -4 * 3.1 * 4.4)),
  testArgumentB - (testArgumentA[2] + (2.7 * 3.1 * 2.8 + -4 * 3.1 * 4.4)),
];
```

#### GLSL

```glsl
vec3 a = testArgumentB - (testArgumentA + dot(vec2(2.7,-4.0) * 3.1, vec2(2.8,4.4)));
```

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjameswilddev%2Fswizzler.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjameswilddev%2Fswizzler?ref=badge_large)
