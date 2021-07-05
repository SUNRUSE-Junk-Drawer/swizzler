import { float, vec2, vec3, vec4, add, multiply, max } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `max float first greater`,
  { x: float(0.7), y: float(0.3) },
  ({ x, y }) => add(multiply(max(x, y), float(0.25)), float(0.5)),
  0.675
);

floatScenario(
  `max float equal`,
  { x: float(0.5), y: float(0.5) },
  ({ x, y }) => add(multiply(max(x, y), float(0.25)), float(0.5)),
  0.625
);

floatScenario(
  `max float second greater`,
  { x: float(0.3), y: float(0.7) },
  ({ x, y }) => add(multiply(max(x, y), float(0.25)), float(0.5)),
  0.675
);

vec2Scenario(
  `max vec2 vec2 a`,
  { x: vec2(float(0.3), float(0.5)), y: vec2(float(0.7), float(0.5)) },
  ({ x, y }) => add(multiply(max(x, y), float(0.25)), float(0.5)),
  [0.675, 0.625]
);

vec2Scenario(
  `max vec2 vec2 b`,
  { x: vec2(float(0.7), float(0.5)), y: vec2(float(0.3), float(0.5)) },
  ({ x, y }) => add(multiply(max(x, y), float(0.25)), float(0.5)),
  [0.675, 0.625]
);

vec2Scenario(
  `max vec2 float a`,
  { x: vec2(float(0.3), float(0.7)), y: float(0.5) },
  ({ x, y }) => add(multiply(max(x, y), float(0.25)), float(0.5)),
  [0.625, 0.675]
);

vec2Scenario(
  `max vec2 float b`,
  { x: vec2(float(0.7), float(0.5)), y: float(0.5) },
  ({ x, y }) => add(multiply(max(x, y), float(0.25)), float(0.5)),
  [0.675, 0.625]
);

vec3Scenario(
  `max vec3 vec3`,
  {
    x: vec3(float(0.7), float(0.5), float(0.4)),
    y: vec3(float(0.3), float(0.5), float(0.6)),
  },
  ({ x, y }) => add(multiply(max(x, y), float(0.25)), float(0.5)),
  [0.675, 0.625, 0.65]
);

vec3Scenario(
  `max vec3 float`,
  { x: vec3(float(0.7), float(0.5), float(0.4)), y: float(0.5) },
  ({ x, y }) => add(multiply(max(x, y), float(0.25)), float(0.5)),
  [0.675, 0.625, 0.625]
);

vec4Scenario(
  `max vec4 vec4`,
  {
    x: vec4(float(0.7), float(0.5), float(0.4), float(0.8)),
    y: vec4(float(0.3), float(0.5), float(0.6), float(0.2)),
  },
  ({ x, y }) => add(multiply(max(x, y), float(0.25)), float(0.5)),
  [0.675, 0.625, 0.65, 0.7]
);

vec4Scenario(
  `max vec4 float`,
  { x: vec4(float(0.7), float(0.5), float(0.4), float(0.8)), y: float(0.5) },
  ({ x, y }) => add(multiply(max(x, y), float(0.25)), float(0.5)),
  [0.675, 0.625, 0.625, 0.7]
);
