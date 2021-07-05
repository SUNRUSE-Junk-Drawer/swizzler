import { SwizzleImplementation } from "../implementations/swizzle-implementation";
import { PropertyImplementation } from "../implementations/property-implementation";
import { Expression } from "../expression";
import {
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
  Vec4Primitive,
  IntPrimitive,
  Ivec2Primitive,
  Ivec3Primitive,
  Ivec4Primitive,
  BoolPrimitive,
  Bvec2Primitive,
  Bvec3Primitive,
  Bvec4Primitive,
  primitiveBases,
  BasePrimitive,
  primitivePairs,
  PairPrimitive,
  TripletPrimitive,
  primitiveTriplets,
  QuartetPrimitive,
  primitiveQuartets,
} from "../primitive";

const letters = [`x`, `y`, `z`, `w`];

interface Callback12 {
  (a: Expression<Vec2Primitive | Vec3Primitive | Vec4Primitive>): Expression<
    FloatPrimitive
  >;
  (a: Expression<Ivec2Primitive | Ivec3Primitive | Ivec4Primitive>): Expression<
    IntPrimitive
  >;
  (a: Expression<Bvec2Primitive | Bvec3Primitive | Bvec4Primitive>): Expression<
    BoolPrimitive
  >;
}

function makeSwizzle12(indexA: 0 | 1): Callback12 {
  const output = (
    a: Expression<
      | Vec2Primitive
      | Vec3Primitive
      | Vec4Primitive
      | Bvec2Primitive
      | Bvec3Primitive
      | Bvec4Primitive
    >
  ): Expression<BasePrimitive> => {
    return new Expression(
      new SwizzleImplementation(primitiveBases[a.primitive], a.javascript, [
        indexA,
      ]),
      new PropertyImplementation(
        primitiveBases[a.primitive],
        a.glsl,
        letters[indexA]
      )
    );
  };

  return output as Callback12;
}

interface Callback13 {
  (a: Expression<Vec3Primitive | Vec4Primitive>): Expression<FloatPrimitive>;
  (a: Expression<Ivec3Primitive | Ivec4Primitive>): Expression<IntPrimitive>;
  (a: Expression<Bvec3Primitive | Bvec4Primitive>): Expression<BoolPrimitive>;
}

function makeSwizzle13(indexA: 0 | 1 | 2): Callback13 {
  const output = (
    a: Expression<
      Vec3Primitive | Vec4Primitive | Bvec3Primitive | Bvec4Primitive
    >
  ): Expression<BasePrimitive> => {
    return new Expression(
      new SwizzleImplementation(primitiveBases[a.primitive], a.javascript, [
        indexA,
      ]),
      new PropertyImplementation(
        primitiveBases[a.primitive],
        a.glsl,
        letters[indexA]
      )
    );
  };

  return output as Callback13;
}

interface Callback14 {
  (a: Expression<Vec4Primitive>): Expression<FloatPrimitive>;
  (a: Expression<Ivec4Primitive>): Expression<IntPrimitive>;
  (a: Expression<Bvec4Primitive>): Expression<BoolPrimitive>;
}

function makeSwizzle14(indexA: 0 | 1 | 2 | 3): Callback14 {
  const output = (
    a: Expression<
      Vec3Primitive | Vec4Primitive | Bvec3Primitive | Bvec4Primitive
    >
  ): Expression<BasePrimitive> => {
    return new Expression(
      new SwizzleImplementation(primitiveBases[a.primitive], a.javascript, [
        indexA,
      ]),
      new PropertyImplementation(
        primitiveBases[a.primitive],
        a.glsl,
        letters[indexA]
      )
    );
  };

  return output as Callback14;
}

interface Callback22 {
  (a: Expression<Vec2Primitive | Vec3Primitive | Vec4Primitive>): Expression<
    Vec2Primitive
  >;
  (a: Expression<Ivec2Primitive | Ivec3Primitive | Ivec4Primitive>): Expression<
    Ivec2Primitive
  >;
  (a: Expression<Bvec2Primitive | Bvec3Primitive | Bvec4Primitive>): Expression<
    Bvec2Primitive
  >;
}

function makeSwizzle22(indexA: 0 | 1, indexB: 0 | 1): Callback22 {
  const output = (
    a: Expression<
      | Vec2Primitive
      | Vec3Primitive
      | Vec4Primitive
      | Bvec2Primitive
      | Bvec3Primitive
      | Bvec4Primitive
    >
  ): Expression<PairPrimitive> => {
    return new Expression(
      new SwizzleImplementation(primitivePairs[a.primitive], a.javascript, [
        indexA,
        indexB,
      ]),
      new PropertyImplementation(
        primitivePairs[a.primitive],
        a.glsl,
        `${letters[indexA]}${letters[indexB]}`
      )
    );
  };

  return output as Callback22;
}

interface Callback23 {
  (a: Expression<Vec3Primitive | Vec4Primitive>): Expression<Vec2Primitive>;
  (a: Expression<Ivec3Primitive | Ivec4Primitive>): Expression<Ivec2Primitive>;
  (a: Expression<Bvec3Primitive | Bvec4Primitive>): Expression<Bvec2Primitive>;
}

function makeSwizzle23(indexA: 0 | 1 | 2, indexB: 0 | 1 | 2): Callback23 {
  const output = (
    a: Expression<
      Vec3Primitive | Vec4Primitive | Bvec3Primitive | Bvec4Primitive
    >
  ): Expression<PairPrimitive> => {
    return new Expression(
      new SwizzleImplementation(primitivePairs[a.primitive], a.javascript, [
        indexA,
        indexB,
      ]),
      new PropertyImplementation(
        primitivePairs[a.primitive],
        a.glsl,
        `${letters[indexA]}${letters[indexB]}`
      )
    );
  };

  return output as Callback23;
}

interface Callback24 {
  (a: Expression<Vec4Primitive>): Expression<Vec2Primitive>;
  (a: Expression<Ivec4Primitive>): Expression<Ivec2Primitive>;
  (a: Expression<Bvec4Primitive>): Expression<Bvec2Primitive>;
}

function makeSwizzle24(
  indexA: 0 | 1 | 2 | 3,
  indexB: 0 | 1 | 2 | 3
): Callback24 {
  const output = (
    a: Expression<Vec4Primitive | Bvec4Primitive>
  ): Expression<PairPrimitive> => {
    return new Expression(
      new SwizzleImplementation(primitivePairs[a.primitive], a.javascript, [
        indexA,
        indexB,
      ]),
      new PropertyImplementation(
        primitivePairs[a.primitive],
        a.glsl,
        `${letters[indexA]}${letters[indexB]}`
      )
    );
  };

  return output as Callback24;
}

interface Callback32 {
  (a: Expression<Vec2Primitive | Vec3Primitive | Vec4Primitive>): Expression<
    Vec3Primitive
  >;
  (a: Expression<Ivec2Primitive | Ivec3Primitive | Ivec4Primitive>): Expression<
    Ivec3Primitive
  >;
  (a: Expression<Bvec2Primitive | Bvec3Primitive | Bvec4Primitive>): Expression<
    Bvec3Primitive
  >;
}

