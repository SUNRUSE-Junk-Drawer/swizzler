import { float, vec2, vec3, vec4, radians } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `radians float`,
  { degrees: float(0.859) },
  ({ degrees }) => radians(degrees),
  0.015
);

vec2Scenario(
  `radians vec2`,
  { degrees: vec2(float(0.859), float(0.63)) },
  ({ degrees }) => radians(degrees),
  [0.015, 0.011]
);

vec3Scenario(
  `radians vec3`,
  { degrees: vec3(float(0.859), float(0.63), float(0.974)) },
  ({ degrees }) => radians(degrees),
  [0.015, 0.011, 0.017]
);

vec4Scenario(
  `radians vec4`,
  { degrees: vec4(float(0.859), float(0.63), float(0.974), float(0.802)) },
  ({ degrees }) => radians(degrees),
  [0.015, 0.011, 0.017, 0.014]
);
