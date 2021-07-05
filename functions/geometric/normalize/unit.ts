import { float, vec2, vec3, vec4, add, multiply, normalize } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `normalize float positive`,
  { x: float(75) },
  ({ x }) => add(multiply(normalize(x), float(0.25)), float(0.5)),
  0.75
);

floatScenario(
  `normalize float negative`,
  { x: float(-75) },
  ({ x }) => add(multiply(normalize(x), float(0.25)), float(0.5)),
  0.25
);

vec2Scenario(
  `normalize vec2`,
  { x: vec2(float(-108), float(80)) },
  ({ x }) => add(multiply(normalize(x), float(0.5)), float(0.5)),
  [0.09822142, 0.79761374]
);

vec3Scenario(
  `normalize vec3`,
  { x: vec3(float(-108), float(-80), float(21)) },
  ({ x }) => add(multiply(normalize(x), float(0.5)), float(0.5)),
  [0.103037715, 0.20595387, 0.5771871]
);

vec4Scenario(
  `normalize vec4`,
  { x: vec4(float(-108), float(-80), float(21), float(-50)) },
  ({ x }) => add(multiply(normalize(x), float(0.5)), float(0.5)),
  [0.12740895, 0.22400662, 0.57244825, 0.32750416]
);
