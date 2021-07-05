export type FloatPrimitive = `float`;
export type Vec2Primitive = `vec2`;
export type Vec3Primitive = `vec3`;
export type Vec4Primitive = `vec4`;
export type AnyNonMatFloatPrimitive =
  | FloatPrimitive
  | Vec2Primitive
  | Vec3Primitive
  | Vec4Primitive;
export type Mat2Primitive = `mat2`;
export type Mat3Primitive = `mat3`;
export type Mat4Primitive = `mat4`;
export type AnyMatPrimitive = Mat2Primitive | Mat3Primitive | Mat4Primitive;
export type AnyFloatPrimitive = AnyNonMatFloatPrimitive | AnyMatPrimitive;

export type IntPrimitive = `int`;
export type Ivec2Primitive = `ivec2`;
export type Ivec3Primitive = `ivec3`;
export type Ivec4Primitive = `ivec4`;
export type AnyIntPrimitive =
  | IntPrimitive
  | Ivec2Primitive
  | Ivec3Primitive
  | Ivec4Primitive;

export type BoolPrimitive = `bool`;
export type Bvec2Primitive = `bvec2`;
export type Bvec3Primitive = `bvec3`;
export type Bvec4Primitive = `bvec4`;
export type AnyBoolPrimitive =
  | BoolPrimitive
  | Bvec2Primitive
  | Bvec3Primitive
  | Bvec4Primitive;

export type AnyCastablePrimitive =
  | FloatPrimitive
  | Vec2Primitive
  | Vec3Primitive
  | Vec4Primitive
  | Mat2Primitive
  | AnyIntPrimitive
  | AnyBoolPrimitive;

export type AnyNumericPrimitive = AnyFloatPrimitive | AnyIntPrimitive;

export type AnyPrimitive = AnyNumericPrimitive | AnyBoolPrimitive;

export type BasePrimitive = FloatPrimitive | IntPrimitive | BoolPrimitive;
export const basePrimitives: ReadonlyArray<BasePrimitive> = [
  `float`,
  `int`,
  `bool`,
];

export const primitiveBases: {
  readonly [primitive in AnyPrimitive]: BasePrimitive;
} = {
  float: `float`,
  vec2: `float`,
  vec3: `float`,
  vec4: `float`,
  mat2: `float`,
  mat3: `float`,
  mat4: `float`,
  int: `int`,
  ivec2: `int`,
  ivec3: `int`,
  ivec4: `int`,
  bool: `bool`,
  bvec2: `bool`,
  bvec3: `bool`,
  bvec4: `bool`,
};

export type PairPrimitive = Vec2Primitive | Ivec2Primitive | Bvec2Primitive;
export const pairPrimitives: ReadonlyArray<PairPrimitive> = [
  `vec2`,
  `ivec2`,
  `bvec2`,
];

export const primitivePairs: {
  readonly [primitive in AnyPrimitive]: PairPrimitive;
} = {
  float: `vec2`,
  vec2: `vec2`,
  vec3: `vec2`,
  vec4: `vec2`,
  mat2: `vec2`,
  mat3: `vec2`,
  mat4: `vec2`,
  int: `ivec2`,
  ivec2: `ivec2`,
  ivec3: `ivec2`,
  ivec4: `ivec2`,
  bool: `bvec2`,
  bvec2: `bvec2`,
  bvec3: `bvec2`,
  bvec4: `bvec2`,
};

export type TripletPrimitive = Vec3Primitive | Ivec3Primitive | Bvec3Primitive;
export const tripletPrimitives: ReadonlyArray<TripletPrimitive> = [
  `vec3`,
  `ivec3`,
  `bvec3`,
];

export const primitiveTriplets: {
  readonly [primitive in AnyPrimitive]: TripletPrimitive;
} = {
  float: `vec3`,
  vec2: `vec3`,
  vec3: `vec3`,
  vec4: `vec3`,
  mat2: `vec3`,
  mat3: `vec3`,
  mat4: `vec3`,
  int: `ivec3`,
  ivec2: `ivec3`,
  ivec3: `ivec3`,
  ivec4: `ivec3`,
  bool: `bvec3`,
  bvec2: `bvec3`,
  bvec3: `bvec3`,
  bvec4: `bvec3`,
};

export type QuartetPrimitive = Vec4Primitive | Ivec4Primitive | Bvec4Primitive;
export const quartetPrimitives: ReadonlyArray<QuartetPrimitive> = [
  `vec4`,
  `ivec4`,
  `bvec4`,
];

