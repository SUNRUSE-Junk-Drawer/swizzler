import { float, vec2, vec3, vec4, subtract, exp } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `exp float`,
  { x: float(0.7) },
  ({ x }) => subtract(exp(x), float(1.5)),
  0.51375270747
);

vec2Scenario(
  `exp vec2`,
  { x: vec2(float(0.7), float(0.6)) },
  ({ x }) => subtract(exp(x), float(1.5)),
  [0.51375270747, 0.32211880039]
);

vec3Scenario(
  `exp vec3`,
  { x: vec3(float(0.7), float(0.6), float(0.8)) },
  ({ x }) => subtract(exp(x), float(1.5)),
  [0.51375270747, 0.32211880039, 0.72554092849]
);

vec4Scenario(
  `exp vec4`,
  { x: vec4(float(0.7), float(0.6), float(0.8), float(0.5)) },
  ({ x }) => subtract(exp(x), float(1.5)),
  [0.51375270747, 0.32211880039, 0.72554092849, 0.1487212707]
);
