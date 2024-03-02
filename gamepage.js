var guess = 0; // variable para contar los intentos
var y = Math.floor(Math.random() * 10 + 1); // valor aleatorio generado

function submit() {
    guess++; // Incrementar el contador de intentos
    var x = parseInt(document.getElementById("guessField").value); // Obtener el número ingresado por el usuario
    
    if(x == y) {
        alert("¡Felicidades!Has adivinado el número en" + guess + " intentos");
    }
    else if(x < y) {
            guess++;
            alert("El número es mayor. Intenta de nuevo.");
        } else {
            guess++;
            alert("El número es menor. Intenta de nuevo.");
        }
}
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}