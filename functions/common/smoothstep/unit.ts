import { float, vec2, vec3, vec4, smoothstep } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `smoothstep float float float less than lower`,
  {
    edge0: float(0.3),
    edge1: float(0.7),
    x: float(0.2),
  },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  0
);

floatScenario(
  `smoothstep float float float between`,
  { edge0: float(0.3), edge1: float(0.7), x: float(0.6) },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  0.84375
);

floatScenario(
  `smoothstep float float float greater than upper`,
  { edge0: float(0.3), edge1: float(0.7), x: float(0.8) },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  1
);

vec2Scenario(
  `smoothstep vec2 vec2 vec2 a`,
  {
    edge0: vec2(float(0.3), float(12.4)),
    edge1: vec2(float(0.7), float(20.1)),
    x: vec2(float(0.1), float(24.5)),
  },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  [0, 1]
);

vec2Scenario(
  `smoothstep vec2 vec2 vec2 b`,
  {
    edge0: vec2(float(0.3), float(12.4)),
    edge1: vec2(float(0.7), float(20.1)),
    x: vec2(float(0.9), float(15.2)),
  },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  [1, 0.3005259203606308]
);

vec2Scenario(
  `smoothstep vec2 vec2 vec2 c`,
  {
    edge0: vec2(float(0.3), float(12.4)),
    edge1: vec2(float(0.7), float(20.1)),
    x: vec2(float(0.6), float(11.2)),
  },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  [0.84375, 0]
);

vec2Scenario(
  `smoothstep float float vec2 a`,
  { edge0: float(0.3), edge1: float(0.7), x: vec2(float(0.9), float(0.4)) },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  [1, 0.15625000000000014]
);

vec2Scenario(
  `smoothstep float float vec2 b`,
  { edge0: float(0.3), edge1: float(0.7), x: vec2(float(0.2), float(0.9)) },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  [0, 1]
);

vec2Scenario(
  `smoothstep float float vec2 c`,
  { edge0: float(0.3), edge1: float(0.7), x: vec2(float(0.6), float(0.1)) },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  [0.84375, 0]
);

vec3Scenario(
  `smoothstep vec3 vec3 vec3 a`,
  {
    edge0: vec3(float(0.3), float(12.4), float(1.2)),
    edge1: vec3(float(0.7), float(20.1), float(8.9)),
    x: vec3(float(0.6), float(25.4), float(0.2)),
  },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  [0.84375, 1, 0]
);

vec3Scenario(
  `smoothstep vec3 vec3 vec3 b`,
  {
    edge0: vec3(float(0.3), float(12.4), float(1.2)),
    edge1: vec3(float(0.7), float(20.1), float(8.9)),
    x: vec3(float(0.2), float(15.2), float(10.4)),
  },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  [0, 0.3005259203606308, 1]
);

vec3Scenario(
  `smoothstep vec3 vec3 vec3 c`,
  {
    edge0: vec3(float(0.3), float(12.4), float(1.2)),
    edge1: vec3(float(0.7), float(20.1), float(8.9)),
    x: vec3(float(0.9), float(11.7), float(2.4)),
  },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  [1, 0, 0.06529210374715519]
);

vec3Scenario(
  `smoothstep float float vec3 a`,
  {
    edge0: float(0.3),
    edge1: float(0.7),
    x: vec3(float(0.9), float(0.4), float(1.2)),
  },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  [1, 0.15625000000000014, 1]
);

vec3Scenario(
  `smoothstep float float vec3 b`,
  {
    edge0: float(0.3),
    edge1: float(0.7),
    x: vec3(float(0.2), float(0.9), float(0.55)),
  },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  [0, 1, 0.6835937500000003]
);

vec3Scenario(
  `smoothstep float float vec3 c`,
  {
    edge0: float(0.3),
    edge1: float(0.7),
    x: vec3(float(0.6), float(0.1), float(0.2)),
  },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  [0.84375, 0, 0]
);

vec4Scenario(
  `smoothstep vec4 vec4 vec4 a`,
  {
    edge0: vec4(float(0.3), float(12.4), float(1.2), float(-45.3)),
    edge1: vec4(float(0.7), float(20.1), float(8.9), float(-33.2)),
    x: vec4(float(0.2), float(23.4), float(2.4), float(-31.6)),
  },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  [0, 1, 0.06529210374715519, 1]
);

vec4Scenario(
  `smoothstep vec4 vec4 vec4 b`,
  {
    edge0: vec4(float(0.3), float(12.4), float(1.2), float(-45.3)),
    edge1: vec4(float(0.7), float(20.1), float(8.9), float(-33.2)),
    x: vec4(float(0.9), float(11.2), float(0.5), float(-41.7)),
  },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  [1, 0, 0, 0.212883440084761]
);

vec4Scenario(
  `smoothstep vec4 vec4 vec4 c`,
  {
    edge0: vec4(float(0.3), float(12.4), float(1.2), float(-45.3)),
    edge1: vec4(float(0.7), float(20.1), float(8.9), float(-33.2)),
    x: vec4(float(0.6), float(15.2), float(9.2), float(-47.4)),
  },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  [0.84375, 0.3005259203606308, 1, 0]
);

vec4Scenario(
  `smoothstep float float vec4 a`,
  {
    edge0: float(0.3),
    edge1: float(0.7),
    x: vec4(float(0.9), float(0.4), float(1.2), float(1.1)),
  },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  [1, 0.15625000000000014, 1, 1]
);

vec4Scenario(
  `smoothstep float float vec4 b`,
  {
    edge0: float(0.3),
    edge1: float(0.7),
    x: vec4(float(0.2), float(0.9), float(0.55), float(0.1)),
  },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  [0, 1, 0.6835937500000003, 0]
);

vec4Scenario(
  `smoothstep float float vec4 c`,
  {
    edge0: float(0.3),
    edge1: float(0.7),
    x: vec4(float(0.6), float(0.1), float(0.2), float(0.35)),
  },
  ({ edge0, edge1, x }) => smoothstep(edge0, edge1, x),
  [0.84375, 0, 0, 0.04296874999999999]
);
