import {
  Mat2Primitive,
  Vec2Primitive,
  Mat3Primitive,
  Vec3Primitive,
  Mat4Primitive,
  Vec4Primitive,
} from "../primitive";
import { Expression } from "../expression";
import { IndexerImplementation } from "../implementations/indexer-implementation";
import { SwizzleImplementation } from "../implementations/swizzle-implementation";

export function getColumn(
  matrix: Expression<Mat2Primitive>,
  column: 0 | 1
): Expression<Vec2Primitive>;

export function getColumn(
  matrix: Expression<Mat3Primitive>,
  column: 0 | 1 | 2
): Expression<Vec3Primitive>;

export function getColumn(
  matrix: Expression<Mat4Primitive>,
  column: 0 | 1 | 2 | 3
): Expression<Vec4Primitive>;

export function getColumn(
  matrix: Expression<Mat2Primitive | Mat3Primitive | Mat4Primitive>,
  column: 0 | 1 | 2 | 3
): Expression<Vec2Primitive | Vec3Primitive | Vec4Primitive> {
  switch (matrix.primitive) {
    case `mat2`:
      return new Expression(
        new SwizzleImplementation(`vec2`, matrix.javascript, [
          column * 2,
          column * 2 + 1,
        ]),
        new IndexerImplementation(`vec2`, matrix.glsl, column)
      );

    case `mat3`:
      return new Expression(
        new SwizzleImplementation(`vec3`, matrix.javascript, [
          column * 3,
          column * 3 + 1,
          column * 3 + 2,
        ]),
        new IndexerImplementation(`vec3`, matrix.glsl, column)
      );

    case `mat4`:
      return new Expression(
        new SwizzleImplementation(`vec4`, matrix.javascript, [
          column * 4,
          column * 4 + 1,
          column * 4 + 2,
          column * 4 + 3,
        ]),
        new IndexerImplementation(`vec4`, matrix.glsl, column)
      );
  }
}