function makeSwizzle32(
  indexA: 0 | 1,
  indexB: 0 | 1,
  indexC: 0 | 1
): Callback32 {
  const output = (
    a: Expression<
      | Vec2Primitive
      | Vec3Primitive
      | Vec4Primitive
      | Bvec2Primitive
      | Bvec3Primitive
      | Bvec4Primitive
    >
  ): Expression<TripletPrimitive> => {
    return new Expression(
      new SwizzleImplementation(primitiveTriplets[a.primitive], a.javascript, [
        indexA,
        indexB,
        indexC,
      ]),
      new PropertyImplementation(
        primitiveTriplets[a.primitive],
        a.glsl,
        `${letters[indexA]}${letters[indexB]}${letters[indexC]}`
      )
    );
  };

  return output as Callback32;
}

interface Callback33 {
  (a: Expression<Vec3Primitive | Vec4Primitive>): Expression<Vec3Primitive>;
  (a: Expression<Ivec3Primitive | Ivec4Primitive>): Expression<Ivec3Primitive>;
  (a: Expression<Bvec3Primitive | Bvec4Primitive>): Expression<Bvec3Primitive>;
}

function makeSwizzle33(
  indexA: 0 | 1 | 2,
  indexB: 0 | 1 | 2,
  indexC: 0 | 1 | 2
): Callback33 {
  const output = (
    a: Expression<
      Vec3Primitive | Vec4Primitive | Bvec3Primitive | Bvec4Primitive
    >
  ): Expression<TripletPrimitive> => {
    return new Expression(
      new SwizzleImplementation(primitiveTriplets[a.primitive], a.javascript, [
        indexA,
        indexB,
        indexC,
      ]),
      new PropertyImplementation(
        primitiveTriplets[a.primitive],
        a.glsl,
        `${letters[indexA]}${letters[indexB]}${letters[indexC]}`
      )
    );
  };

  return output as Callback33;
}

interface Callback34 {
  (a: Expression<Vec4Primitive>): Expression<Vec3Primitive>;
  (a: Expression<Ivec4Primitive>): Expression<Ivec3Primitive>;
  (a: Expression<Bvec4Primitive>): Expression<Bvec3Primitive>;
}

function makeSwizzle34(
  indexA: 0 | 1 | 2 | 3,
  indexB: 0 | 1 | 2 | 3,
  indexC: 0 | 1 | 2 | 3
): Callback34 {
  const output = (
    a: Expression<Vec4Primitive | Bvec4Primitive>
  ): Expression<TripletPrimitive> => {
    return new Expression(
      new SwizzleImplementation(primitiveTriplets[a.primitive], a.javascript, [
        indexA,
        indexB,
        indexC,
      ]),
      new PropertyImplementation(
        primitiveTriplets[a.primitive],
        a.glsl,
        `${letters[indexA]}${letters[indexB]}${letters[indexC]}`
      )
    );
  };

  return output as Callback34;
}

interface Callback42 {
  (a: Expression<Vec2Primitive | Vec3Primitive | Vec4Primitive>): Expression<
    Vec4Primitive
  >;
  (a: Expression<Ivec2Primitive | Ivec3Primitive | Ivec4Primitive>): Expression<
    Ivec4Primitive
  >;
  (a: Expression<Bvec2Primitive | Bvec3Primitive | Bvec4Primitive>): Expression<
    Bvec4Primitive
  >;
}

function makeSwizzle42(
  indexA: 0 | 1,
  indexB: 0 | 1,
  indexC: 0 | 1,
  indexD: 0 | 1
): Callback42 {
  const output = (
    a: Expression<
      | Vec2Primitive
      | Vec3Primitive
      | Vec4Primitive
      | Bvec2Primitive
      | Bvec3Primitive
      | Bvec4Primitive
    >
  ): Expression<QuartetPrimitive> => {
    return new Expression(
      new SwizzleImplementation(primitiveQuartets[a.primitive], a.javascript, [
        indexA,
        indexB,
        indexC,
        indexD,
      ]),
      new PropertyImplementation(
        primitiveQuartets[a.primitive],
        a.glsl,
        `${letters[indexA]}${letters[indexB]}${letters[indexC]}${letters[indexD]}`
      )
    );
  };

  return output as Callback42;
}

interface Callback43 {
  (a: Expression<Vec3Primitive | Vec4Primitive>): Expression<Vec4Primitive>;
  (a: Expression<Ivec3Primitive | Ivec4Primitive>): Expression<Ivec4Primitive>;
  (a: Expression<Bvec3Primitive | Bvec4Primitive>): Expression<Bvec4Primitive>;
}

function makeSwizzle43(
  indexA: 0 | 1 | 2,
  indexB: 0 | 1 | 2,
  indexC: 0 | 1 | 2,
  indexD: 0 | 1 | 2
): Callback43 {
  const output = (
    a: Expression<
      Vec3Primitive | Vec4Primitive | Bvec3Primitive | Bvec4Primitive
    >
  ): Expression<QuartetPrimitive> => {
    return new Expression(
      new SwizzleImplementation(primitiveQuartets[a.primitive], a.javascript, [
        indexA,
        indexB,
        indexC,
        indexD,
      ]),
      new PropertyImplementation(
        primitiveQuartets[a.primitive],
        a.glsl,
        `${letters[indexA]}${letters[indexB]}${letters[indexC]}${letters[indexD]}`
      )
    );
  };

  return output as Callback43;
}

interface Callback44 {
  (a: Expression<Vec4Primitive>): Expression<Vec4Primitive>;
  (a: Expression<Ivec4Primitive>): Expression<Ivec4Primitive>;
  (a: Expression<Bvec4Primitive>): Expression<Bvec4Primitive>;
}

function makeSwizzle44(
  indexA: 0 | 1 | 2 | 3,
  indexB: 0 | 1 | 2 | 3,
  indexC: 0 | 1 | 2 | 3,
  indexD: 0 | 1 | 2 | 3
): Callback44 {
  const output = (
    a: Expression<Vec4Primitive | Bvec4Primitive>
  ): Expression<QuartetPrimitive> => {
    return new Expression(
      new SwizzleImplementation(primitiveQuartets[a.primitive], a.javascript, [
        indexA,
        indexB,
        indexC,
        indexD,
      ]),
      new PropertyImplementation(
        primitiveQuartets[a.primitive],
        a.glsl,
        `${letters[indexA]}${letters[indexB]}${letters[indexC]}${letters[indexD]}`
      )
    );
  };

  return output as Callback44;
}

