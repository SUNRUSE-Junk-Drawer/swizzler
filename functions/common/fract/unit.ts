import { float, vec2, vec3, vec4, add, multiply, fract } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `fract float negative decimal`,
  { x: float(-1.3) },
  ({ x }) => add(multiply(fract(x), float(0.25)), float(0.5)),
  0.675
);

floatScenario(
  `fract float negative integer`,
  { x: float(-1) },
  ({ x }) => add(multiply(fract(x), float(0.25)), float(0.5)),
  0.5
);

floatScenario(
  `fract float negative unit interval`,
  { x: float(-0.3) },
  ({ x }) => add(multiply(fract(x), float(0.25)), float(0.5)),
  0.675
);

floatScenario(
  `fract float zero`,
  { x: float(0) },
  ({ x }) => add(multiply(fract(x), float(0.25)), float(0.5)),
  0.5
);

floatScenario(
  `fract float positive unit interval`,
  { x: float(0.3) },
  ({ x }) => add(multiply(fract(x), float(0.25)), float(0.5)),
  0.575
);

floatScenario(
  `fract float positive integer`,
  { x: float(1) },
  ({ x }) => add(multiply(fract(x), float(0.25)), float(0.5)),
  0.5
);

floatScenario(
  `fract float positive float`,
  { x: float(1.3) },
  ({ x }) => add(multiply(fract(x), float(0.25)), float(0.5)),
  0.575
);

vec2Scenario(
  `fract vec2 a`,
  { x: vec2(float(-1.3), float(1)) },
  ({ x }) => add(multiply(fract(x), float(0.25)), float(0.5)),
  [0.675, 0.5]
);

vec2Scenario(
  `fract vec2 b`,
  { x: vec2(float(1.3), float(-1)) },
  ({ x }) => add(multiply(fract(x), float(0.25)), float(0.5)),
  [0.575, 0.5]
);

vec2Scenario(
  `fract vec2 c`,
  { x: vec2(float(0.3), float(0)) },
  ({ x }) => add(multiply(fract(x), float(0.25)), float(0.5)),
  [0.575, 0.5]
);

vec2Scenario(
  `fract vec2 d`,
  { x: vec2(float(-0.3), float(0)) },
  ({ x }) => add(multiply(fract(x), float(0.25)), float(0.5)),
  [0.675, 0.5]
);

vec3Scenario(
  `fract vec3 a`,
  { x: vec3(float(-1.3), float(1), float(-1)) },
  ({ x }) => add(multiply(fract(x), float(0.25)), float(0.5)),
  [0.675, 0.5, 0.5]
);

vec3Scenario(
  `fract vec3 b`,
  { x: vec3(float(1.3), float(0), float(0.3)) },
  ({ x }) => add(multiply(fract(x), float(0.25)), float(0.5)),
  [0.575, 0.5, 0.575]
);

vec3Scenario(
  `fract vec3 c`,
  { x: vec3(float(0.3), float(0), float(-0.3)) },
  ({ x }) => add(multiply(fract(x), float(0.25)), float(0.5)),
  [0.575, 0.5, 0.675]
);

vec4Scenario(
  `fract vec4 a`,
  { x: vec4(float(-1.3), float(0.3), float(0), float(1.3)) },
  ({ x }) => add(multiply(fract(x), float(0.25)), float(0.5)),
  [0.675, 0.575, 0.5, 0.575]
);

vec4Scenario(
  `fract vec4 b`,
  { x: vec4(float(-1), float(-0.3), float(1), float(1.3)) },
  ({ x }) => add(multiply(fract(x), float(0.25)), float(0.5)),
  [0.5, 0.675, 0.5, 0.575]
);
