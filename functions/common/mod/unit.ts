import { float, vec2, vec3, vec4, add, multiply, mod } from "../../..";
import {
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
} from "../../../unit";

floatScenario(
  `mod float float less than second negative repeat`,
  { x: float(-6.5), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  0.8875
);

floatScenario(
  `mod float float equal to second negative repeat`,
  { x: float(-6.4), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  0.5
);

floatScenario(
  `mod float float greater than second negative repeat`,
  { x: float(-6.3), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  0.5125
);

floatScenario(
  `mod float float less than first negative repeat`,
  { x: float(-3.3), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  0.8875
);

floatScenario(
  `mod float float equal to first negative repeat`,
  { x: float(-3.2), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  0.5
);

floatScenario(
  `mod float float greater than first negative repeat`,
  { x: float(-3.1), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  0.5125
);

floatScenario(
  `mod float float less than zero`,
  { x: float(-0.1), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  0.8875
);

floatScenario(
  `mod float float zero`,
  { x: float(0), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  0.5
);

floatScenario(
  `mod float float greater than zero`,
  { x: float(0.1), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  0.5125
);

floatScenario(
  `mod float float less than first positive repeat`,
  { x: float(3.1), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  0.8875
);

floatScenario(
  `mod float float equal to first positive repeat`,
  { x: float(3.2), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  0.5
);

floatScenario(
  `mod float float greater than first positive repeat`,
  { x: float(3.3), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  0.5125
);

floatScenario(
  `mod float float less than second positive repeat`,
  { x: float(6.3), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  0.8875
);

floatScenario(
  `mod float float equal to second positive repeat`,
  { x: float(6.4), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  0.5
);

floatScenario(
  `mod float float greater than second positive repeat`,
  { x: float(6.5), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  0.5125
);

vec2Scenario(
  `mod vec2 vec2 a`,
  { x: vec2(float(-6.5), float(1.6)), y: vec2(float(3.2), float(0.8)) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5]
);

vec2Scenario(
  `mod vec2 vec2 b`,
  { x: vec2(float(-6.3), float(-0.9)), y: vec2(float(3.2), float(0.8)) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.5125, 0.5875]
);

vec2Scenario(
  `mod vec2 vec2 c`,
  { x: vec2(float(-3.2), float(-0.7)), y: vec2(float(3.2), float(0.8)) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.5, 0.5125]
);

vec2Scenario(
  `mod vec2 vec2 d`,
  { x: vec2(float(-0.1), float(0)), y: vec2(float(3.2), float(0.8)) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5]
);

vec2Scenario(
  `mod vec2 vec2 e`,
  { x: vec2(float(0.1), float(0.7)), y: vec2(float(3.2), float(0.8)) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.5125, 0.5875]
);

vec2Scenario(
  `mod vec2 vec2 f`,
  { x: vec2(float(3.2), float(1.7)), y: vec2(float(3.2), float(0.8)) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.5, 0.5125]
);

vec2Scenario(
  `mod vec2 vec2 g`,
  { x: vec2(float(6.3), float(1.6)), y: vec2(float(3.2), float(0.8)) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5]
);

vec2Scenario(
  `mod vec2 vec2 h`,
  { x: vec2(float(6.5), float(2.3)), y: vec2(float(3.2), float(0.8)) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.5125, 0.5875]
);

vec2Scenario(
  `mod vec2 float a`,
  { x: vec2(float(-6.5), float(-6.4)), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5]
);

vec2Scenario(
  `mod vec2 float b`,
  { x: vec2(float(-6.3), float(-3.3)), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.5125, 0.8875]
);

vec2Scenario(
  `mod vec2 float c`,
  { x: vec2(float(-3.2), float(-3.1)), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.5, 0.5125]
);

vec2Scenario(
  `mod vec2 float d`,
  { x: vec2(float(-0.1), float(0)), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5]
);

vec2Scenario(
  `mod vec2 float e`,
  { x: vec2(float(0.1), float(3.1)), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.5125, 0.8875]
);

vec2Scenario(
  `mod vec2 float f`,
  { x: vec2(float(3.2), float(3.3)), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.5, 0.5125]
);

vec2Scenario(
  `mod vec2 float g`,
  { x: vec2(float(6.3), float(6.4)), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5]
);

vec2Scenario(
  `mod vec2 float h`,
  { x: vec2(float(6.5), float(9.5)), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.5125, 0.8875]
);

vec3Scenario(
  `mod vec3 vec3 a`,
  {
    x: vec3(float(-6.5), float(-1.6), float(-2.7)),
    y: vec3(float(3.2), float(0.8), float(1.4)),
  },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5, 0.5125]
);

vec3Scenario(
  `mod vec3 vec3 b`,
  {
    x: vec3(float(-3.3), float(-1.6), float(-1.3)),
    y: vec3(float(3.2), float(0.8), float(1.4)),
  },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5, 0.5125]
);

vec3Scenario(
  `mod vec3 vec3 c`,
  {
    x: vec3(float(-0.1), float(0), float(0.1)),
    y: vec3(float(3.2), float(0.8), float(1.4)),
  },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5, 0.5125]
);

vec3Scenario(
  `mod vec3 vec3 d`,
  {
    x: vec3(float(3.1), float(0.7), float(1.5)),
    y: vec3(float(3.2), float(0.8), float(1.4)),
  },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5875, 0.5125]
);

vec3Scenario(
  `mod vec3 vec3 e`,
  {
    x: vec3(float(6.3), float(1.6), float(2.9)),
    y: vec3(float(3.2), float(0.8), float(1.4)),
  },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5, 0.5125]
);

vec3Scenario(
  `mod vec3 float a`,
  { x: vec3(float(-6.5), float(-6.4), float(-6.3)), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5, 0.5125]
);

vec3Scenario(
  `mod vec3 float b`,
  { x: vec3(float(-3.3), float(-3.2), float(-3.1)), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5, 0.5125]
);

vec3Scenario(
  `mod vec3 float c`,
  { x: vec3(float(-0.1), float(0), float(0.1)), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5, 0.5125]
);

vec3Scenario(
  `mod vec3 float d`,
  { x: vec3(float(3.1), float(3.2), float(3.3)), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5, 0.5125]
);

vec3Scenario(
  `mod vec3 float e`,
  { x: vec3(float(6.3), float(6.4), float(6.5)), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5, 0.5125]
);

vec4Scenario(
  `mod vec4 vec4 a`,
  {
    x: vec4(float(-6.5), float(-1.6), float(-2.7), float(-2.2)),
    y: vec4(float(3.2), float(0.8), float(1.4), float(2.1)),
  },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5, 0.5125, 0.75]
);

vec4Scenario(
  `mod vec4 vec4 b`,
  {
    x: vec4(float(-3.2), float(-0.7), float(-0.1), float(0)),
    y: vec4(float(3.2), float(0.8), float(1.4), float(2.1)),
  },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.5, 0.5125, 0.6625, 0.5]
);

vec4Scenario(
  `mod vec4 vec4 c`,
  {
    x: vec4(float(0.1), float(0.7), float(1.4), float(2)),
    y: vec4(float(3.2), float(0.8), float(1.4), float(2.1)),
  },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.5125, 0.5875, 0.5, 0.75]
);

vec4Scenario(
  `mod vec4 vec4 d`,
  {
    x: vec4(float(6.3), float(1.6), float(2.9), float(4.1)),
    y: vec4(float(3.2), float(0.8), float(1.4), float(2.1)),
  },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5, 0.5125, 0.75]
);

vec4Scenario(
  `mod vec4 float a`,
  {
    x: vec4(float(-6.5), float(-6.4), float(-6.3), float(-3.3)),
    y: float(3.2),
  },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5, 0.5125, 0.8875]
);

vec4Scenario(
  `mod vec4 float b`,
  { x: vec4(float(-3.2), float(-3.1), float(-0.1), float(0)), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.5, 0.5125, 0.8875, 0.5]
);

vec4Scenario(
  `mod vec4 float c`,
  { x: vec4(float(0.1), float(3.1), float(3.2), float(3.3)), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.5125, 0.8875, 0.5, 0.5125]
);

vec4Scenario(
  `mod vec4 float d`,
  { x: vec4(float(6.3), float(6.4), float(6.5), float(9.5)), y: float(3.2) },
  ({ x, y }) => add(multiply(mod(x, y), float(0.125)), float(0.5)),
  [0.8875, 0.5, 0.5125, 0.8875]
);