export const x = makeSwizzle12(0);
export const y = makeSwizzle12(1);
export const z = makeSwizzle13(2);
export const w = makeSwizzle14(3);
export const xx = makeSwizzle22(0, 0);
export const xy = makeSwizzle22(0, 1);
export const xz = makeSwizzle23(0, 2);
export const xw = makeSwizzle24(0, 3);
export const yx = makeSwizzle22(1, 0);
export const yy = makeSwizzle22(1, 1);
export const yz = makeSwizzle23(1, 2);
export const yw = makeSwizzle24(1, 3);
export const zx = makeSwizzle23(2, 0);
export const zy = makeSwizzle23(2, 1);
export const zz = makeSwizzle23(2, 2);
export const zw = makeSwizzle24(2, 3);
export const wx = makeSwizzle24(3, 0);
export const wy = makeSwizzle24(3, 1);
export const wz = makeSwizzle24(3, 2);
export const ww = makeSwizzle24(3, 3);
export const xxx = makeSwizzle32(0, 0, 0);
export const xxy = makeSwizzle32(0, 0, 1);
export const xxz = makeSwizzle33(0, 0, 2);
export const xxw = makeSwizzle34(0, 0, 3);
export const xyx = makeSwizzle32(0, 1, 0);
export const xyy = makeSwizzle32(0, 1, 1);
export const xyz = makeSwizzle33(0, 1, 2);
export const xyw = makeSwizzle34(0, 1, 3);
export const xzx = makeSwizzle33(0, 2, 0);
export const xzy = makeSwizzle33(0, 2, 1);
export const xzz = makeSwizzle33(0, 2, 2);
export const xzw = makeSwizzle34(0, 2, 3);
export const xwx = makeSwizzle34(0, 3, 0);
export const xwy = makeSwizzle34(0, 3, 1);
export const xwz = makeSwizzle34(0, 3, 2);
export const xww = makeSwizzle34(0, 3, 3);
export const yxx = makeSwizzle32(1, 0, 0);
export const yxy = makeSwizzle32(1, 0, 1);
export const yxz = makeSwizzle33(1, 0, 2);
export const yxw = makeSwizzle34(1, 0, 3);
export const yyx = makeSwizzle32(1, 1, 0);
export const yyy = makeSwizzle32(1, 1, 1);
export const yyz = makeSwizzle33(1, 1, 2);
export const yyw = makeSwizzle34(1, 1, 3);
export const yzx = makeSwizzle33(1, 2, 0);
export const yzy = makeSwizzle33(1, 2, 1);
export const yzz = makeSwizzle33(1, 2, 2);
export const yzw = makeSwizzle34(1, 2, 3);
export const ywx = makeSwizzle34(1, 3, 0);
export const ywy = makeSwizzle34(1, 3, 1);
export const ywz = makeSwizzle34(1, 3, 2);
export const yww = makeSwizzle34(1, 3, 3);
export const zxx = makeSwizzle33(2, 0, 0);
export const zxy = makeSwizzle33(2, 0, 1);
export const zxz = makeSwizzle33(2, 0, 2);
export const zxw = makeSwizzle34(2, 0, 3);
export const zyx = makeSwizzle33(2, 1, 0);
export const zyy = makeSwizzle33(2, 1, 1);
export const zyz = makeSwizzle33(2, 1, 2);
export const zyw = makeSwizzle34(2, 1, 3);
export const zzx = makeSwizzle33(2, 2, 0);
export const zzy = makeSwizzle33(2, 2, 1);
export const zzz = makeSwizzle33(2, 2, 2);
export const zzw = makeSwizzle34(2, 2, 3);
export const zwx = makeSwizzle34(2, 3, 0);
export const zwy = makeSwizzle34(2, 3, 1);
export const zwz = makeSwizzle34(2, 3, 2);
export const zww = makeSwizzle34(2, 3, 3);
export const wxx = makeSwizzle34(3, 0, 0);
export const wxy = makeSwizzle34(3, 0, 1);
export const wxz = makeSwizzle34(3, 0, 2);
export const wxw = makeSwizzle34(3, 0, 3);
export const wyx = makeSwizzle34(3, 1, 0);
export const wyy = makeSwizzle34(3, 1, 1);
export const wyz = makeSwizzle34(3, 1, 2);
export const wyw = makeSwizzle34(3, 1, 3);
export const wzx = makeSwizzle34(3, 2, 0);
export const wzy = makeSwizzle34(3, 2, 1);
export const wzz = makeSwizzle34(3, 2, 2);
export const wzw = makeSwizzle34(3, 2, 3);
export const wwx = makeSwizzle34(3, 3, 0);
export const wwy = makeSwizzle34(3, 3, 1);
export const wwz = makeSwizzle34(3, 3, 2);
export const www = makeSwizzle34(3, 3, 3);
export const xxxx = makeSwizzle42(0, 0, 0, 0);
export const xxxy = makeSwizzle42(0, 0, 0, 1);
export const xxxz = makeSwizzle43(0, 0, 0, 2);
export const xxxw = makeSwizzle44(0, 0, 0, 3);
export const xxyx = makeSwizzle42(0, 0, 1, 0);
export const xxyy = makeSwizzle42(0, 0, 1, 1);
export const xxyz = makeSwizzle43(0, 0, 1, 2);
export const xxyw = makeSwizzle44(0, 0, 1, 3);
export const xxzx = makeSwizzle43(0, 0, 2, 0);
export const xxzy = makeSwizzle43(0, 0, 2, 1);
export const xxzz = makeSwizzle43(0, 0, 2, 2);
export const xxzw = makeSwizzle44(0, 0, 2, 3);
export const xxwx = makeSwizzle44(0, 0, 3, 0);
export const xxwy = makeSwizzle44(0, 0, 3, 1);
export const xxwz = makeSwizzle44(0, 0, 3, 2);
export const xxww = makeSwizzle44(0, 0, 3, 3);
export const xyxx = makeSwizzle42(0, 1, 0, 0);
export const xyxy = makeSwizzle42(0, 1, 0, 1);
export const xyxz = makeSwizzle43(0, 1, 0, 2);
export const xyxw = makeSwizzle44(0, 1, 0, 3);
export const xyyx = makeSwizzle42(0, 1, 1, 0);
export const xyyy = makeSwizzle42(0, 1, 1, 1);
export const xyyz = makeSwizzle43(0, 1, 1, 2);
export const xyyw = makeSwizzle44(0, 1, 1, 3);
export const xyzx = makeSwizzle43(0, 1, 2, 0);
export const xyzy = makeSwizzle43(0, 1, 2, 1);
export const xyzz = makeSwizzle43(0, 1, 2, 2);
export const xyzw = makeSwizzle44(0, 1, 2, 3);
export const xywx = makeSwizzle44(0, 1, 3, 0);
export const xywy = makeSwizzle44(0, 1, 3, 1);
export const xywz = makeSwizzle44(0, 1, 3, 2);
export const xyww = makeSwizzle44(0, 1, 3, 3);
export const xzxx = makeSwizzle43(0, 2, 0, 0);
export const xzxy = makeSwizzle43(0, 2, 0, 1);
export const xzxz = makeSwizzle43(0, 2, 0, 2);
export const xzxw = makeSwizzle44(0, 2, 0, 3);
export const xzyx = makeSwizzle43(0, 2, 1, 0);
export const xzyy = makeSwizzle43(0, 2, 1, 1);
export const xzyz = makeSwizzle43(0, 2, 1, 2);
export const xzyw = makeSwizzle44(0, 2, 1, 3);
export const xzzx = makeSwizzle43(0, 2, 2, 0);
export const xzzy = makeSwizzle43(0, 2, 2, 1);
export const xzzz = makeSwizzle43(0, 2, 2, 2);
export const xzzw = makeSwizzle44(0, 2, 2, 3);
export const xzwx = makeSwizzle44(0, 2, 3, 0);
export const xzwy = makeSwizzle44(0, 2, 3, 1);
export const xzwz = makeSwizzle44(0, 2, 3, 2);
export const xzww = makeSwizzle44(0, 2, 3, 3);
export const xwxx = makeSwizzle44(0, 3, 0, 0);
export const xwxy = makeSwizzle44(0, 3, 0, 1);
export const xwxz = makeSwizzle44(0, 3, 0, 2);
export const xwxw = makeSwizzle44(0, 3, 0, 3);
export const xwyx = makeSwizzle44(0, 3, 1, 0);
export const xwyy = makeSwizzle44(0, 3, 1, 1);
export const xwyz = makeSwizzle44(0, 3, 1, 2);
export const xwyw = makeSwizzle44(0, 3, 1, 3);
export const xwzx = makeSwizzle44(0, 3, 2, 0);
export const xwzy = makeSwizzle44(0, 3, 2, 1);
export const xwzz = makeSwizzle44(0, 3, 2, 2);
export const xwzw = makeSwizzle44(0, 3, 2, 3);
export const xwwx = makeSwizzle44(0, 3, 3, 0);
export const xwwy = makeSwizzle44(0, 3, 3, 1);
export const xwwz = makeSwizzle44(0, 3, 3, 2);
export const xwww = makeSwizzle44(0, 3, 3, 3);
export const yxxx = makeSwizzle42(1, 0, 0, 0);
export const yxxy = makeSwizzle42(1, 0, 0, 1);
export const yxxz = makeSwizzle43(1, 0, 0, 2);
export const yxxw = makeSwizzle44(1, 0, 0, 3);
export const yxyx = makeSwizzle42(1, 0, 1, 0);
export const yxyy = makeSwizzle42(1, 0, 1, 1);
export const yxyz = makeSwizzle43(1, 0, 1, 2);
export const yxyw = makeSwizzle44(1, 0, 1, 3);
export const yxzx = makeSwizzle43(1, 0, 2, 0);
export const yxzy = makeSwizzle43(1, 0, 2, 1);
export const yxzz = makeSwizzle43(1, 0, 2, 2);
export const yxzw = makeSwizzle44(1, 0, 2, 3);
export const yxwx = makeSwizzle44(1, 0, 3, 0);
export const yxwy = makeSwizzle44(1, 0, 3, 1);
export const yxwz = makeSwizzle44(1, 0, 3, 2);
export const yxww = makeSwizzle44(1, 0, 3, 3);
export const yyxx = makeSwizzle42(1, 1, 0, 0);
export const yyxy = makeSwizzle42(1, 1, 0, 1);
export const yyxz = makeSwizzle43(1, 1, 0, 2);
export const yyxw = makeSwizzle44(1, 1, 0, 3);
export const yyyx = makeSwizzle42(1, 1, 1, 0);
export const yyyy = makeSwizzle42(1, 1, 1, 1);
export const yyyz = makeSwizzle43(1, 1, 1, 2);
export const yyyw = makeSwizzle44(1, 1, 1, 3);
export const yyzx = makeSwizzle43(1, 1, 2, 0);
export const yyzy = makeSwizzle43(1, 1, 2, 1);
export const yyzz = makeSwizzle43(1, 1, 2, 2);
export const yyzw = makeSwizzle44(1, 1, 2, 3);
export const yywx = makeSwizzle44(1, 1, 3, 0);
export const yywy = makeSwizzle44(1, 1, 3, 1);
export const yywz = makeSwizzle44(1, 1, 3, 2);
export const yyww = makeSwizzle44(1, 1, 3, 3);
export const yzxx = makeSwizzle43(1, 2, 0, 0);
export const yzxy = makeSwizzle43(1, 2, 0, 1);
export const yzxz = makeSwizzle43(1, 2, 0, 2);
export const yzxw = makeSwizzle44(1, 2, 0, 3);
export const yzyx = makeSwizzle43(1, 2, 1, 0);
export const yzyy = makeSwizzle43(1, 2, 1, 1);
export const yzyz = makeSwizzle43(1, 2, 1, 2);
export const yzyw = makeSwizzle44(1, 2, 1, 3);
export const yzzx = makeSwizzle43(1, 2, 2, 0);
export const yzzy = makeSwizzle43(1, 2, 2, 1);
export const yzzz = makeSwizzle43(1, 2, 2, 2);
export const yzzw = makeSwizzle44(1, 2, 2, 3);
export const yzwx = makeSwizzle44(1, 2, 3, 0);
export const yzwy = makeSwizzle44(1, 2, 3, 1);
export const yzwz = makeSwizzle44(1, 2, 3, 2);
export const yzww = makeSwizzle44(1, 2, 3, 3);
export const ywxx = makeSwizzle44(1, 3, 0, 0);
export const ywxy = makeSwizzle44(1, 3, 0, 1);
export const ywxz = makeSwizzle44(1, 3, 0, 2);
export const ywxw = makeSwizzle44(1, 3, 0, 3);
export const ywyx = makeSwizzle44(1, 3, 1, 0);
export const ywyy = makeSwizzle44(1, 3, 1, 1);
export const ywyz = makeSwizzle44(1, 3, 1, 2);
export const ywyw = makeSwizzle44(1, 3, 1, 3);
export const ywzx = makeSwizzle44(1, 3, 2, 0);
export const ywzy = makeSwizzle44(1, 3, 2, 1);
export const ywzz = makeSwizzle44(1, 3, 2, 2);
export const ywzw = makeSwizzle44(1, 3, 2, 3);
export const ywwx = makeSwizzle44(1, 3, 3, 0);
export const ywwy = makeSwizzle44(1, 3, 3, 1);
export const ywwz = makeSwizzle44(1, 3, 3, 2);
export const ywww = makeSwizzle44(1, 3, 3, 3);
export const zxxx = makeSwizzle43(2, 0, 0, 0);
export const zxxy = makeSwizzle43(2, 0, 0, 1);
export const zxxz = makeSwizzle43(2, 0, 0, 2);
export const zxxw = makeSwizzle44(2, 0, 0, 3);
export const zxyx = makeSwizzle43(2, 0, 1, 0);
export const zxyy = makeSwizzle43(2, 0, 1, 1);
export const zxyz = makeSwizzle43(2, 0, 1, 2);
export const zxyw = makeSwizzle44(2, 0, 1, 3);
export const zxzx = makeSwizzle43(2, 0, 2, 0);
export const zxzy = makeSwizzle43(2, 0, 2, 1);
export const zxzz = makeSwizzle43(2, 0, 2, 2);
export const zxzw = makeSwizzle44(2, 0, 2, 3);
export const zxwx = makeSwizzle44(2, 0, 3, 0);
export const zxwy = makeSwizzle44(2, 0, 3, 1);
export const zxwz = makeSwizzle44(2, 0, 3, 2);
export const zxww = makeSwizzle44(2, 0, 3, 3);
export const zyxx = makeSwizzle43(2, 1, 0, 0);
export const zyxy = makeSwizzle43(2, 1, 0, 1);
export const zyxz = makeSwizzle43(2, 1, 0, 2);
export const zyxw = makeSwizzle44(2, 1, 0, 3);
export const zyyx = makeSwizzle43(2, 1, 1, 0);
export const zyyy = makeSwizzle43(2, 1, 1, 1);
export const zyyz = makeSwizzle43(2, 1, 1, 2);
export const zyyw = makeSwizzle44(2, 1, 1, 3);
export const zyzx = makeSwizzle43(2, 1, 2, 0);
export const zyzy = makeSwizzle43(2, 1, 2, 1);
export const zyzz = makeSwizzle43(2, 1, 2, 2);
export const zyzw = makeSwizzle44(2, 1, 2, 3);
export const zywx = makeSwizzle44(2, 1, 3, 0);
export const zywy = makeSwizzle44(2, 1, 3, 1);
export const zywz = makeSwizzle44(2, 1, 3, 2);
export const zyww = makeSwizzle44(2, 1, 3, 3);
export const zzxx = makeSwizzle43(2, 2, 0, 0);
export const zzxy = makeSwizzle43(2, 2, 0, 1);
export const zzxz = makeSwizzle43(2, 2, 0, 2);
export const zzxw = makeSwizzle44(2, 2, 0, 3);
export const zzyx = makeSwizzle43(2, 2, 1, 0);
export const zzyy = makeSwizzle43(2, 2, 1, 1);
export const zzyz = makeSwizzle43(2, 2, 1, 2);
export const zzyw = makeSwizzle44(2, 2, 1, 3);
export const zzzx = makeSwizzle43(2, 2, 2, 0);
export const zzzy = makeSwizzle43(2, 2, 2, 1);
export const zzzz = makeSwizzle43(2, 2, 2, 2);
export const zzzw = makeSwizzle44(2, 2, 2, 3);
export const zzwx = makeSwizzle44(2, 2, 3, 0);
export const zzwy = makeSwizzle44(2, 2, 3, 1);
export const zzwz = makeSwizzle44(2, 2, 3, 2);
export const zzww = makeSwizzle44(2, 2, 3, 3);
export const zwxx = makeSwizzle44(2, 3, 0, 0);
export const zwxy = makeSwizzle44(2, 3, 0, 1);
export const zwxz = makeSwizzle44(2, 3, 0, 2);
export const zwxw = makeSwizzle44(2, 3, 0, 3);
export const zwyx = makeSwizzle44(2, 3, 1, 0);
export const zwyy = makeSwizzle44(2, 3, 1, 1);
export const zwyz = makeSwizzle44(2, 3, 1, 2);
export const zwyw = makeSwizzle44(2, 3, 1, 3);
export const zwzx = makeSwizzle44(2, 3, 2, 0);
export const zwzy = makeSwizzle44(2, 3, 2, 1);
export const zwzz = makeSwizzle44(2, 3, 2, 2);
export const zwzw = makeSwizzle44(2, 3, 2, 3);
export const zwwx = makeSwizzle44(2, 3, 3, 0);
export const zwwy = makeSwizzle44(2, 3, 3, 1);
export const zwwz = makeSwizzle44(2, 3, 3, 2);
export const zwww = makeSwizzle44(2, 3, 3, 3);
export const wxxx = makeSwizzle44(3, 0, 0, 0);
export const wxxy = makeSwizzle44(3, 0, 0, 1);
export const wxxz = makeSwizzle44(3, 0, 0, 2);
export const wxxw = makeSwizzle44(3, 0, 0, 3);
export const wxyx = makeSwizzle44(3, 0, 1, 0);
export const wxyy = makeSwizzle44(3, 0, 1, 1);
export const wxyz = makeSwizzle44(3, 0, 1, 2);
export const wxyw = makeSwizzle44(3, 0, 1, 3);
export const wxzx = makeSwizzle44(3, 0, 2, 0);
export const wxzy = makeSwizzle44(3, 0, 2, 1);
export const wxzz = makeSwizzle44(3, 0, 2, 2);
export const wxzw = makeSwizzle44(3, 0, 2, 3);
export const wxwx = makeSwizzle44(3, 0, 3, 0);
export const wxwy = makeSwizzle44(3, 0, 3, 1);
export const wxwz = makeSwizzle44(3, 0, 3, 2);
export const wxww = makeSwizzle44(3, 0, 3, 3);
export const wyxx = makeSwizzle44(3, 1, 0, 0);
export const wyxy = makeSwizzle44(3, 1, 0, 1);
export const wyxz = makeSwizzle44(3, 1, 0, 2);
export const wyxw = makeSwizzle44(3, 1, 0, 3);
export const wyyx = makeSwizzle44(3, 1, 1, 0);
export const wyyy = makeSwizzle44(3, 1, 1, 1);
export const wyyz = makeSwizzle44(3, 1, 1, 2);
export const wyyw = makeSwizzle44(3, 1, 1, 3);
export const wyzx = makeSwizzle44(3, 1, 2, 0);
export const wyzy = makeSwizzle44(3, 1, 2, 1);
export const wyzz = makeSwizzle44(3, 1, 2, 2);
export const wyzw = makeSwizzle44(3, 1, 2, 3);
export const wywx = makeSwizzle44(3, 1, 3, 0);
export const wywy = makeSwizzle44(3, 1, 3, 1);
export const wywz = makeSwizzle44(3, 1, 3, 2);
export const wyww = makeSwizzle44(3, 1, 3, 3);
export const wzxx = makeSwizzle44(3, 2, 0, 0);
export const wzxy = makeSwizzle44(3, 2, 0, 1);
export const wzxz = makeSwizzle44(3, 2, 0, 2);
export const wzxw = makeSwizzle44(3, 2, 0, 3);
export const wzyx = makeSwizzle44(3, 2, 1, 0);
export const wzyy = makeSwizzle44(3, 2, 1, 1);
export const wzyz = makeSwizzle44(3, 2, 1, 2);
export const wzyw = makeSwizzle44(3, 2, 1, 3);
export const wzzx = makeSwizzle44(3, 2, 2, 0);
export const wzzy = makeSwizzle44(3, 2, 2, 1);
export const wzzz = makeSwizzle44(3, 2, 2, 2);
export const wzzw = makeSwizzle44(3, 2, 2, 3);
export const wzwx = makeSwizzle44(3, 2, 3, 0);
export const wzwy = makeSwizzle44(3, 2, 3, 1);
export const wzwz = makeSwizzle44(3, 2, 3, 2);
export const wzww = makeSwizzle44(3, 2, 3, 3);
export const wwxx = makeSwizzle44(3, 3, 0, 0);
export const wwxy = makeSwizzle44(3, 3, 0, 1);
export const wwxz = makeSwizzle44(3, 3, 0, 2);
export const wwxw = makeSwizzle44(3, 3, 0, 3);
export const wwyx = makeSwizzle44(3, 3, 1, 0);
export const wwyy = makeSwizzle44(3, 3, 1, 1);
export const wwyz = makeSwizzle44(3, 3, 1, 2);
export const wwyw = makeSwizzle44(3, 3, 1, 3);
export const wwzx = makeSwizzle44(3, 3, 2, 0);
export const wwzy = makeSwizzle44(3, 3, 2, 1);
export const wwzz = makeSwizzle44(3, 3, 2, 2);
export const wwzw = makeSwizzle44(3, 3, 2, 3);
export const wwwx = makeSwizzle44(3, 3, 3, 0);
export const wwwy = makeSwizzle44(3, 3, 3, 1);
export const wwwz = makeSwizzle44(3, 3, 3, 2);
export const wwww = makeSwizzle44(3, 3, 3, 3);

