console.log(saludar("Lore", "Soto"));
/*
let numbers2 = numbers.map(function(number){
    return (number * 2)
});
console.log('numbers2 =>', numbers2);
*/

/*
var nombre = "Maximiliano";

console.log('Nombre =>', nombre);

function cambiarNombre(otroNombre)
{
    nombre = otroNombre;
}

cambiarNombre('Pepe');
console.log('Nombre =>', nombre);
*/

// program to show the change in global variable
/* GLOBAL SCOPE 
let a = "hello";
function greet() {
    a = 3;
}
// before the function call
console.log('a =>', a);
//after the function call
greet();
console.log('a =>', a);
*/


/* BLOCK-SCOPE VARIABLE EXAMPLE 

// program showing block-scoped concept
// global variable
let a = 'Hello';

function greet() {
    // local variable
    let b = 'World';
    console.log(a + ' ' + b);
    if (b == 'World') {
        // block-scoped variable
        let c = 'hello';
        console.log(a + ' ' + b + ' ' + c);
    }
    // variable c cannot be accessed here
    console.log(a + ' ' + b + ' ' + c);
}

greet();

/*
    a is a global variable. It can be accessed anywhere in the program.
    b is a local variable. It can be accessed only inside the function greet.
    c is a block-scoped variable. It can be accessed only inside the if statement block.
*/








