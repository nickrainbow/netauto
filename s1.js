function add(a, b) {
  [ a, b ] = checkType( [a, b] );
  return a + b;
}


function checkType(arg) {
  let output;
  
  if ( arg.map ) {
    output = arg.map( el => {
      return checkType( el );
    } );
  } else {
  
    arg = Number( arg );
    if ( !Number.isNaN(arg) ) {
      throw new TypeError( 'The argument is not convertable to number' );
    }

  }

  if ( output ) {
    return output;
  }

  return arg;
}


console.log( add( 1, 3) );