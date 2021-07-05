import { float, vec2, vec3, vec4, add, multiply, ceil } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `ceil float negative decimal`,
  { x: float(-1.3) },
  ({ x }) => add(multiply(ceil(x), float(0.25)), float(0.5)),
  0.25
);

floatScenario(
  `ceil float negative integer`,
  { x: float(-1) },
  ({ x }) => add(multiply(ceil(x), float(0.25)), float(0.5)),
  0.25
);

floatScenario(
  `ceil float negative unit interval`,
  { x: float(-0.3) },
  ({ x }) => add(multiply(ceil(x), float(0.25)), float(0.5)),
  0.5
);

floatScenario(
  `ceil float zero`,
  { x: float(0) },
  ({ x }) => add(multiply(ceil(x), float(0.25)), float(0.5)),
  0.5
);

floatScenario(
  `ceil float positive unit interval`,
  { x: float(0.3) },
  ({ x }) => add(multiply(ceil(x), float(0.25)), float(0.5)),
  0.75
);

floatScenario(
  `ceil float positive integer`,
  { x: float(1) },
  ({ x }) => add(multiply(ceil(x), float(0.25)), float(0.5)),
  0.75
);

floatScenario(
  `ceil float positive float`,
  { x: float(1.3) },
  ({ x }) => add(multiply(ceil(x), float(0.25)), float(0.5)),
  1
);

vec2Scenario(
  `ceil vec2 a`,
  { x: vec2(float(-1.3), float(1)) },
  ({ x }) => add(multiply(ceil(x), float(0.25)), float(0.5)),
  [0.25, 0.75]
);

vec2Scenario(
  `ceil vec2 b`,
  { x: vec2(float(1.3), float(-1)) },
  ({ x }) => add(multiply(ceil(x), float(0.25)), float(0.5)),
  [1, 0.25]
);

vec2Scenario(
  `ceil vec2 c`,
  { x: vec2(float(0.3), float(0)) },
  ({ x }) => add(multiply(ceil(x), float(0.25)), float(0.5)),
  [0.75, 0.5]
);

vec2Scenario(
  `ceil vec2 d`,
  { x: vec2(float(-0.3), float(0)) },
  ({ x }) => add(multiply(ceil(x), float(0.25)), float(0.5)),
  [0.5, 0.5]
);

vec3Scenario(
  `ceil vec3 a`,
  { x: vec3(float(-1.3), float(1), float(-1)) },
  ({ x }) => add(multiply(ceil(x), float(0.25)), float(0.5)),
  [0.25, 0.75, 0.25]
);

vec3Scenario(
  `ceil vec3 b`,
  { x: vec3(float(1.3), float(0), float(0.3)) },
  ({ x }) => add(multiply(ceil(x), float(0.25)), float(0.5)),
  [1, 0.5, 0.75]
);

vec3Scenario(
  `ceil vec3 c`,
  { x: vec3(float(0.3), float(0), float(-0.3)) },
  ({ x }) => add(multiply(ceil(x), float(0.25)), float(0.5)),
  [0.75, 0.5, 0.5]
);

vec4Scenario(
  `ceil vec4 a`,
  { x: vec4(float(-1.3), float(0.3), float(0), float(1.3)) },
  ({ x }) => add(multiply(ceil(x), float(0.25)), float(0.5)),
  [0.25, 0.75, 0.5, 1]
);

vec4Scenario(
  `ceil vec4 b`,
  { x: vec4(float(-1), float(-0.3), float(1), float(1.3)) },
  ({ x }) => add(multiply(ceil(x), float(0.25)), float(0.5)),
  [0.25, 0.5, 0.75, 1]
);
