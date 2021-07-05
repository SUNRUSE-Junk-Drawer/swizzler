import { bool, bvec2, bvec3, bvec4, all } from "../../..";
import { boolScenario } from "../../../unit";

boolScenario(`all true`, { a: bool(true) }, ({ a }) => all(a), true);

boolScenario(`all false`, { a: bool(false) }, ({ a }) => all(a), false);

boolScenario(
  `all true true`,
  { a: bvec2(bool(true), bool(true)) },
  ({ a }) => all(a),
  true
);

boolScenario(
  `all false true`,
  { a: bvec2(bool(false), bool(true)) },
  ({ a }) => all(a),
  false
);

boolScenario(
  `all true false`,
  { a: bvec2(bool(true), bool(false)) },
  ({ a }) => all(a),
  false
);

boolScenario(
  `all true true true`,
  { a: bvec3(bool(true), bool(true), bool(true)) },
  ({ a }) => all(a),
  true
);

boolScenario(
  `all false true true`,
  { a: bvec3(bool(false), bool(true), bool(true)) },
  ({ a }) => all(a),
  false
);

boolScenario(
  `all true false true`,
  { a: bvec3(bool(true), bool(false), bool(true)) },
  ({ a }) => all(a),
  false
);

boolScenario(
  `all true true false`,
  { a: bvec3(bool(true), bool(true), bool(false)) },
  ({ a }) => all(a),
  false
);

boolScenario(
  `all true true true true`,
  { a: bvec4(bool(true), bool(true), bool(true), bool(true)) },
  ({ a }) => all(a),
  true
);

boolScenario(
  `all false true true true`,
  { a: bvec4(bool(false), bool(true), bool(true), bool(true)) },
  ({ a }) => all(a),
  false
);

boolScenario(
  `all true false true true`,
  { a: bvec4(bool(true), bool(false), bool(true), bool(true)) },
  ({ a }) => all(a),
  false
);

boolScenario(
  `all true true false true`,
  { a: bvec4(bool(true), bool(true), bool(false), bool(true)) },
  ({ a }) => all(a),
  false
);

boolScenario(
  `all true true true false`,
  { a: bvec4(bool(true), bool(true), bool(true), bool(false)) },
  ({ a }) => all(a),
  false
);
