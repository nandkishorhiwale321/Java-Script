// console.log(name);       //Hoisted  Initialized with undefined
var name = "Nandkishor";    
var name = "Azim";          // redeclaration allowed in the var  
    name = "omkar";         // reassignment allowed
                            // it is function-scope
                            //is it less secure
console.log(name);


console.log("************");

//console.log(a);            // ReferenceError: Cannot access 'a' before initialization  TDZ
  let a = 10;                
//let a = 20;                // redeclaration not allowed in let
      a = 55;                // reassignment allowed
                             // it is Block-Scope
                             //
                             // it is high secure

console.log(a);

console.log("***********");

// console.log(b);     // ReferenceError: Cannot access 'b' before initialization     TDZ

    const b = 20;
 // const b = 30;      // redeclaration not allowed
 //       b = 22;      // reassignment not allowed
                       // it is also Block-Scope
                       
                       // it is very high secure

 console.log(b);
 
          


