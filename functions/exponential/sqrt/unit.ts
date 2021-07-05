import { float, vec2, vec3, vec4, sqrt } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `sqrt float`,
  { x: float(0.3) },
  ({ x }) => sqrt(x),
  0.5477225575
);

vec2Scenario(
  `sqrt vec2`,
  { x: vec2(float(0.3), float(0.7)) },
  ({ x }) => sqrt(x),
  [0.5477225575, 0.83666002653]
);

vec3Scenario(
  `sqrt vec3`,
  { x: vec3(float(0.3), float(0.7), float(0.2)) },
  ({ x }) => sqrt(x),
  [0.5477225575, 0.83666002653, 0.4472135955]
);

vec4Scenario(
  `sqrt vec4`,
  { x: vec4(float(0.3), float(0.7), float(0.2), float(0.9)) },
  ({ x }) => sqrt(x),
  [0.5477225575, 0.83666002653, 0.4472135955, 0.94868329805]
);
