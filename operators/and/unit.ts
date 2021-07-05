import { bool, and } from "../..";
import { boolScenario } from "../../unit";

boolScenario(
  `and false false`,
  { a: bool(false), b: bool(false) },
  ({ a, b }) => and(a, b),
  false
);

boolScenario(
  `and false true`,
  { a: bool(false), b: bool(true) },
  ({ a, b }) => and(a, b),
  false
);

boolScenario(
  `and true false`,
  {
    a: bool(true),
    b: bool(false),
  },
  ({ a, b }) => and(a, b),
  false
);

boolScenario(
  `and true true`,
  { a: bool(true), b: bool(true) },
  ({ a, b }) => and(a, b),
  true
);
