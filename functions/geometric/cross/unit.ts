import { float, vec3, add, cross } from "../../..";
import { vec3Scenario } from "../../../unit";

vec3Scenario(
  `cross`,
  {
    x: vec3(float(0.17647), float(0.5098), float(0.94117)),
    y: vec3(float(0.058823), float(0.87058), float(0.18431)),
  },
  ({ x, y }) => add(cross(x, y), float(0.75)),
  [0.024597, 0.7728373, 0.873643]
);
