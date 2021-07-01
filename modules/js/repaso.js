edades.forEach(function(edad, i ){
    if (edad > 18){
        console.log('Es mayor (' + edad + ')');
    }
});


function sumar(n1,n2)
{
    //let resultado = (n1+n2); 
    //console.log(resultado);
    //return resultado;
}

let resultadoSuma = sumar(1,5);
console.log(resultadoSuma);

/* BLOCK-SCOPE VARIABLE EXAMPLE */

// program showing block-scoped concept
/*

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

*/

/*
//let nombre = 'Liceo2';
var nombre = 'Liceo2';

let escuela = {
    nombre: "liceo",
    direccion: "Aldunate 1124",
    mejorPuntaje: false,
    alumnos: 326,
    inslusiva: true,
    construida: 1829,
    estadoEdificio: "mal",
    postularMejoramientoArrow: () => {
        //console.log('this arrow function =>', this);
        //console.log(this.nombre, this.construida, this.estadoEdificio);
        console.log(nombre);
    },
   postularMejoramiento: function(){
    console.log('this =>', this);
    //console.log(this.nombre, this.construida, this.estadoEdificio);
   }
  };

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/
//escuela.postularMejoramientoArrow();
//escuela.postularMejoramiento();



//console.log('this =>', this);

/*
function holaMundo()
{
    //console.log('this =>', this);
    let objPersona = {
        edad : 34,
        mostrarDatos : function(n){
            //console.log('this =>', this);
            console.log(this.edad + n);
        }
    }
    console.log(objPersona.mostrarDatos(15));
}


holaMundo();

let persona = {
    edad : 34,
    pais : 'Argentina',
    programador : true,
    hermanos : ['Cecilia', 'Santiago'],
    mostrarDatos : function(){
        //console.log(this.edad);
    }
}

//persona.mostrarDatos();

/*
// condicionales
function chequearEdades(edades)
{
    //console.log("edades =>", edades);
    
    edades.forEach(function(edad, i ){
        if (edad > 18){
            console.log('Es mayor (' + edad + ')');
        }
    });
    
    /*
    for (let indice = 0; indice < edades.length; indice++ ){
        //console.log('indice =>', indice);
        console.log(edades[indice]);
    }
    */
    
    /* ejemplo con uso de var y let 
    for(var i = 0; i < 10; i++) { setTimeout(() => console.log(i), 100) } 
    for(let i = 0; i < 10; i++) { setTimeout(() => console.log(i), 100) } 
} 

/*
Plantillas literales (plantillas de cadenas)
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
Como recorrer o iterar un array (6 maneras)
https://dev.to/duxtech/6-maneras-de-iterar-un-array-3fbm
operaciones con Array
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else
*/

/*
let arrEdades = [15,20,99,17,65,100,101,56];
arrEdades.push(111);
//console.log('arrEdades =>', arrEdades);
chequearEdades(arrEdades);
*/