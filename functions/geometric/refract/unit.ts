import { float, vec2, vec3, vec4, add, multiply, refract } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `refract float positive negative`,
  {
    n: float(1),
    i: float(-1),
    eta: float(0.9),
  },
  ({ n, i, eta }) => add(multiply(refract(n, i, eta), float(0.25)), float(0.5)),
  0.75
);

floatScenario(
  `refract float positive positive`,
  {
    n: float(1),
    i: float(1),
    eta: float(0.9),
  },
  ({ n, i, eta }) => add(multiply(refract(n, i, eta), float(0.25)), float(0.5)),
  0.25
);

floatScenario(
  `refract float negative positive`,
  {
    n: float(-1),
    i: float(1),
    eta: float(0.9),
  },
  ({ n, i, eta }) => add(multiply(refract(n, i, eta), float(0.25)), float(0.5)),
  0.25
);

floatScenario(
  `refract float negative negative`,
  {
    n: float(-1),
    i: float(-1),
    eta: float(0.9),
  },
  ({ n, i, eta }) => add(multiply(refract(n, i, eta), float(0.25)), float(0.5)),
  0.75
);
vec2Scenario(
  `refract vec2`,
  {
    n: vec2(float(0.39391932), float(-0.91914505)),
    i: vec2(float(-0.8574929), float(0.51449573)),
    eta: float(0.9),
  },
  ({ n, i, eta }) => add(multiply(refract(n, i, eta), float(0.5)), float(0.5)),
  [0.7288377126933174, 0.05544031688546075]
);

vec3Scenario(
  `refract vec3`,
  {
    n: vec3(float(0.27160725), float(-0.63375026), float(0.724286)),
    i: vec3(float(-0.43919685), float(0.26351812), float(-0.85887384)),
    eta: float(0.9),
  },
  ({ n, i, eta }) => add(multiply(refract(n, i, eta), float(0.5)), float(0.5)),
  [0.646147400295624, 0.2004578997779009, 0.8727136805781092]
);

vec4Scenario(
  `refract vec4`,
  {
    n: vec4(
      float(0.26726127),
      float(-0.62360954),
      float(0.7126967),
      float(-0.17817417)
    ),
    i: vec4(
      float(-0.520379),
      float(0.3122274),
      float(0.7863505),
      float(-0.11563978)
    ),
    eta: float(0.9),
  },
  ({ n, i, eta }) => add(multiply(refract(n, i, eta), float(0.5)), float(0.5)),
  [
    0.8055037322291012,
    0.10823401056253928,
    0.5408010903875367,
    0.46098521556416455,
  ]
);
