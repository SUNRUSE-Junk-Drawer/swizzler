import { float, vec2, vec3, vec4, asin } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(`asin float`, { x: float(0.5) }, ({ x }) => asin(x), 0.523599);

vec2Scenario(
  `asin vec2`,
  { x: vec2(float(0.5), float(0.6)) },
  ({ x }) => asin(x),
  [0.523599, 0.6435011087932844]
);

vec3Scenario(
  `asin vec3`,
  { x: vec3(float(0.5), float(0.6), float(0.4)) },
  ({ x }) => asin(x),
  [0.523599, 0.6435011087932844, 0.411517]
);

vec4Scenario(
  `asin vec4`,
  { x: vec4(float(0.5), float(0.6), float(0.4), float(0.2)) },
  ({ x }) => asin(x),
  [0.523599, 0.6435011087932844, 0.411517, 0.201358]
);
