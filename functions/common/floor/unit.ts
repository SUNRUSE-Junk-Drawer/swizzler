import { float, vec2, vec3, vec4, add, multiply, floor } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `floor float negative decimal`,
  { x: float(-1.3) },
  ({ x }) => add(multiply(floor(x), float(0.25)), float(0.5)),
  0
);

floatScenario(
  `floor float negative integer`,
  { x: float(-1) },
  ({ x }) => add(multiply(floor(x), float(0.25)), float(0.5)),
  0.25
);

floatScenario(
  `floor float negative unit interval`,
  { x: float(-0.3) },
  ({ x }) => add(multiply(floor(x), float(0.25)), float(0.5)),
  0.25
);

floatScenario(
  `floor float zero`,
  { x: float(0) },
  ({ x }) => add(multiply(floor(x), float(0.25)), float(0.5)),
  0.5
);

floatScenario(
  `floor float positive unit interval`,
  { x: float(0.3) },
  ({ x }) => add(multiply(floor(x), float(0.25)), float(0.5)),
  0.5
);

floatScenario(
  `floor float positive integer`,
  { x: float(1) },
  ({ x }) => add(multiply(floor(x), float(0.25)), float(0.5)),
  0.75
);

floatScenario(
  `floor float positive float`,
  { x: float(1.3) },
  ({ x }) => add(multiply(floor(x), float(0.25)), float(0.5)),
  0.75
);

vec2Scenario(
  `floor vec2 a`,
  { x: vec2(float(-1.3), float(1)) },
  ({ x }) => add(multiply(floor(x), float(0.25)), float(0.5)),
  [0, 0.75]
);

vec2Scenario(
  `floor vec2 b`,
  { x: vec2(float(1.3), float(-1)) },
  ({ x }) => add(multiply(floor(x), float(0.25)), float(0.5)),
  [0.75, 0.25]
);

vec2Scenario(
  `floor vec2 c`,
  { x: vec2(float(0.3), float(0)) },
  ({ x }) => add(multiply(floor(x), float(0.25)), float(0.5)),
  [0.5, 0.5]
);

vec2Scenario(
  `floor vec2 d`,
  { x: vec2(float(-0.3), float(0)) },
  ({ x }) => add(multiply(floor(x), float(0.25)), float(0.5)),
  [0.25, 0.5]
);

vec3Scenario(
  `floor vec3 a`,
  { x: vec3(float(-1.3), float(1), float(-1)) },
  ({ x }) => add(multiply(floor(x), float(0.25)), float(0.5)),
  [0, 0.75, 0.25]
);

vec3Scenario(
  `floor vec3 b`,
  { x: vec3(float(1.3), float(0), float(0.3)) },
  ({ x }) => add(multiply(floor(x), float(0.25)), float(0.5)),
  [0.75, 0.5, 0.5]
);

vec3Scenario(
  `floor vec3 c`,
  { x: vec3(float(0.3), float(0), float(-0.3)) },
  ({ x }) => add(multiply(floor(x), float(0.25)), float(0.5)),
  [0.5, 0.5, 0.25]
);

vec4Scenario(
  `floor vec4 a`,
  { x: vec4(float(-1.3), float(0.3), float(0), float(1.3)) },
  ({ x }) => add(multiply(floor(x), float(0.25)), float(0.5)),
  [0, 0.5, 0.5, 0.75]
);

vec4Scenario(
  `floor vec4 b`,
  { x: vec4(float(-1), float(-0.3), float(1), float(1.3)) },
  ({ x }) => add(multiply(floor(x), float(0.25)), float(0.5)),
  [0.25, 0.25, 0.75, 0.75]
);
