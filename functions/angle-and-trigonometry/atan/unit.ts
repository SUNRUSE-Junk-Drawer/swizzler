import { float, vec2, vec3, vec4, atan } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `atan float`,
  { x: float(0.9) },
  ({ x }) => atan(x),
  0.7328151017865066
);

vec2Scenario(
  `atan vec2`,
  { x: vec2(float(0.9), float(0.6)) },
  ({ x }) => atan(x),
  [0.7328151017865066, 0.5404195002705842]
);

vec3Scenario(
  `atan vec3`,
  { x: vec3(float(0.9), float(0.6), float(0.8)) },
  ({ x }) => atan(x),
  [0.7328151017865066, 0.5404195002705842, 0.674741]
);

vec4Scenario(
  `atan vec4`,
  { x: vec4(float(0.9), float(0.6), float(0.8), float(0.1)) },
  ({ x }) => atan(x),
  [0.7328151017865066, 0.5404195002705842, 0.674741, 0.09966865249116204]
);

floatScenario(
  `atan float float`,
  { x: float(0.5), y: float(0.7) },
  ({ x, y }) => atan(x, y),
  0.620249
);

vec2Scenario(
  `atan vec2 vec2`,
  { x: vec2(float(0.5), float(0.3)), y: vec2(float(0.7), float(0.6)) },
  ({ x, y }) => atan(x, y),
  [0.620249, 0.463648]
);

vec3Scenario(
  `atan vec3 vec3`,
  {
    x: vec3(float(0.5), float(0.3), float(0.4)),
    y: vec3(float(0.7), float(0.6), float(0.5)),
  },
  ({ x, y }) => atan(x, y),
  [0.620249, 0.463648, 0.674741]
);

vec4Scenario(
  `atan vec4 vec4`,
  {
    x: vec4(float(0.5), float(0.3), float(0.4), float(0.2)),
    y: vec4(float(0.7), float(0.6), float(0.5), float(0.6)),
  },
  ({ x, y }) => atan(x, y),
  [0.620249, 0.463648, 0.674741, 0.321751]
);
