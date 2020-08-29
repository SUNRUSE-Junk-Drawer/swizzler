import { float, vec2, vec3, vec4, log } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario("log float", log(float(1.3)), 0.262364);

vec2Scenario("log vec2", log(vec2(float(1.3), float(1.1))), [
  0.262364,
  0.0953102,
]);

vec3Scenario("log vec3", log(vec3(float(1.3), float(1.1), float(1.8))), [
  0.262364,
  0.0953102,
  0.587787,
]);

vec4Scenario(
  "log vec4",
  log(vec4(float(1.3), float(1.1), float(1.8), float(1.4))),
  [0.262364, 0.0953102, 0.587787, 0.336472]
);
