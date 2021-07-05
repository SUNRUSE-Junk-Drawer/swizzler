import { bool, xor } from "../..";
import { boolScenario } from "../../unit";

boolScenario(
  `xor false false`,
  { a: bool(false), b: bool(false) },
  ({ a, b }) => xor(a, b),
  false
);

boolScenario(
  `xor false true`,
  { a: bool(false), b: bool(true) },
  ({ a, b }) => xor(a, b),
  true
);

boolScenario(
  `xor true false`,
  { a: bool(true), b: bool(false) },
  ({ a, b }) => xor(a, b),
  true
);

boolScenario(
  `xor true true`,
  {
    a: bool(true),
    b: bool(true),
  },
  ({ a, b }) => xor(a, b),
  false
);
