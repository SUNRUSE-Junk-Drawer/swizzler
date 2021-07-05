import { bool, bvec2, bvec3, bvec4, not } from "../..";
import {
  boolScenario,
  bvec2Scenario,
  bvec3Scenario,
  bvec4Scenario,
} from "../../unit";

boolScenario(`not false`, { a: bool(false) }, ({ a }) => not(a), true);

boolScenario(`not true`, { a: bool(true) }, ({ a }) => not(a), false);

bvec2Scenario(
  `not bvec2`,
  { a: bvec2(bool(false), bool(true)) },
  ({ a }) => not(a),
  [true, false]
);

bvec3Scenario(
  `not bvec3`,
  { a: bvec3(bool(false), bool(true), bool(true)) },
  ({ a }) => not(a),
  [true, false, false]
);

bvec4Scenario(
  `not bvec4`,
  { a: bvec4(bool(false), bool(true), bool(true), bool(false)) },
  ({ a }) => not(a),
  [true, false, false, true]
);
