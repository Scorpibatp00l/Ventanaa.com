//Consola
console.log("Hello World");

//Declaracion de varaiables
var nombre = "Juan";
let edad = 25;
const PI =3.14159;

//Funciones
function saludo(nombre)
{
    return "Hola, " + nombre;
}

console.log(saludo("Maria"));


//Condiciones
let numero = 10;

if(numero > 5){
    console.log("El numero es mayo que 5");
}
else
{
    console.log (El número es menor o igual a 5);
}

//Bucles

for (let i =0; i < 5; i++)
{
    console.log(i);
}

//Arrays
let frutas = ["Manzana", "Banana", "Cereza", "Fresa", "Mango", "Melon", "Papaya", "Naranja","Mandarina", "Pera"];
console.log(frutas(0)); //Imprime manzana

for (let i =0; i < 10; i++)
{
    console.log(frutas(i));
}

//Objetos
let persona=
{
    nombre: "Juan",
    edad: 30,
    saludo: function()
    {
        return "Hola, mi nombre es: "+ this.nombre;
    }
}
console.log (persona.saludo());

//Objetos
document.querySelector("button").addEventListener("click,", funtion()
{
    alert("Boton presionado!");
})
/*
Eventos del Mouse
click: Se dispara cuando el usuario hace click en un elemento.
dbclick: Se dispara cuando el usuario hace doble click en un elemento.
mousedown: Se dispara cuando el usuario suelta el boton del mouse sobre un elemento.
mouseup: Se dispara cuando el usuario presiona un boton del mouse sobre un eleento.
mouseover: Se dispara cuando el cursor del mouse se mueve sobre un elemento.
mouseout: Se dispara cuando el cursor del mouse se mueve fuera del elemento.
mousemove: Se dispara cuando el cursor del mouse ese mueve sobre un elemento.
