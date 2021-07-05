import { float, vec2, vec3, vec4, inversesqrt } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `inversesqrt float`,
  { x: float(2.4) },
  ({ x }) => inversesqrt(x),
  0.64549722436
);

vec2Scenario(
  `inversesqrt vec2`,
  { x: vec2(float(2.4), float(3.6)) },
  ({ x }) => inversesqrt(x),
  [0.64549722436, 0.52704627669]
);

vec3Scenario(
  `inversesqrt vec3`,
  { x: vec3(float(2.4), float(3.6), float(1.8)) },
  ({ x }) => inversesqrt(x),
  [0.64549722436, 0.52704627669, 0.7453559925]
);

vec4Scenario(
  `inversesqrt vec4`,
  { x: vec4(float(2.4), float(3.6), float(1.8), float(2.7)) },
  ({ x }) => inversesqrt(x),
  [0.64549722436, 0.52704627669, 0.7453559925, 0.60858061945]
);
