function add(a, b) {
  const { a, b } = checkType( [a, b] );
  return a + b;
}


function checkType(args) {
  if ( args.map ) {
    args.map( el => {
      checkType( el );
    } );
  }
  
  //  todo
}
