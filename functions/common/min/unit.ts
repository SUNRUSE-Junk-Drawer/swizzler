import { float, vec2, vec3, vec4, add, multiply, min } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `min float first greater`,
  { x: float(0.7), y: float(0.3) },
  ({ x, y }) => add(multiply(min(x, y), float(0.25)), float(0.5)),
  0.575
);

floatScenario(
  `min float equal`,
  { x: float(0.5), y: float(0.5) },
  ({ x, y }) => add(multiply(min(x, y), float(0.25)), float(0.5)),
  0.625
);

floatScenario(
  `min float second greater`,
  { x: float(0.3), y: float(0.7) },
  ({ x, y }) => add(multiply(min(x, y), float(0.25)), float(0.5)),
  0.575
);

vec2Scenario(
  `min vec2 vec2 x`,
  { x: vec2(float(0.3), float(0.5)), y: vec2(float(0.7), float(0.5)) },
  ({ x, y }) => add(multiply(min(x, y), float(0.25)), float(0.5)),
  [0.575, 0.625]
);

vec2Scenario(
  `min vec2 vec2 y`,
  { x: vec2(float(0.7), float(0.5)), y: vec2(float(0.3), float(0.5)) },
  ({ x, y }) => add(multiply(min(x, y), float(0.25)), float(0.5)),
  [0.575, 0.625]
);

vec2Scenario(
  `min vec2 float x`,
  { x: vec2(float(0.3), float(0.7)), y: float(0.5) },
  ({ x, y }) => add(multiply(min(x, y), float(0.25)), float(0.5)),
  [0.575, 0.625]
);

vec2Scenario(
  `min vec2 float y`,
  { x: vec2(float(0.7), float(0.5)), y: float(0.5) },
  ({ x, y }) => add(multiply(min(x, y), float(0.25)), float(0.5)),
  [0.625, 0.625]
);

vec3Scenario(
  `min vec3 vec3`,
  {
    x: vec3(float(0.7), float(0.5), float(0.4)),
    y: vec3(float(0.3), float(0.5), float(0.6)),
  },
  ({ x, y }) => add(multiply(min(x, y), float(0.25)), float(0.5)),
  [0.575, 0.625, 0.6]
);

vec3Scenario(
  `min vec3 float`,
  { x: vec3(float(0.7), float(0.5), float(0.4)), y: float(0.5) },
  ({ x, y }) => add(multiply(min(x, y), float(0.25)), float(0.5)),
  [0.625, 0.625, 0.6]
);

vec4Scenario(
  `min vec4 vec4`,
  {
    x: vec4(float(0.7), float(0.5), float(0.4), float(0.8)),
    y: vec4(float(0.3), float(0.5), float(0.6), float(0.2)),
  },
  ({ x, y }) => add(multiply(min(x, y), float(0.25)), float(0.5)),
  [0.575, 0.625, 0.6, 0.55]
);

vec4Scenario(
  `min vec4 float`,
  { x: vec4(float(0.7), float(0.5), float(0.4), float(0.8)), y: float(0.5) },
  ({ x, y }) => add(multiply(min(x, y), float(0.25)), float(0.5)),
  [0.625, 0.625, 0.6, 0.625]
);
