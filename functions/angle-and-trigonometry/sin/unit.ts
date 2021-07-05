import { float, vec2, vec3, vec4, sin } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `sin float`,
  { angle: float(0.9) },
  ({ angle }) => sin(angle),
  0.7833269096274834
);

vec2Scenario(
  `sin vec2`,
  { angle: vec2(float(0.9), float(0.6)) },
  ({ angle }) => sin(angle),
  [0.7833269096274834, 0.5646424733950354]
);

vec3Scenario(
  `sin vec3`,
  { angle: vec3(float(0.9), float(0.6), float(0.8)) },
  ({ angle }) => sin(angle),
  [0.7833269096274834, 0.5646424733950354, 0.7173560908995228]
);

vec4Scenario(
  `sin vec4`,
  { angle: vec4(float(0.9), float(0.6), float(0.8), float(0.1)) },
  ({ angle }) => sin(angle),
  [
    0.7833269096274834,
    0.5646424733950354,
    0.7173560908995228,
    0.09983341664682815,
  ]
);
