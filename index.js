//logical and
console.log(5 === 7 && 7 === 8);
console.log(7 === 7 && 5 === 5);
console.log(5 === 7 && 5 === 5);

// logical or
console.log(7 > 5 || 5 > 3);
console.log(7 > 5 || 2 > 3);
console.log(2 > 3 || 'dog' === 'cat');

// logical not reverses the boolean value
console.log(! true);
console.log(! false);
console.log( !(5 > 7) );
console.log( !('dog' === 'cat') );

//Precedence	    Category	                              Operators
//(highest)	      Logical NOT	                            !
//                Exponentiation	                        **
//                Multiplication and division	            *, /, %
//                Addition and subtraction	              +, -
//                Comparison	                            <=, >=, >, <
//                Equality                              	===, !==, ==, !=
//                Logical AND	                            &&
//(lowest)	      Logical OR	                            ||
