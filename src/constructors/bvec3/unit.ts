import { bvec2, bvec3, bool } from "../..";
import { Scenario } from "../../scenario/unit";

export const bvec3Scenarios: ReadonlyArray<Scenario> = [
  ["bvec3 false", "bvec3", bvec3(bool(false)), [false, false, false]],
  ["bvec3 true", "bvec3", bvec3(bool(true)), [true, true, true]],
  [
    "bvec3 true false false ",
    "bvec3",
    bvec3(bool(true), bool(false), bool(false)),
    [true, false, false],
  ],
  [
    "bvec3 false true false",
    "bvec3",
    bvec3(bool(false), bool(true), bool(false)),
    [false, true, false],
  ],
  [
    "bvec3 false false true",
    "bvec3",
    bvec3(bool(false), bool(false), bool(true)),
    [false, false, true],
  ],
  [
    "bvec3 (true false) false",
    "bvec3",
    bvec3(bvec2(bool(true), bool(false)), bool(false)),
    [true, false, false],
  ],
  [
    "bvec3 (false true) false",
    "bvec3",
    bvec3(bvec2(bool(false), bool(true)), bool(false)),
    [false, true, false],
  ],
  [
    "bvec3 (false false) true",
    "bvec3",
    bvec3(bvec2(bool(false), bool(false)), bool(true)),
    [false, false, true],
  ],
  [
    "bvec3 true (false false)",
    "bvec3",
    bvec3(bool(true), bvec2(bool(false), bool(false))),
    [true, false, false],
  ],
  [
    "bvec3 false (true false)",
    "bvec3",
    bvec3(bool(false), bvec2(bool(true), bool(false))),
    [false, true, false],
  ],
  [
    "bvec3 false (false true)",
    "bvec3",
    bvec3(bool(false), bvec2(bool(false), bool(true))),
    [false, false, true],
  ],
];
