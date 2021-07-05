import { float, vec2, vec3, vec4, add, multiply, step } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `step float less than edge`,
  { edge: float(0.3), x: float(0.7) },
  ({ edge, x }) => add(multiply(step(edge, x), float(0.25)), float(0.5)),
  0.75
);

floatScenario(
  `step float equal to edge`,
  { edge: float(0.5), x: float(0.5) },
  ({ edge, x }) => add(multiply(step(edge, x), float(0.25)), float(0.5)),
  0.75
);

floatScenario(
  `step float greater than edge`,
  { edge: float(0.7), x: float(0.3) },
  ({ edge, x }) => add(multiply(step(edge, x), float(0.25)), float(0.5)),
  0.5
);

vec2Scenario(
  `step vec2 vec2 a`,
  { edge: vec2(float(0.3), float(0.5)), x: vec2(float(0.7), float(0.5)) },
  ({ edge, x }) => add(multiply(step(edge, x), float(0.25)), float(0.5)),
  [0.75, 0.75]
);

vec2Scenario(
  `step vec2 vec2 b`,
  { edge: vec2(float(0.7), float(0.5)), x: vec2(float(0.3), float(0.5)) },
  ({ edge, x }) => add(multiply(step(edge, x), float(0.25)), float(0.5)),
  [0.5, 0.75]
);

vec2Scenario(
  `step float vec2 a`,
  { edge: float(0.5), x: vec2(float(0.3), float(0.5)) },
  ({ edge, x }) => add(multiply(step(edge, x), float(0.25)), float(0.5)),
  [0.5, 0.75]
);

vec2Scenario(
  `step float vec2 b`,
  { edge: float(0.5), x: vec2(float(0.7), float(0.5)) },
  ({ edge, x }) => add(multiply(step(edge, x), float(0.25)), float(0.5)),
  [0.75, 0.75]
);

vec3Scenario(
  `step vec3 vec3`,
  {
    edge: vec3(float(0.3), float(0.5), float(0.7)),
    x: vec3(float(0.7), float(0.5), float(0.3)),
  },
  ({ edge, x }) => add(multiply(step(edge, x), float(0.25)), float(0.5)),
  [0.75, 0.75, 0.5]
);

vec3Scenario(
  `step float vec3`,
  {
    edge: float(0.5),
    x: vec3(float(0.7), float(0.5), float(0.3)),
  },
  ({ edge, x }) => add(multiply(step(edge, x), float(0.25)), float(0.5)),
  [0.75, 0.75, 0.5]
);

vec4Scenario(
  `step vec4 vec4`,
  {
    edge: vec4(float(0.3), float(0.5), float(0.7), float(0.9)),
    x: vec4(float(0.7), float(0.5), float(0.3), float(0.2)),
  },
  ({ edge, x }) => add(multiply(step(edge, x), float(0.25)), float(0.5)),
  [0.75, 0.75, 0.5, 0.5]
);

vec4Scenario(
  `step vec4 vec4`,
  {
    edge: float(0.5),
    x: vec4(float(0.7), float(0.5), float(0.3), float(0.2)),
  },
  ({ edge, x }) => add(multiply(step(edge, x), float(0.25)), float(0.5)),
  [0.75, 0.75, 0.5, 0.5]
);
