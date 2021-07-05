import { float, vec2, vec3, vec4, abs } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `abs float negative`,
  { value: float(-0.5) },
  ({ value }) => abs(value),
  0.5
);

floatScenario(
  `abs float positive`,
  { value: float(0.5) },
  ({ value }) => abs(value),
  0.5
);

vec2Scenario(
  `abs vec2`,
  { value: vec2(float(-0.5), float(0.3)) },
  ({ value }) => abs(value),
  [0.5, 0.3]
);

vec3Scenario(
  `abs vec3`,
  { value: vec3(float(-0.5), float(-0.3), float(0.9)) },
  ({ value }) => abs(value),
  [0.5, 0.3, 0.9]
);

vec4Scenario(
  `abs vec4`,
  { value: vec4(float(-0.5), float(-0.3), float(0.9), float(-0.7)) },
  ({ value }) => abs(value),
  [0.5, 0.3, 0.9, 0.7]
);
