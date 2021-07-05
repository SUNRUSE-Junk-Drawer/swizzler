import { float, vec2, vec3, vec4, degrees } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `degrees float`,
  { radians: float(0.015) },
  ({ radians }) => degrees(radians),
  0.859
);

vec2Scenario(
  `degrees vec2`,
  { radians: vec2(float(0.015), float(0.011)) },
  ({ radians }) => degrees(radians),
  [0.859, 0.63]
);

vec3Scenario(
  `degrees vec3`,
  { radians: vec3(float(0.015), float(0.011), float(0.017)) },
  ({ radians }) => degrees(radians),
  [0.859, 0.63, 0.974]
);

vec4Scenario(
  `degrees vec4`,
  { radians: vec4(float(0.015), float(0.011), float(0.017), float(0.014)) },
  ({ radians }) => degrees(radians),
  [0.859, 0.63, 0.974, 0.802]
);
