import {
  bool,
  bvec2,
  bvec3,
  bvec4,
  float,
  vec2,
  vec3,
  vec4,
  mat2,
  mat3,
  mat4,
  int,
  ivec2,
  ivec3,
  ivec4,
  conditional,
} from "../..";
import {
  boolScenario,
  bvec2Scenario,
  bvec3Scenario,
  bvec4Scenario,
  floatScenario,
  vec2Scenario,
  vec3Scenario,
  vec4Scenario,
  mat2Scenario,
  mat3Scenario,
  mat4Scenario,
  intScenario,
  ivec2Scenario,
  ivec3Scenario,
  ivec4Scenario,
} from "../../unit";

floatScenario(
  `conditional false float float`,
  {
    a: bool(false),
    b: float(0.1882352941176471),
    c: float(0.2980392156862745),
  },
  ({ a, b, c }) => conditional(a, b, c),
  0.2980392156862745
);

floatScenario(
  `conditional true float float`,
  {
    a: bool(true),
    b: float(0.1882352941176471),
    c: float(0.2980392156862745),
  },
  ({ a, b, c }) => conditional(a, b, c),
  0.1882352941176471
);

vec2Scenario(
  `conditional false vec2 vec2`,
  {
    a: bool(false),
    b: vec2(float(0.1882352941176471), float(0.4117647058823529)),
    c: vec2(float(0.5803921568627451), float(0.2980392156862745)),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [0.5803921568627451, 0.2980392156862745]
);

vec2Scenario(
  `conditional true vec2 vec2`,
  {
    a: bool(true),
    b: vec2(float(0.1882352941176471), float(0.4117647058823529)),
    c: vec2(float(0.5803921568627451), float(0.2980392156862745)),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [0.1882352941176471, 0.4117647058823529]
);

vec3Scenario(
  `conditional false vec3 vec3`,
  {
    a: bool(false),
    b: vec3(
      float(0.1882352941176471),
      float(0.4117647058823529),
      float(0.9411764705882353)
    ),
    c: vec3(
      float(0.5803921568627451),
      float(0.2980392156862745),
      float(0.0196078431372549)
    ),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [0.5803921568627451, 0.2980392156862745, 0.0196078431372549]
);

vec3Scenario(
  `conditional true vec3 vec3`,
  {
    a: bool(true),
    b: vec3(
      float(0.1882352941176471),
      float(0.4117647058823529),
      float(0.9411764705882353)
    ),
    c: vec3(
      float(0.5803921568627451),
      float(0.2980392156862745),
      float(0.0196078431372549)
    ),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [0.1882352941176471, 0.4117647058823529, 0.9411764705882353]
);

vec4Scenario(
  `conditional false vec4 vec4`,
  {
    a: bool(false),
    b: vec4(
      float(0.1882352941176471),
      float(0.4117647058823529),
      float(0.9411764705882353),
      float(0.5098039215686275)
    ),
    c: vec4(
      float(0.5803921568627451),
      float(0.2980392156862745),
      float(0.0196078431372549),
      float(0.7333333333333333)
    ),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [
    0.5803921568627451,
    0.2980392156862745,
    0.0196078431372549,
    0.7333333333333333,
  ]
);

vec4Scenario(
  `conditional true vec4 vec4`,
  {
    a: bool(true),
    b: vec4(
      float(0.1882352941176471),
      float(0.4117647058823529),
      float(0.9411764705882353),
      float(0.5098039215686275)
    ),
    c: vec4(
      float(0.5803921568627451),
      float(0.2980392156862745),
      float(0.0196078431372549),
      float(0.7333333333333333)
    ),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [
    0.1882352941176471,
    0.4117647058823529,
    0.9411764705882353,
    0.5098039215686275,
  ]
);

mat2Scenario(
  `conditional false mat2 mat2`,
  {
    a: bool(false),
    b: mat2(
      float(0.1882352941176471),
      float(0.4117647058823529),
      float(0.9411764705882353),
      float(0.5098039215686275)
    ),
    c: mat2(
      float(0.5803921568627451),
      float(0.2980392156862745),
      float(0.0196078431372549),
      float(0.7333333333333333)
    ),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [
    0.5803921568627451,
    0.2980392156862745,
    0.0196078431372549,
    0.7333333333333333,
  ]
);

mat2Scenario(
  `conditional true mat2 mat2`,
  {
    a: bool(true),
    b: mat2(
      float(0.1882352941176471),
      float(0.4117647058823529),
      float(0.9411764705882353),
      float(0.5098039215686275)
    ),
    c: mat2(
      float(0.5803921568627451),
      float(0.2980392156862745),
      float(0.0196078431372549),
      float(0.7333333333333333)
    ),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [
    0.1882352941176471,
    0.4117647058823529,
    0.9411764705882353,
    0.5098039215686275,
  ]
);

mat3Scenario(
  `conditional false mat3 mat3`,
  {
    a: bool(false),
    b: mat3(
      float(0.61),
      float(0.02),
      float(0.72),
      float(0.06),
      float(0.86),
      float(0.37),
      float(0.4),
      float(0.3),
      float(0.29)
    ),
    c: mat3(
      float(0.65),
      float(0.21),
      float(0.97),
      float(0.46),
      float(0.31),
      float(0.61),
      float(0.14),
      float(0.33),
      float(0.89)
    ),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat3Scenario(
  `conditional true mat3 mat3`,
  {
    a: bool(true),
    b: mat3(
      float(0.65),
      float(0.21),
      float(0.97),
      float(0.46),
      float(0.31),
      float(0.61),
      float(0.14),
      float(0.33),
      float(0.89)
    ),
    c: mat3(
      float(0.61),
      float(0.02),
      float(0.72),
      float(0.06),
      float(0.86),
      float(0.37),
      float(0.4),
      float(0.3),
      float(0.29)
    ),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [0.65, 0.21, 0.97, 0.46, 0.31, 0.61, 0.14, 0.33, 0.89]
);

mat4Scenario(
  `conditional false mat4 mat4`,
  {
    a: bool(false),
    b: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
    c: mat4(
      float(0.65),
      float(0.21),
      float(0.97),
      float(0.46),
      float(0.31),
      float(0.61),
      float(0.14),
      float(0.33),
      float(0.89),
      float(0.72),
      float(0.41),
      float(0.56),
      float(0.91),
      float(0.18),
      float(0.37),
      float(0.52)
    ),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [
    0.65,
    0.21,
    0.97,
    0.46,
    0.31,
    0.61,
    0.14,
    0.33,
    0.89,
    0.72,
    0.41,
    0.56,
    0.91,
    0.18,
    0.37,
    0.52,
  ]
);

mat4Scenario(
  `conditional true mat4 mat4`,
  {
    a: bool(true),
    b: mat4(
      float(0.65),
      float(0.21),
      float(0.97),
      float(0.46),
      float(0.31),
      float(0.61),
      float(0.14),
      float(0.33),
      float(0.89),
      float(0.72),
      float(0.41),
      float(0.56),
      float(0.91),
      float(0.18),
      float(0.37),
      float(0.52)
    ),
    c: mat4(
      float(0.45),
      float(0.91),
      float(0.01),
      float(0.42),
      float(0.96),
      float(0.83),
      float(0.46),
      float(0.06),
      float(0.09),
      float(0.19),
      float(0.28),
      float(0.43),
      float(0.63),
      float(0.37),
      float(0.75),
      float(0.93)
    ),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [
    0.65,
    0.21,
    0.97,
    0.46,
    0.31,
    0.61,
    0.14,
    0.33,
    0.89,
    0.72,
    0.41,
    0.56,
    0.91,
    0.18,
    0.37,
    0.52,
  ]
);

intScenario(
  `conditional false int int`,
  {
    a: bool(false),
    b: int(72),
    c: int(172),
  },
  ({ a, b, c }) => conditional(a, b, c),
  172
);

intScenario(
  `conditional true int int`,
  {
    a: bool(true),
    b: int(72),
    c: int(172),
  },
  ({ a, b, c }) => conditional(a, b, c),
  72
);

ivec2Scenario(
  `conditional false ivec2 ivec2`,
  {
    a: bool(false),
    b: ivec2(int(72), int(201)),
    c: ivec2(int(172), int(242)),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [172, 242]
);

ivec2Scenario(
  `conditional true ivec2 ivec2`,
  {
    a: bool(true),
    b: ivec2(int(72), int(201)),
    c: ivec2(int(172), int(242)),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [72, 201]
);

ivec3Scenario(
  `conditional false ivec3 ivec3`,
  {
    a: bool(false),
    b: ivec3(int(72), int(201), int(154)),
    c: ivec3(int(172), int(242), int(37)),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [172, 242, 37]
);

ivec3Scenario(
  `conditional true ivec3 ivec3`,
  {
    a: bool(true),
    b: ivec3(int(72), int(201), int(154)),
    c: ivec3(int(172), int(242), int(37)),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [72, 201, 154]
);

ivec4Scenario(
  `conditional false ivec4 ivec4`,
  {
    a: bool(false),
    b: ivec4(int(72), int(201), int(154), int(68)),
    c: ivec4(int(172), int(242), int(37), int(45)),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [172, 242, 37, 45]
);

ivec4Scenario(
  `conditional true ivec4 ivec4`,
  {
    a: bool(true),
    b: ivec4(int(72), int(201), int(154), int(68)),
    c: ivec4(int(172), int(242), int(37), int(45)),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [72, 201, 154, 68]
);

boolScenario(
  `conditional false false false`,
  {
    a: bool(false),
    b: bool(false),
    c: bool(false),
  },
  ({ a, b, c }) => conditional(a, b, c),
  false
);

boolScenario(
  `conditional false false true`,
  {
    a: bool(false),
    b: bool(false),
    c: bool(true),
  },
  ({ a, b, c }) => conditional(a, b, c),
  true
);

boolScenario(
  `conditional false true false`,
  {
    a: bool(false),
    b: bool(true),
    c: bool(false),
  },
  ({ a, b, c }) => conditional(a, b, c),
  false
);

boolScenario(
  `conditional false true true`,
  {
    a: bool(false),
    b: bool(true),
    c: bool(true),
  },
  ({ a, b, c }) => conditional(a, b, c),
  true
);

boolScenario(
  `conditional true false false`,
  {
    a: bool(true),
    b: bool(false),
    c: bool(false),
  },
  ({ a, b, c }) => conditional(a, b, c),
  false
);

boolScenario(
  `conditional true false true`,
  {
    a: bool(true),
    b: bool(false),
    c: bool(true),
  },
  ({ a, b, c }) => conditional(a, b, c),
  false
);

boolScenario(
  `conditional true true false`,
  {
    a: bool(true),
    b: bool(true),
    c: bool(false),
  },
  ({ a, b, c }) => conditional(a, b, c),
  true
);

boolScenario(
  `conditional true true true`,
  {
    a: bool(true),
    b: bool(true),
    c: bool(true),
  },
  ({ a, b, c }) => conditional(a, b, c),
  true
);

bvec2Scenario(
  `conditional false bvec2 bvec2`,
  {
    a: bool(false),
    b: bvec2(bool(true), bool(false)),
    c: bvec2(bool(false), bool(true)),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [false, true]
);

bvec2Scenario(
  `conditional true bvec2 bvec2`,
  {
    a: bool(true),
    b: bvec2(bool(true), bool(false)),
    c: bvec2(bool(false), bool(true)),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [true, false]
);

bvec3Scenario(
  `conditional false bvec3 bvec3`,
  {
    a: bool(false),
    b: bvec3(bool(true), bool(true), bool(false)),
    c: bvec3(bool(false), bool(true), bool(false)),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [false, true, false]
);

bvec3Scenario(
  `conditional true bvec3 bvec3`,
  {
    a: bool(true),
    b: bvec3(bool(true), bool(true), bool(false)),
    c: bvec3(bool(false), bool(true), bool(false)),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [true, true, false]
);

bvec4Scenario(
  `conditional false bvec4 bvec4`,
  {
    a: bool(false),
    b: bvec4(bool(true), bool(true), bool(false), bool(true)),
    c: bvec4(bool(false), bool(true), bool(false), bool(true)),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [false, true, false, true]
);

bvec4Scenario(
  `conditional true bvec4 bvec4`,
  {
    a: bool(true),
    b: bvec4(bool(true), bool(true), bool(false), bool(true)),
    c: bvec4(bool(false), bool(true), bool(false), bool(true)),
  },
  ({ a, b, c }) => conditional(a, b, c),
  [true, true, false, true]
);
