import { float, mat2, mat3, mat4, getColumn } from "..";
import { vec2Scenario, vec3Scenario, vec4Scenario } from "../unit";

vec2Scenario(
  `getColumn mat2 0`,
  { matrix: mat2(float(0.65), float(0.21), float(0.97), float(0.46)) },
  ({ matrix }) => getColumn(matrix, 0),
  [0.65, 0.21]
);

vec2Scenario(
  `getColumn mat2 1`,
  { matrix: mat2(float(0.65), float(0.21), float(0.97), float(0.46)) },
  ({ matrix }) => getColumn(matrix, 1),
  [0.97, 0.46]
);

vec3Scenario(
  `getColumn mat3 0`,
  {
    matrix: mat3(
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
  ({ matrix }) => getColumn(matrix, 0),
  [0.65, 0.21, 0.97]
);

vec3Scenario(
  `getColumn mat3 1`,
  {
    matrix: mat3(
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
  ({ matrix }) => getColumn(matrix, 1),
  [0.46, 0.31, 0.61]
);

vec3Scenario(
  `getColumn mat3 2`,
  {
    matrix: mat3(
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
  ({ matrix }) => getColumn(matrix, 2),
  [0.14, 0.33, 0.89]
);

vec4Scenario(
  `getColumn mat4 0`,
  {
    matrix: mat4(
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
  ({ matrix }) => getColumn(matrix, 0),
  [0.65, 0.21, 0.97, 0.46]
);

vec4Scenario(
  `getColumn mat4 1`,
  {
    matrix: mat4(
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
  ({ matrix }) => getColumn(matrix, 1),
  [0.31, 0.61, 0.14, 0.33]
);

vec4Scenario(
  `getColumn mat4 2`,
  {
    matrix: mat4(
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
  ({ matrix }) => getColumn(matrix, 2),
  [0.89, 0.72, 0.41, 0.56]
);

vec4Scenario(
  `getColumn mat4 3`,
  {
    matrix: mat4(
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
  ({ matrix }) => getColumn(matrix, 3),
  [0.91, 0.18, 0.37, 0.52]
);
