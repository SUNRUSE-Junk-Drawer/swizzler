import { float, vec2, vec3, vec4, clamp } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `clamp float less than minimum`,
  {
    x: float(0.4),
    minVal: float(0.5),
    maxVal: float(0.7),
  },
  ({ x, minVal, maxVal }) => clamp(x, minVal, maxVal),
  0.5
);

floatScenario(
  `clamp float at minimum`,
  { x: float(0.5), minVal: float(0.5), maxVal: float(0.7) },
  ({ x, minVal, maxVal }) => clamp(x, minVal, maxVal),
  0.5
);

floatScenario(
  `clamp float between minimum and maximum`,
  { x: float(0.6), minVal: float(0.5), maxVal: float(0.7) },
  ({ x, minVal, maxVal }) => clamp(x, minVal, maxVal),
  0.6
);

floatScenario(
  `clamp float at maximum`,
  { x: float(0.7), minVal: float(0.5), maxVal: float(0.7) },
  ({ x, minVal, maxVal }) => clamp(x, minVal, maxVal),
  0.7
);

floatScenario(
  `clamp float greater than maximum`,
  { x: float(0.8), minVal: float(0.5), maxVal: float(0.7) },
  ({ x, minVal, maxVal }) => clamp(x, minVal, maxVal),
  0.7
);

vec2Scenario(
  `clamp vec2 vec2 vec2 a`,
  {
    x: vec2(float(0.3), float(0.2)),
    minVal: vec2(float(0.4), float(0.2)),
    maxVal: vec2(float(0.7), float(0.5)),
  },
  ({ x, minVal, maxVal }) => clamp(x, minVal, maxVal),
  [0.4, 0.2]
);

vec2Scenario(
  `clamp vec2 vec2 vec2 b`,
  {
    x: vec2(float(0.5), float(0.6)),
    minVal: vec2(float(0.4), float(0.9)),
    maxVal: vec2(float(0.7), float(0.9)),
  },
  ({ x, minVal, maxVal }) => clamp(x, minVal, maxVal),
  [0.5, 0.9]
);

vec2Scenario(
  `clamp vec2 vec2 vec2 c`,
  {
    x: vec2(float(0.8), float(0.2)),
    minVal: vec2(float(0.4), float(0.2)),
    maxVal: vec2(float(0.7), float(0.5)),
  },
  ({ x, minVal, maxVal }) => clamp(x, minVal, maxVal),
  [0.7, 0.2]
);

vec2Scenario(
  `clamp vec2 float float a`,
  {
    x: vec2(float(0.4), float(0.5)),
    minVal: float(0.5),
    maxVal: float(0.7),
  },
  ({ x, minVal, maxVal }) => clamp(x, minVal, maxVal),
  [0.5, 0.5]
);

vec2Scenario(
  `clamp vec2 float float b`,
  {
    x: vec2(float(0.6), float(0.7)),
    minVal: float(0.5),
    maxVal: float(0.7),
  },
  ({ x, minVal, maxVal }) => clamp(x, minVal, maxVal),
  [0.6, 0.7]
);

vec2Scenario(
  `clamp vec2 float float c`,
  {
    x: vec2(float(0.8), float(0.5)),
    minVal: float(0.5),
    maxVal: float(0.7),
  },
  ({ x, minVal, maxVal }) => clamp(x, minVal, maxVal),
  [0.7, 0.5]
);

vec3Scenario(
  `clamp vec3 vec3 vec3 a`,
  {
    x: vec3(float(0.3), float(0.2), float(0.8)),
    minVal: vec3(float(0.4), float(0.2), float(0.7)),
    maxVal: vec3(float(0.7), float(0.5), float(0.9)),
  },
  ({ x, minVal, maxVal }) => clamp(x, minVal, maxVal),
  [0.4, 0.2, 0.8]
);

vec3Scenario(
  `clamp vec3 vec3 vec3 b`,
  {
    x: vec3(float(0.7), float(0.6), float(0.8)),
    minVal: vec3(float(0.4), float(0.2), float(0.7)),
    maxVal: vec3(float(0.7), float(0.5), float(0.9)),
  },
  ({ x, minVal, maxVal }) => clamp(x, minVal, maxVal),
  [0.7, 0.5, 0.8]
);

vec3Scenario(
  `clamp vec3 float float a`,
  {
    x: vec3(float(0.3), float(0.4), float(0.5)),
    minVal: float(0.4),
    maxVal: float(0.7),
  },
  ({ x, minVal, maxVal }) => clamp(x, minVal, maxVal),
  [0.4, 0.4, 0.5]
);

vec3Scenario(
  `clamp vec3 float float b`,
  {
    x: vec3(float(0.7), float(0.8), float(0.5)),
    minVal: float(0.4),
    maxVal: float(0.7),
  },
  ({ x, minVal, maxVal }) => clamp(x, minVal, maxVal),
  [0.7, 0.7, 0.5]
);

vec4Scenario(
  `clamp vec4 vec4 vec4 a`,
  {
    x: vec4(float(0.3), float(0.2), float(0.8), float(0.3)),
    minVal: vec4(float(0.4), float(0.2), float(0.7), float(0.1)),
    maxVal: vec4(float(0.7), float(0.5), float(0.9), float(0.3)),
  },
  ({ x, minVal, maxVal }) => clamp(x, minVal, maxVal),
  [0.4, 0.2, 0.8, 0.3]
);

vec4Scenario(
  `clamp vec4 vec4 vec4 b`,
  {
    x: vec4(float(0.8), float(0.2), float(0.8), float(0.3)),
    minVal: vec4(float(0.4), float(0.2), float(0.7), float(0.1)),
    maxVal: vec4(float(0.7), float(0.5), float(0.9), float(0.3)),
  },
  ({ x, minVal, maxVal }) => clamp(x, minVal, maxVal),
  [0.7, 0.2, 0.8, 0.3]
);

vec4Scenario(
  `clamp vec4 float float a`,
  {
    x: vec4(float(0.3), float(0.4), float(0.5), float(0.7)),
    minVal: float(0.4),
    maxVal: float(0.7),
  },
  ({ x, minVal, maxVal }) => clamp(x, minVal, maxVal),
  [0.4, 0.4, 0.5, 0.7]
);

vec4Scenario(
  `clamp vec4 float float b`,
  {
    x: vec4(float(0.8), float(0.2), float(0.8), float(0.3)),
    minVal: float(0.4),
    maxVal: float(0.7),
  },
  ({ x, minVal, maxVal }) => clamp(x, minVal, maxVal),
  [0.7, 0.4, 0.7, 0.4]
);
