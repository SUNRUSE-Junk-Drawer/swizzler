import { float, vec2, vec3, vec4, divide } from "../..";
import { Scenario } from "../../scenario/unit";

export const divideScenarios: ReadonlyArray<Scenario> = [
  [
    "divide float float",
    divide(float(75 / 255), float(102 / 255)),
    [0.73529411764705882352941176470588],
  ],
  [
    "divide vec2 float",
    divide(vec2(float(75 / 255), float(89 / 255)), float(102 / 255)),
    [0.73529411764705882352941176470588, 0.87254901960784313725490196078431],
  ],
  [
    "divide vec3 float",
    divide(
      vec3(float(75 / 255), float(89 / 255), float(14 / 255)),
      float(102 / 255)
    ),
    [
      0.73529411764705882352941176470588,
      0.87254901960784313725490196078431,
      0.13725490196078431372549019607843,
    ],
  ],
  [
    "divide vec4 float",
    divide(
      vec4(float(75 / 255), float(89 / 255), float(14 / 255), float(55 / 255)),
      float(102 / 255)
    ),
    [
      0.73529411764705882352941176470588,
      0.87254901960784313725490196078431,
      0.13725490196078431372549019607843,
      0.53921568627450980392156862745098,
    ],
  ],
  [
    "divide float vec2",
    divide(float(33 / 255), vec2(float(75 / 255), float(89 / 255))),
    [0.44, 0.37078651685393258426966292134831],
  ],
  [
    "divide float vec3",
    divide(
      float(33 / 255),
      vec3(float(75 / 255), float(89 / 255), float(65 / 255))
    ),
    [
      0.44,
      0.37078651685393258426966292134831,
      0.50769230769230769230769230769231,
    ],
  ],
  [
    "divide float vec4",
    divide(
      float(33 / 255),
      vec4(float(75 / 255), float(89 / 255), float(65 / 255), float(55 / 255))
    ),
    [
      0.44,
      0.37078651685393258426966292134831,
      0.50769230769230769230769230769231,
      0.6,
    ],
  ],
  [
    "divide vec2 vec2",
    divide(
      vec2(float(75 / 255), float(31 / 255)),
      vec2(float(102 / 255), float(88 / 255))
    ),
    [0.73529411764705882352941176470588, 0.35227272727272727272727272727273],
  ],
  [
    "divide vec3 vec3",
    divide(
      vec3(float(75 / 255), float(31 / 255), float(14 / 255)),
      vec3(float(102 / 255), float(88 / 255), float(80 / 255))
    ),
    [
      0.73529411764705882352941176470588,
      0.35227272727272727272727272727273,
      0.175,
    ],
  ],
  [
    "divide vec3 vec3",
    divide(
      vec4(float(75 / 255), float(31 / 255), float(14 / 255), float(55 / 255)),
      vec4(float(102 / 255), float(88 / 255), float(80 / 255), float(99 / 255))
    ),
    [
      0.73529411764705882352941176470588,
      0.35227272727272727272727272727273,
      0.175,
      0.55555555555555555555555555555556,
    ],
  ],
];