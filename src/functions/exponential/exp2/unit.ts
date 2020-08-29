import { float, vec2, vec3, vec4, exp2 } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario("exp2 float", exp2(float(-0.5)), 0.70710678118);

vec2Scenario("exp2 vec2", exp2(vec2(float(-0.5), float(-0.3))), [
  0.70710678118,
  0.81225239635,
]);

vec3Scenario("exp2 vec3", exp2(vec3(float(-0.5), float(-0.3), float(-0.9))), [
  0.70710678118,
  0.81225239635,
  0.53588673126,
]);

vec4Scenario(
  "exp2 vec4",
  exp2(vec4(float(-0.5), float(-0.3), float(-0.9), float(-0.7))),
  [0.70710678118, 0.81225239635, 0.53588673126, 0.61557220667]
);
