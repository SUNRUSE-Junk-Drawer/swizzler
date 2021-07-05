import { float, vec2, vec3, vec4, distance } from "../../..";
import { floatScenario } from "../../../unit";

floatScenario(
  `distance float lesser greater`,
  { p0: float(0.2941176470588235), p1: float(0.4235294117647059) },
  ({ p0, p1 }) => distance(p0, p1),
  0.1294117647058824
);

floatScenario(
  `distance float greater lesser`,
  { p0: float(0.4235294117647059), p1: float(0.2941176470588235) },
  ({ p0, p1 }) => distance(p0, p1),
  0.1294117647058824
);

floatScenario(
  `distance vec2`,
  {
    p0: vec2(float(0.4235294117647059), float(0.9411764705882353)),
    p1: vec2(float(0.2941176470588235), float(0.1294117647058824)),
  },
  ({ p0, p1 }) => distance(p0, p1),
  0.822015
);

floatScenario(
  `distance vec3`,
  {
    p0: vec3(
      float(0.4235294117647059),
      float(0.9411764705882353),
      float(0.2156862745098039)
    ),
    p1: vec3(
      float(0.2941176470588235),
      float(0.1294117647058824),
      float(0.1568627450980392)
    ),
  },
  ({ p0, p1 }) => distance(p0, p1),
  0.824117
);

floatScenario(
  `distance vec4`,
  {
    p0: vec4(
      float(0.4235294117647059),
      float(0.9411764705882353),
      float(0.2156862745098039),
      float(0.2627450980392157)
    ),
    p1: vec4(
      float(0.2941176470588235),
      float(0.1294117647058824),
      float(0.1568627450980392),
      float(0.3137254901960784)
    ),
  },
  ({ p0, p1 }) => distance(p0, p1),
  0.825693
);