export const r = x;
export const g = y;
export const b = z;
export const a = w;
export const rr = xx;
export const rg = xy;
export const rb = xz;
export const ra = xw;
export const gr = yx;
export const gg = yy;
export const gb = yz;
export const ga = yw;
export const br = zx;
export const bg = zy;
export const bb = zz;
export const ba = zw;
export const ar = wx;
export const ag = wy;
export const ab = wz;
export const aa = ww;
export const rrr = xxx;
export const rrg = xxy;
export const rrb = xxz;
export const rra = xxw;
export const rgr = xyx;
export const rgg = xyy;
export const rgb = xyz;
export const rga = xyw;
export const rbr = xzx;
export const rbg = xzy;
export const rbb = xzz;
export const rba = xzw;
export const rar = xwx;
export const rag = xwy;
export const rab = xwz;
export const raa = xww;
export const grr = yxx;
export const grg = yxy;
export const grb = yxz;
export const gra = yxw;
export const ggr = yyx;
export const ggg = yyy;
export const ggb = yyz;
export const gga = yyw;
export const gbr = yzx;
export const gbg = yzy;
export const gbb = yzz;
export const gba = yzw;
export const gar = ywx;
export const gag = ywy;
export const gab = ywz;
export const gaa = yww;
export const brr = zxx;
export const brg = zxy;
export const brb = zxz;
export const bra = zxw;
export const bgr = zyx;
export const bgg = zyy;
export const bgb = zyz;
export const bga = zyw;
export const bbr = zzx;
export const bbg = zzy;
export const bbb = zzz;
export const bba = zzw;
export const bar = zwx;
export const bag = zwy;
export const bab = zwz;
export const baa = zww;
export const arr = wxx;
export const arg = wxy;
export const arb = wxz;
export const ara = wxw;
export const agr = wyx;
export const agg = wyy;
export const agb = wyz;
export const aga = wyw;
export const abr = wzx;
export const abg = wzy;
export const abb = wzz;
export const aba = wzw;
export const aar = wwx;
export const aag = wwy;
export const aab = wwz;
export const aaa = www;

