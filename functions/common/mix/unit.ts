import { float, vec2, vec3, vec4, mix } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `mix float float float`,
  { x: float(0.4), y: float(0.9), a: float(0.7) },
  ({ x, y, a }) => mix(x, y, a),
  0.75
);

vec2Scenario(
  `mix vec2 vec2 vec2`,
  {
    x: vec2(float(0.4), float(0.1)),
    y: vec2(float(0.9), float(0.4)),
    a: vec2(float(0.7), float(0.25)),
  },
  ({ x, y, a }) => mix(x, y, a),
  [0.75, 0.175]
);

vec2Scenario(
  `mix vec2 vec2 float`,
  {
    x: vec2(float(0.4), float(0.1)),
    y: vec2(float(0.9), float(0.4)),
    a: float(0.7),
  },
  ({ x, y, a }) => mix(x, y, a),
  [0.75, 0.31]
);

vec3Scenario(
  `mix vec3 vec3 vec3`,
  {
    x: vec3(float(0.4), float(0.1), float(0.4)),
    y: vec3(float(0.9), float(0.4), float(0.6)),
    a: vec3(float(0.7), float(0.25), float(0.3)),
  },
  ({ x, y, a }) => mix(x, y, a),
  [0.75, 0.175, 0.46]
);

vec3Scenario(
  `mix vec3 vec3 float`,
  {
    x: vec3(float(0.4), float(0.1), float(0.4)),
    y: vec3(float(0.9), float(0.4), float(0.6)),
    a: float(0.7),
  },
  ({ x, y, a }) => mix(x, y, a),
  [0.75, 0.31, 0.54]
);

vec4Scenario(
  `mix vec4 vec4 vec4`,
  {
    x: vec4(float(0.4), float(0.1), float(0.4), float(0.8)),
    y: vec4(float(0.9), float(0.4), float(0.6), float(0.9)),
    a: vec4(float(0.7), float(0.25), float(0.3), float(0.5)),
  },
  ({ x, y, a }) => mix(x, y, a),
  [0.75, 0.175, 0.46, 0.85]
);

vec4Scenario(
  `mix vec4 vec4 float`,
  {
    x: vec4(float(0.4), float(0.1), float(0.4), float(0.8)),
    y: vec4(float(0.9), float(0.4), float(0.6), float(0.9)),
    a: float(0.7),
  },
  ({ x, y, a }) => mix(x, y, a),
  [0.75, 0.31, 0.54, 0.87]
);
