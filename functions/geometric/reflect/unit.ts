import { float, vec2, vec3, vec4, add, multiply, reflect } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `reflect float positive`,
  { i: float(0.3), n: float(-1) },
  ({ i, n }) => add(multiply(reflect(i, n), float(0.5)), float(0.5)),
  0.35
);

floatScenario(
  `reflect float negative`,
  { i: float(-0.3), n: float(1) },
  ({ i, n }) => add(multiply(reflect(i, n), float(0.5)), float(0.5)),
  0.65
);

vec2Scenario(
  `reflect vec2`,
  {
    i: vec2(float(0.3), float(-0.7)),
    n: vec2(float(-0.8574929), float(0.51449573)),
  },
  ({ i, n }) => add(multiply(reflect(i, n), float(0.5)), float(0.5)),
  [0.12058821, 0.46764705]
);

vec3Scenario(
  `reflect vec3`,
  {
    i: vec3(float(0.3), float(-0.7), float(0.8)),
    n: vec3(float(-0.43919685), float(0.26351812), float(-0.85887384)),
  },
  ({ i, n }) => add(multiply(reflect(i, n), float(0.5)), float(0.5)),
  [0.20934466, 0.41439322, 0.03827402]
);

vec4Scenario(
  `reflect vec4`,
  {
    i: vec4(float(0.3), float(-0.7), float(0.8), float(-0.2)),
    n: vec4(
      float(-0.520379),
      float(0.3122274),
      float(0.7863505),
      float(-0.11563978)
    ),
  },
  ({ i, n }) => add(multiply(reflect(i, n), float(0.5)), float(0.5)),
  [0.794, 0.0633458199207576, 0.681759839679662, 0.4320941413868353]
);
