import { bool, or } from "../..";
import { boolScenario } from "../../unit";

boolScenario(
  `or false false`,
  { a: bool(false), b: bool(false) },
  ({ a, b }) => or(a, b),
  false
);

boolScenario(
  `or false true`,
  { a: bool(false), b: bool(true) },
  ({ a, b }) => or(a, b),
  true
);

boolScenario(
  `or true false`,
  { a: bool(true), b: bool(false) },
  ({ a, b }) => or(a, b),
  true
);

boolScenario(
  `or true true`,
  { a: bool(true), b: bool(true) },
  ({ a, b }) => or(a, b),
  true
);