export const rrrr = xxxx;
export const rrrg = xxxy;
export const rrrb = xxxz;
export const rrra = xxxw;
export const rrgr = xxyx;
export const rrgg = xxyy;
export const rrgb = xxyz;
export const rrga = xxyw;
export const rrbr = xxzx;
export const rrbg = xxzy;
export const rrbb = xxzz;
export const rrba = xxzw;
export const rrar = xxwx;
export const rrag = xxwy;
export const rrab = xxwz;
export const rraa = xxww;
export const rgrr = xyxx;
export const rgrg = xyxy;
export const rgrb = xyxz;
export const rgra = xyxw;
export const rggr = xyyx;
export const rggg = xyyy;
export const rggb = xyyz;
export const rgga = xyyw;
export const rgbr = xyzx;
export const rgbg = xyzy;
export const rgbb = xyzz;
export const rgba = xyzw;
export const rgar = xywx;
export const rgag = xywy;
export const rgab = xywz;
export const rgaa = xyww;
export const rbrr = xzxx;
export const rbrg = xzxy;
export const rbrb = xzxz;
export const rbra = xzxw;
export const rbgr = xzyx;
export const rbgg = xzyy;
export const rbgb = xzyz;
export const rbga = xzyw;
export const rbbr = xzzx;
export const rbbg = xzzy;
export const rbbb = xzzz;
export const rbba = xzzw;
export const rbar = xzwx;
export const rbag = xzwy;
export const rbab = xzwz;
export const rbaa = xzww;
export const rarr = xwxx;
export const rarg = xwxy;
export const rarb = xwxz;
export const rara = xwxw;
export const ragr = xwyx;
export const ragg = xwyy;
export const ragb = xwyz;
export const raga = xwyw;
export const rabr = xwzx;
export const rabg = xwzy;
export const rabb = xwzz;
export const raba = xwzw;
export const raar = xwwx;
export const raag = xwwy;
export const raab = xwwz;
export const raaa = xwww;
export const grrr = yxxx;
export const grrg = yxxy;
export const grrb = yxxz;
export const grra = yxxw;
export const grgr = yxyx;
export const grgg = yxyy;
export const grgb = yxyz;
export const grga = yxyw;
export const grbr = yxzx;
export const grbg = yxzy;
export const grbb = yxzz;
export const grba = yxzw;
export const grar = yxwx;
export const grag = yxwy;
export const grab = yxwz;
export const graa = yxww;
export const ggrr = yyxx;
export const ggrg = yyxy;
export const ggrb = yyxz;
export const ggra = yyxw;
export const gggr = yyyx;
export const gggg = yyyy;
export const gggb = yyyz;
export const ggga = yyyw;
export const ggbr = yyzx;
export const ggbg = yyzy;
export const ggbb = yyzz;
export const ggba = yyzw;
export const ggar = yywx;
export const ggag = yywy;
export const ggab = yywz;
export const ggaa = yyww;
export const gbrr = yzxx;
export const gbrg = yzxy;
export const gbrb = yzxz;
export const gbra = yzxw;
export const gbgr = yzyx;
export const gbgg = yzyy;
export const gbgb = yzyz;
export const gbga = yzyw;
export const gbbr = yzzx;
export const gbbg = yzzy;
export const gbbb = yzzz;
export const gbba = yzzw;
export const gbar = yzwx;
export const gbag = yzwy;
export const gbab = yzwz;
export const gbaa = yzww;
export const garr = ywxx;
export const garg = ywxy;
export const garb = ywxz;
export const gara = ywxw;
export const gagr = ywyx;
export const gagg = ywyy;
export const gagb = ywyz;
export const gaga = ywyw;
export const gabr = ywzx;
export const gabg = ywzy;
export const gabb = ywzz;
export const gaba = ywzw;
export const gaar = ywwx;
export const gaag = ywwy;
export const gaab = ywwz;
export const gaaa = ywww;
export const brrr = zxxx;
export const brrg = zxxy;
export const brrb = zxxz;
export const brra = zxxw;
export const brgr = zxyx;
export const brgg = zxyy;
export const brgb = zxyz;
export const brga = zxyw;
export const brbr = zxzx;
export const brbg = zxzy;
export const brbb = zxzz;
export const brba = zxzw;
export const brar = zxwx;
export const brag = zxwy;
export const brab = zxwz;
export const braa = zxww;
export const bgrr = zyxx;
export const bgrg = zyxy;
export const bgrb = zyxz;
export const bgra = zyxw;
export const bggr = zyyx;
export const bggg = zyyy;
export const bggb = zyyz;
export const bgga = zyyw;
export const bgbr = zyzx;
export const bgbg = zyzy;
export const bgbb = zyzz;
export const bgba = zyzw;
export const bgar = zywx;
export const bgag = zywy;
export const bgab = zywz;
export const bgaa = zyww;
export const bbrr = zzxx;
export const bbrg = zzxy;
export const bbrb = zzxz;
export const bbra = zzxw;
export const bbgr = zzyx;
export const bbgg = zzyy;
export const bbgb = zzyz;
export const bbga = zzyw;
export const bbbr = zzzx;
export const bbbg = zzzy;
export const bbbb = zzzz;
export const bbba = zzzw;
export const bbar = zzwx;
export const bbag = zzwy;
export const bbab = zzwz;
export const bbaa = zzww;
export const barr = zwxx;
export const barg = zwxy;
export const barb = zwxz;
export const bara = zwxw;
export const bagr = zwyx;
export const bagg = zwyy;
export const bagb = zwyz;
export const baga = zwyw;
export const babr = zwzx;
export const babg = zwzy;
export const babb = zwzz;
export const baba = zwzw;
export const baar = zwwx;
export const baag = zwwy;
export const baab = zwwz;
export const baaa = zwww;
export const arrr = wxxx;
export const arrg = wxxy;
export const arrb = wxxz;
export const arra = wxxw;
export const argr = wxyx;
export const argg = wxyy;
export const argb = wxyz;
export const arga = wxyw;
export const arbr = wxzx;
export const arbg = wxzy;
export const arbb = wxzz;
export const arba = wxzw;
export const arar = wxwx;
export const arag = wxwy;
export const arab = wxwz;
export const araa = wxww;
export const agrr = wyxx;
export const agrg = wyxy;
export const agrb = wyxz;
export const agra = wyxw;
export const aggr = wyyx;
export const aggg = wyyy;
export const aggb = wyyz;
export const agga = wyyw;
export const agbr = wyzx;
export const agbg = wyzy;
export const agbb = wyzz;
export const agba = wyzw;
export const agar = wywx;
export const agag = wywy;
export const agab = wywz;
export const agaa = wyww;
export const abrr = wzxx;
export const abrg = wzxy;
export const abrb = wzxz;
export const abra = wzxw;
export const abgr = wzyx;
export const abgg = wzyy;
export const abgb = wzyz;
export const abga = wzyw;
export const abbr = wzzx;
export const abbg = wzzy;
export const abbb = wzzz;
export const abba = wzzw;
export const abar = wzwx;
export const abag = wzwy;
export const abab = wzwz;
export const abaa = wzww;
export const aarr = wwxx;
export const aarg = wwxy;
export const aarb = wwxz;
export const aara = wwxw;
export const aagr = wwyx;
export const aagg = wwyy;
export const aagb = wwyz;
export const aaga = wwyw;
export const aabr = wwzx;
export const aabg = wwzy;
export const aabb = wwzz;
export const aaba = wwzw;
export const aaar = wwwx;
export const aaag = wwwy;
export const aaab = wwwz;
export const aaaa = wwww;

