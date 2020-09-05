import { float, vec2, vec3, vec4, radians } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario("radians float", radians(float(0.859)), 0.015);

vec2Scenario("radians vec2", radians(vec2(float(0.859), float(0.63))), [
  0.015,
  0.011,
]);

vec3Scenario(
  "radians vec3",
  radians(vec3(float(0.859), float(0.63), float(0.974))),
  [0.015, 0.011, 0.017]
);

vec4Scenario(
  "radians vec4",
  radians(vec4(float(0.859), float(0.63), float(0.974), float(0.802))),
  [0.015, 0.011, 0.017, 0.014]
);