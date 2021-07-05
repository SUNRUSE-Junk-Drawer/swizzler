import { float, vec2, vec3, vec4, add, multiply, sign } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `sign float negative decimal`,
  { x: float(-1.3) },
  ({ x }) => add(multiply(sign(x), float(0.25)), float(0.5)),
  0.25
);

floatScenario(
  `sign float negative integer`,
  { x: float(-1) },
  ({ x }) => add(multiply(sign(x), float(0.25)), float(0.5)),
  0.25
);

floatScenario(
  `sign float negative unit interval`,
  { x: float(-0.3) },
  ({ x }) => add(multiply(sign(x), float(0.25)), float(0.5)),
  0.25
);

floatScenario(
  `sign float zero`,
  { x: float(0) },
  ({ x }) => add(multiply(sign(x), float(0.25)), float(0.5)),
  0.5
);

floatScenario(
  `sign float positive unit interval`,
  { x: float(0.3) },
  ({ x }) => add(multiply(sign(x), float(0.25)), float(0.5)),
  0.75
);

floatScenario(
  `sign float positive integer`,
  { x: float(1) },
  ({ x }) => add(multiply(sign(x), float(0.25)), float(0.5)),
  0.75
);

floatScenario(
  `sign float positive float`,
  { x: float(1.3) },
  ({ x }) => add(multiply(sign(x), float(0.25)), float(0.5)),
  0.75
);

vec2Scenario(
  `sign vec2 a`,
  { x: vec2(float(-1.3), float(1)) },
  ({ x }) => add(multiply(sign(x), float(0.25)), float(0.5)),
  [0.25, 0.75]
);

vec2Scenario(
  `sign vec2 b`,
  { x: vec2(float(1.3), float(-1)) },
  ({ x }) => add(multiply(sign(x), float(0.25)), float(0.5)),
  [0.75, 0.25]
);

vec2Scenario(
  `sign vec2 c`,
  { x: vec2(float(0.3), float(0)) },
  ({ x }) => add(multiply(sign(x), float(0.25)), float(0.5)),
  [0.75, 0.5]
);

vec2Scenario(
  `sign vec2 d`,
  { x: vec2(float(-0.3), float(0)) },
  ({ x }) => add(multiply(sign(x), float(0.25)), float(0.5)),
  [0.25, 0.5]
);

vec3Scenario(
  `sign vec3 a`,
  { x: vec3(float(-1.3), float(1), float(-1)) },
  ({ x }) => add(multiply(sign(x), float(0.25)), float(0.5)),
  [0.25, 0.75, 0.25]
);

vec3Scenario(
  `sign vec3 b`,
  { x: vec3(float(1.3), float(0), float(0.3)) },
  ({ x }) => add(multiply(sign(x), float(0.25)), float(0.5)),
  [0.75, 0.5, 0.75]
);

vec3Scenario(
  `sign vec3 c`,
  { x: vec3(float(0.3), float(0), float(-0.3)) },
  ({ x }) => add(multiply(sign(x), float(0.25)), float(0.5)),
  [0.75, 0.5, 0.25]
);

vec4Scenario(
  `sign vec4 a`,
  { x: vec4(float(-1.3), float(0.3), float(0), float(1.3)) },
  ({ x }) => add(multiply(sign(x), float(0.25)), float(0.5)),
  [0.25, 0.75, 0.5, 0.75]
);

vec4Scenario(
  `sign vec4 b`,
  { x: vec4(float(-1), float(-0.3), float(1), float(1.3)) },
  ({ x }) => add(multiply(sign(x), float(0.25)), float(0.5)),
  [0.25, 0.25, 0.75, 0.75]
);
