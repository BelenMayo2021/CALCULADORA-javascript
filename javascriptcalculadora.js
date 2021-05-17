
// EL USUARIO INGRESA UN NUMERO... Y NOSOTROS LO TRANSFORMAMOS EN VARIABLE

//declaramos las variables. Se le pueden asignar valores ahora o despues, es igual. Variable no definida, porque la define el usuario.
//variables globales o generales


var numero_1;
var numero_2;
var suma;
var resta;
var multiplicacion;
var division;




//funcion: ejecutan un metodo que hace siempre el mismo trabajo

function inicio(){

    numero_1 = prompt("Ingrese el primer numero:");
    numero_2 = prompt("Ingrese el segundo numero:");

    // Prompt: es un aviso que le sale al usuario.  Toma como cadena de texto el contenido que se le ingresa, no como numero.

    numero_1 = parseFloat(numero_1);
    numero_2 = parseFloat(numero_2);


            //transformacion de la recepcion de los datos ( esto es para transformar de cadena de texto a numeros... porque el promt lee texto, no numeros)
            // parseInt convierte dato en numero entero (sin decimales)
            // parseFloat numeros decimales

}


function sumar(){

    if(!numero_1 || !numero_2){
        alert("Inserte un numero valido.");
        inicio() //llama a la funcion inicio para que salga despues de la alerta
    }
    else{
        suma = numero_1 + numero_2;
        resultado.innerHTML = (suma); //esto es para que muestre el esultado en HTML
    }

}

        // if ---> comparativo.. "si" ingresa tal dato, tiene que pasar tal cosa.
        // ILSE: osea/entonces  -ELF



        function restar(){

            if(!numero_1 || !numero_2){
                alert("Inserte un numero valido.");
                inicio() //llama a la funcion inicio para que salga despues de la alerta
            }

            else{
                resta = numero_1 - numero_2;
                resultado.innerHTML = (resta);
            }
        
        }



        function multiplicar(){

            if (!numero_1 || !numero_2){
                alert("inserte un numero valido.");
                inicio()
            }

            else{
                multiplicar = numero_1 * numero_2;
                resultado.innerHTML = (multiplicar);
            }


        }





        function dividir(){

            if (!numero_1 || !numero_2){
                alert("inserte un numero valido.");
                inicio()
            }

            else{
                dividir = numero_1 / numero_2;
                resultado.innerHTML = (dividir);
            }


        }









