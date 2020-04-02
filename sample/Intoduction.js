if( typeof 'module' !== undefined )
require( 'wmathmatrix' );

let _ = wTools;

var matrix = _.Matrix.make( [ 3, 3 ] );
console.log( matrix.buffer );
/* log Float32Array [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] */
matrix.copy( [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] );
console.log( matrix.buffer );
/* log Float32Array [ 1, 4, 7, 2, 5, 8, 3, 6, 9 ] */

/* */

var matrix = _.Matrix.make( [ 3, 3 ] ).copy
([
  1, 2, 3,
  4, 5, 6,
  7, 8, -9
]);
var got = matrix.determinant();
console.log( got );
/* log 54 */

/* */

var matrix = _.Matrix.make( [ 3, 3 ] ).copy
([
  1, 2, 3,
  4, 5, 6,
  7, 8, -9
]);
matrix.strides = [ 3, 2 ];
var got = matrix.rowVectorGet( 0 );
console.log( got );
/* log
VectorAdapterFromLongShrinkedWithStrideNumberShrinkView {
  _vectorBuffer: Float32Array [ 1, 4, 7, 2, 5, 8, 3, 6, -9 ],
  length: 3,
  offset: 0,
  stride: 2
} */

var matrix = _.Matrix
({
  dims : [ 3, 3 ],
  strides : [ 3, 2 ],
  buffer : [ 1, 2, 3, 4, 5, 6, 7 ],
});
var got = matrix.rowVectorGet( 0 );
console.log( got );
/* log
VectorAdapterFromLongShrinkedWithStrideNumberShrinkView {
  _vectorBuffer: Float32Array [ 1, 4, 7, 2, 5, 8, 3, 6, -9 ],
  length: 3,
  offset: 0,
  stride: 2
} */

/* */

var matrix = _.Matrix.make( [ 3, 3 ] ).copy
([
  1, 2, 3,
  4, 5, 6,
  7, 8, -9
]);
matrix.dims = [ 3, 2 ];
var got = matrix.rowVectorGet( 0 );
console.log( got );
/* log
VectorAdapterFromLongShrinked {
  _vectorBuffer: Float32Array [ 1, 4, 7, 2, 5, 8, 3, 6, -9 ],
  length: 3,
  offset: 0,
} */

/* */

var matrixA = _.Matrix.make( [ 2, 2 ] ).copy( [ 3, -2, 2, 3 ] );
var matrixB = _.Matrix.make( [ 2, 1 ] ).copy( [ 1, 2 ] );

var matrixAInv =  matrixA.invertingClone();
var matrixX = _.Matrix.mul( null, [ matrixAInv, matrixB ] );

var x1 = matrixX.eGet( 0 ).eGet( 0 );
var x2 = matrixX.eGet( 0 ).eGet( 1 );
console.log( x1, x2 )
/* log 0.5384615659713745 0.307692289352417 */

