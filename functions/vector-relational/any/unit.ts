import { bool, bvec2, bvec3, bvec4, any } from "../../..";
import { boolScenario } from "../../../unit";

boolScenario(`any false`, { a: bool(false) }, ({ a }) => any(a), false);

boolScenario(`any true`, { a: bool(true) }, ({ a }) => any(a), true);

boolScenario(
  `any false false`,
  { a: bvec2(bool(false), bool(false)) },
  ({ a }) => any(a),
  false
);

boolScenario(
  `any true false`,
  { a: bvec2(bool(true), bool(false)) },
  ({ a }) => any(a),
  true
);

boolScenario(
  `any false true`,
  { a: bvec2(bool(false), bool(true)) },
  ({ a }) => any(a),
  true
);

boolScenario(
  `any false false false`,
  { a: bvec3(bool(false), bool(false), bool(false)) },
  ({ a }) => any(a),
  false
);

boolScenario(
  `any true false false`,
  { a: bvec3(bool(true), bool(false), bool(false)) },
  ({ a }) => any(a),
  true
);

boolScenario(
  `any false true false`,
  { a: bvec3(bool(false), bool(true), bool(false)) },
  ({ a }) => any(a),
  true
);

boolScenario(
  `any false false true`,
  { a: bvec3(bool(false), bool(false), bool(true)) },
  ({ a }) => any(a),
  true
);

boolScenario(
  `any false false false false`,
  { a: bvec4(bool(false), bool(false), bool(false), bool(false)) },
  ({ a }) => any(a),
  false
);

boolScenario(
  `any true false false false`,
  { a: bvec4(bool(true), bool(false), bool(false), bool(false)) },
  ({ a }) => any(a),
  true
);

boolScenario(
  `any false true false false`,
  { a: bvec4(bool(false), bool(true), bool(false), bool(false)) },
  ({ a }) => any(a),
  true
);

boolScenario(
  `any false false true false`,
  { a: bvec4(bool(false), bool(false), bool(true), bool(false)) },
  ({ a }) => any(a),
  true
);

boolScenario(
  `any false false false true`,
  { a: bvec4(bool(false), bool(false), bool(false), bool(true)) },
  ({ a }) => any(a),
  true
);