export const s = x;
export const t = y;
export const p = z;
export const q = w;
export const ss = xx;
export const st = xy;
export const sp = xz;
export const sq = xw;
export const ts = yx;
export const tt = yy;
export const tp = yz;
export const tq = yw;
export const ps = zx;
export const pt = zy;
export const pp = zz;
export const pq = zw;
export const qs = wx;
export const qt = wy;
export const qp = wz;
export const qq = ww;
export const sss = xxx;
export const sst = xxy;
export const ssp = xxz;
export const ssq = xxw;
export const sts = xyx;
export const stt = xyy;
export const stp = xyz;
export const stq = xyw;
export const sps = xzx;
export const spt = xzy;
export const spp = xzz;
export const spq = xzw;
export const sqs = xwx;
export const sqt = xwy;
export const sqp = xwz;
export const sqq = xww;
export const tss = yxx;
export const tst = yxy;
export const tsp = yxz;
export const tsq = yxw;
export const tts = yyx;
export const ttt = yyy;
export const ttp = yyz;
export const ttq = yyw;
export const tps = yzx;
export const tpt = yzy;
export const tpp = yzz;
export const tpq = yzw;
export const tqs = ywx;
export const tqt = ywy;
export const tqp = ywz;
export const tqq = yww;
export const pss = zxx;
export const pst = zxy;
export const psp = zxz;
export const psq = zxw;
export const pts = zyx;
export const ptt = zyy;
export const ptp = zyz;
export const ptq = zyw;
export const pps = zzx;
export const ppt = zzy;
export const ppp = zzz;
export const ppq = zzw;
export const pqs = zwx;
export const pqt = zwy;
export const pqp = zwz;
export const pqq = zww;
export const qss = wxx;
export const qst = wxy;
export const qsp = wxz;
export const qsq = wxw;
export const qts = wyx;
export const qtt = wyy;
export const qtp = wyz;
export const qtq = wyw;
export const qps = wzx;
export const qpt = wzy;
export const qpp = wzz;
export const qpq = wzw;
export const qqs = wwx;
export const qqt = wwy;
export const qqp = wwz;
export const qqq = www;
export const ssss = xxxx;
export const ssst = xxxy;
export const sssp = xxxz;
export const sssq = xxxw;
export const ssts = xxyx;
export const sstt = xxyy;
export const sstp = xxyz;
export const sstq = xxyw;
export const ssps = xxzx;
export const sspt = xxzy;
export const sspp = xxzz;
export const sspq = xxzw;
export const ssqs = xxwx;
export const ssqt = xxwy;
export const ssqp = xxwz;
export const ssqq = xxww;
export const stss = xyxx;
export const stst = xyxy;
export const stsp = xyxz;
export const stsq = xyxw;
export const stts = xyyx;
export const sttt = xyyy;
export const sttp = xyyz;
export const sttq = xyyw;
export const stps = xyzx;
export const stpt = xyzy;
export const stpp = xyzz;
export const stpq = xyzw;
export const stqs = xywx;
export const stqt = xywy;
export const stqp = xywz;
export const stqq = xyww;
export const spss = xzxx;
export const spst = xzxy;
export const spsp = xzxz;
export const spsq = xzxw;
export const spts = xzyx;
export const sptt = xzyy;
export const sptp = xzyz;
export const sptq = xzyw;
export const spps = xzzx;
export const sppt = xzzy;
export const sppp = xzzz;
export const sppq = xzzw;
export const spqs = xzwx;
export const spqt = xzwy;
export const spqp = xzwz;
export const spqq = xzww;
export const sqss = xwxx;
export const sqst = xwxy;
export const sqsp = xwxz;
export const sqsq = xwxw;
export const sqts = xwyx;
export const sqtt = xwyy;
export const sqtp = xwyz;
export const sqtq = xwyw;
export const sqps = xwzx;
export const sqpt = xwzy;
export const sqpp = xwzz;
export const sqpq = xwzw;
export const sqqs = xwwx;
export const sqqt = xwwy;
export const sqqp = xwwz;
export const sqqq = xwww;
export const tsss = yxxx;
export const tsst = yxxy;
export const tssp = yxxz;
export const tssq = yxxw;
export const tsts = yxyx;
export const tstt = yxyy;
export const tstp = yxyz;
export const tstq = yxyw;
export const tsps = yxzx;
export const tspt = yxzy;
export const tspp = yxzz;
export const tspq = yxzw;
export const tsqs = yxwx;
export const tsqt = yxwy;
export const tsqp = yxwz;
export const tsqq = yxww;
export const ttss = yyxx;
export const ttst = yyxy;
export const ttsp = yyxz;
export const ttsq = yyxw;
export const ttts = yyyx;
export const tttt = yyyy;
export const tttp = yyyz;
export const tttq = yyyw;
export const ttps = yyzx;
export const ttpt = yyzy;
export const ttpp = yyzz;
export const ttpq = yyzw;
export const ttqs = yywx;
export const ttqt = yywy;
export const ttqp = yywz;
export const ttqq = yyww;
export const tpss = yzxx;
export const tpst = yzxy;
export const tpsp = yzxz;
export const tpsq = yzxw;
export const tpts = yzyx;
export const tptt = yzyy;
export const tptp = yzyz;
export const tptq = yzyw;
export const tpps = yzzx;
export const tppt = yzzy;
export const tppp = yzzz;
export const tppq = yzzw;
export const tpqs = yzwx;
export const tpqt = yzwy;
export const tpqp = yzwz;
export const tpqq = yzww;
export const tqss = ywxx;
export const tqst = ywxy;
export const tqsp = ywxz;
export const tqsq = ywxw;
export const tqts = ywyx;
export const tqtt = ywyy;
export const tqtp = ywyz;
export const tqtq = ywyw;
export const tqps = ywzx;
export const tqpt = ywzy;
export const tqpp = ywzz;
export const tqpq = ywzw;
export const tqqs = ywwx;
export const tqqt = ywwy;
export const tqqp = ywwz;
export const tqqq = ywww;
export const psss = zxxx;
export const psst = zxxy;
export const pssp = zxxz;
export const pssq = zxxw;
export const psts = zxyx;
export const pstt = zxyy;
export const pstp = zxyz;
export const pstq = zxyw;
export const psps = zxzx;
export const pspt = zxzy;
export const pspp = zxzz;
export const pspq = zxzw;
export const psqs = zxwx;
export const psqt = zxwy;
export const psqp = zxwz;
export const psqq = zxww;
export const ptss = zyxx;
export const ptst = zyxy;
export const ptsp = zyxz;
export const ptsq = zyxw;
export const ptts = zyyx;
export const pttt = zyyy;
export const pttp = zyyz;
export const pttq = zyyw;
export const ptps = zyzx;
export const ptpt = zyzy;
export const ptpp = zyzz;
export const ptpq = zyzw;
export const ptqs = zywx;
export const ptqt = zywy;
export const ptqp = zywz;
export const ptqq = zyww;
export const ppss = zzxx;
export const ppst = zzxy;
export const ppsp = zzxz;
export const ppsq = zzxw;
export const ppts = zzyx;
export const pptt = zzyy;
export const pptp = zzyz;
export const pptq = zzyw;
export const ppps = zzzx;
export const pppt = zzzy;
export const pppp = zzzz;
export const pppq = zzzw;
export const ppqs = zzwx;
export const ppqt = zzwy;
export const ppqp = zzwz;
export const ppqq = zzww;
export const pqss = zwxx;
export const pqst = zwxy;
export const pqsp = zwxz;
export const pqsq = zwxw;
export const pqts = zwyx;
export const pqtt = zwyy;
export const pqtp = zwyz;
export const pqtq = zwyw;
export const pqps = zwzx;
export const pqpt = zwzy;
export const pqpp = zwzz;
export const pqpq = zwzw;
export const pqqs = zwwx;
export const pqqt = zwwy;
export const pqqp = zwwz;
export const pqqq = zwww;
export const qsss = wxxx;
export const qsst = wxxy;
export const qssp = wxxz;
export const qssq = wxxw;
export const qsts = wxyx;
export const qstt = wxyy;
export const qstp = wxyz;
export const qstq = wxyw;
export const qsps = wxzx;
export const qspt = wxzy;
export const qspp = wxzz;
export const qspq = wxzw;
export const qsqs = wxwx;
export const qsqt = wxwy;
export const qsqp = wxwz;
export const qsqq = wxww;
export const qtss = wyxx;
export const qtst = wyxy;
export const qtsp = wyxz;
export const qtsq = wyxw;
export const qtts = wyyx;
export const qttt = wyyy;
export const qttp = wyyz;
export const qttq = wyyw;
export const qtps = wyzx;
export const qtpt = wyzy;
export const qtpp = wyzz;
export const qtpq = wyzw;
export const qtqs = wywx;
export const qtqt = wywy;
export const qtqp = wywz;
export const qtqq = wyww;
export const qpss = wzxx;
export const qpst = wzxy;
export const qpsp = wzxz;
export const qpsq = wzxw;
export const qpts = wzyx;
export const qptt = wzyy;
export const qptp = wzyz;
export const qptq = wzyw;
export const qpps = wzzx;
export const qppt = wzzy;
export const qppp = wzzz;
export const qppq = wzzw;
export const qpqs = wzwx;
export const qpqt = wzwy;
export const qpqp = wzwz;
export const qpqq = wzww;
export const qqss = wwxx;
export const qqst = wwxy;
export const qqsp = wwxz;
export const qqsq = wwxw;
export const qqts = wwyx;
export const qqtt = wwyy;
export const qqtp = wwyz;
export const qqtq = wwyw;
export const qqps = wwzx;
export const qqpt = wwzy;
export const qqpp = wwzz;
export const qqpq = wwzw;
export const qqqs = wwwx;
export const qqqt = wwwy;
export const qqqp = wwwz;
export const qqqq = wwww;
