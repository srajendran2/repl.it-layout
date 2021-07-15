console.log("Wonderful".length);
console.log('JavaScript'[8]);
console.log("Strings are sequences of characters."[5]);
console.log("Do spaces count?".length);
// length of integer
n1 = 20000;
s1 = String(n1);
console.log(s1.length);
// chars after decimal
n2 = 200.12;
s2 = String(n2);
console.log(s2.slice((s2.indexOf(".")+1),s2.length));
if (s2.includes(".") === true){
  console.log("It is decimal");
} else {
  console.log("it is integer");
}
// remove trailing leading spaces, convert to upper
dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    "
d1 = dna.trim().toUpperCase()
dna = d1;
console.log(dna);
// Replace the sequence 'GCT' with 'AGG', and then print the      // altered strand.
console.log(dna.replace("GCT","AGG"));
// Look for the sequence 'CAT' with indexOf(). If found print,    // 'CAT found', otherwise print, 'CAT NOT found'.
if (dna.indexOf("CAT") > 0){
  console.log("CAT found");
} else if (dna.indexOf("CAT") === -1){
  console.log("CAT NOT found");
}
// Use slice() to print out the fifth set of 3 characters (called // a codon) from the DNA strand.
console.log(dna.slice(16,19));
// use template literal
dnaLength = dna.length;
console.log(`The DNA strand is ${dnaLength} characters long.`);


