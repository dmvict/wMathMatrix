if( typeof 'module' !== undefined )
require( 'wmathmatrix' );

let _ = wTools;

var matrix = _.Matrix.MakeSquare([ 1, 2, 3, 4 ]);
console.log( `matrix :\n${ matrix.toStr() }` );
/* log : matrix :
+1, +2,
+3, +4,
*/
var row = matrix.rowGet( 0 );
console.log( `first row :\n${ row.toStr() }` );
/* log : first row : 1.000, 2.000 */
