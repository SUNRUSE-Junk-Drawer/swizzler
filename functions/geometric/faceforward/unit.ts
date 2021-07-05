import { float, vec2, vec3, vec4, add, faceforward } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `faceforward float positive`,
  {
    n: float(0.16),
    i: float(-0.4),
    nRef: float(0.7),
  },
  ({ n, i, nRef }) => add(faceforward(n, i, nRef), float(0.5)),
  0.66
);

floatScenario(
  `faceforward float negative`,
  {
    n: float(0.16),
    i: float(0.4),
    nRef: float(0.7),
  },
  ({ n, i, nRef }) => add(faceforward(n, i, nRef), float(0.5)),
  0.34
);

vec2Scenario(
  `faceforward vec2 positive`,
  {
    n: vec2(float(0.16), float(-0.3)),
    i: vec2(float(-0.4), float(-0.5)),
    nRef: vec2(float(0.7), float(0.2)),
  },
  ({ n, i, nRef }) => add(faceforward(n, i, nRef), float(0.5)),
  [0.66, 0.2]
);

vec2Scenario(
  `faceforward vec2 negative`,
  {
    n: vec2(float(0.16), float(-0.3)),
    i: vec2(float(0.4), float(0.5)),
    nRef: vec2(float(0.7), float(0.2)),
  },
  ({ n, i, nRef }) => add(faceforward(n, i, nRef), float(0.5)),
  [0.34, 0.8]
);

vec3Scenario(
  `faceforward vec3 positive`,
  {
    n: vec3(float(0.16), float(-0.3), float(-0.2)),
    i: vec3(float(-0.4), float(-0.5), float(0.2)),
    nRef: vec3(float(0.7), float(0.2), float(0.3)),
  },
  ({ n, i, nRef }) => add(faceforward(n, i, nRef), float(0.5)),
  [0.66, 0.2, 0.3]
);

vec3Scenario(
  `faceforward vec3 negative`,
  {
    n: vec3(float(0.16), float(-0.3), float(-0.2)),
    i: vec3(float(0.4), float(0.5), float(-0.2)),
    nRef: vec3(float(0.7), float(0.2), float(0.3)),
  },
  ({ n, i, nRef }) => add(faceforward(n, i, nRef), float(0.5)),
  [0.34, 0.8, 0.7]
);

vec4Scenario(
  `faceforward vec4 positive`,
  {
    n: vec4(float(0.16), float(-0.3), float(-0.2), float(0.1)),
    i: vec4(float(-0.4), float(-0.5), float(0.2), float(-0.4)),
    nRef: vec4(float(0.7), float(0.2), float(0.3), float(0.7)),
  },
  ({ n, i, nRef }) => add(faceforward(n, i, nRef), float(0.5)),
  [0.66, 0.2, 0.3, 0.6]
);

vec4Scenario(
  `faceforward vec4 negative`,
  {
    n: vec4(float(0.16), float(-0.3), float(-0.2), float(0.1)),
    i: vec4(float(0.4), float(0.5), float(-0.2), float(0.4)),
    nRef: vec4(float(0.7), float(0.2), float(0.3), float(0.7)),
  },
  ({ n, i, nRef }) => add(faceforward(n, i, nRef), float(0.5)),
  [0.34, 0.8, 0.7, 0.4]
);