export const primitiveQuartets: {
  readonly [primitive in AnyPrimitive]: QuartetPrimitive;
} = {
  float: `vec4`,
  vec2: `vec4`,
  vec3: `vec4`,
  vec4: `vec4`,
  mat2: `vec4`,
  mat3: `vec4`,
  mat4: `vec4`,
  int: `ivec4`,
  ivec2: `ivec4`,
  ivec3: `ivec4`,
  ivec4: `ivec4`,
  bool: `bvec4`,
  bvec2: `bvec4`,
  bvec3: `bvec4`,
  bvec4: `bvec4`,
};

export type PrimitiveArities = {
  readonly float: 1;
  readonly vec2: 2;
  readonly vec3: 3;
  readonly vec4: 4;
  readonly mat2: 4;
  readonly mat3: 9;
  readonly mat4: 16;
  readonly int: 1;
  readonly ivec2: 2;
  readonly ivec3: 3;
  readonly ivec4: 4;
  readonly bool: 1;
  readonly bvec2: 2;
  readonly bvec3: 3;
  readonly bvec4: 4;
};

export const primitiveArities: PrimitiveArities = {
  float: 1,
  vec2: 2,
  vec3: 3,
  vec4: 4,
  mat2: 4,
  mat3: 9,
  mat4: 16,
  int: 1,
  ivec2: 2,
  ivec3: 3,
  ivec4: 4,
  bool: 1,
  bvec2: 2,
  bvec3: 3,
  bvec4: 4,
};

export type CastToFloat = {
  readonly float: `float`;
  readonly vec2: `vec2`;
  readonly vec3: `vec3`;
  readonly vec4: `vec4`;
  readonly mat2: `vec4`;
  readonly int: `float`;
  readonly ivec2: `vec2`;
  readonly ivec3: `vec3`;
  readonly ivec4: `vec4`;
  readonly bool: `float`;
  readonly bvec2: `vec2`;
  readonly bvec3: `vec3`;
  readonly bvec4: `vec4`;
};

export const castToFloat: CastToFloat = {
  float: `float`,
  vec2: `vec2`,
  vec3: `vec3`,
  vec4: `vec4`,
  mat2: `vec4`,
  int: `float`,
  ivec2: `vec2`,
  ivec3: `vec3`,
  ivec4: `vec4`,
  bool: `float`,
  bvec2: `vec2`,
  bvec3: `vec3`,
  bvec4: `vec4`,
};

export type CastToInt = {
  readonly float: `int`;
  readonly vec2: `ivec2`;
  readonly vec3: `ivec3`;
  readonly vec4: `ivec4`;
  readonly mat2: `ivec4`;
  readonly int: `int`;
  readonly ivec2: `ivec2`;
  readonly ivec3: `ivec3`;
  readonly ivec4: `ivec4`;
  readonly bool: `int`;
  readonly bvec2: `ivec2`;
  readonly bvec3: `ivec3`;
  readonly bvec4: `ivec4`;
};

export const castToInt: CastToInt = {
  float: `int`,
  vec2: `ivec2`,
  vec3: `ivec3`,
  vec4: `ivec4`,
  mat2: `ivec4`,
  int: `int`,
  ivec2: `ivec2`,
  ivec3: `ivec3`,
  ivec4: `ivec4`,
  bool: `int`,
  bvec2: `ivec2`,
  bvec3: `ivec3`,
  bvec4: `ivec4`,
};

export type CastToBoolean = {
  readonly float: `bool`;
  readonly vec2: `bvec2`;
  readonly vec3: `bvec3`;
  readonly vec4: `bvec4`;
  readonly mat2: `bvec4`;
  readonly int: `bool`;
  readonly ivec2: `bvec2`;
  readonly ivec3: `bvec3`;
  readonly ivec4: `bvec4`;
  readonly bool: `bool`;
  readonly bvec2: `bvec2`;
  readonly bvec3: `bvec3`;
  readonly bvec4: `bvec4`;
};

export const castToBoolean: CastToBoolean = {
  float: `bool`,
  vec2: `bvec2`,
  vec3: `bvec3`,
  vec4: `bvec4`,
  mat2: `bvec4`,
  int: `bool`,
  ivec2: `bvec2`,
  ivec3: `bvec3`,
  ivec4: `bvec4`,
  bool: `bool`,
  bvec2: `bvec2`,
  bvec3: `bvec3`,
  bvec4: `bvec4`,
};

export function combinationOfPrimitives<TPrimitive extends AnyPrimitive>(
  ...primitives: ReadonlyArray<TPrimitive>
): TPrimitive {
  const castBasePrimitives: ReadonlyArray<AnyPrimitive> = basePrimitives;

  let output = primitives[0];

  for (const primitive of primitives) {
    if (!castBasePrimitives.includes(primitive)) {
      output = primitive;
    }
  }

  return output;
}
