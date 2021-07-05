import { float, vec2, vec3, vec4, log2 } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `log2 float`,
  { x: float(1.6) },
  ({ x }) => log2(x),
  0.67807190511
);

vec2Scenario(
  `log2 vec2`,
  { x: vec2(float(1.6), float(1.3)) },
  ({ x }) => log2(x),
  [0.67807190511, 0.37851162325]
);

vec3Scenario(
  `log2 vec3`,
  { x: vec3(float(1.6), float(1.3), float(1.9)) },
  ({ x }) => log2(x),
  [0.67807190511, 0.37851162325, 0.92599941855]
);

vec4Scenario(
  `log2 vec4`,
  { x: vec4(float(1.6), float(1.3), float(1.9), float(1.4)) },
  ({ x }) => log2(x),
  [0.67807190511, 0.37851162325, 0.92599941855, 0.48542682717]
);
