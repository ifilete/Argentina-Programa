function cambiarNombre() {
    let nuevoNombre = prompt("¿Cómo te llamas?", document.getElementById("miNombre").innerHTML);
    console.log(nuevoNombre);
    document.getElementById("miNombre").innerHTML = nuevoNombre;
}

function cambiarColor() {
    let colorActual = document.styleSheets[2].cssRules[10].style.backgroundColor;
    if (colorActual == 'rgb(224, 230, 235)') {
        document.styleSheets[2].cssRules[10].style.backgroundColor = "rgb(33, 37, 41)";
        document.styleSheets[2].cssRules[10].style.color = "rgb(224, 230, 235)";
    } else {
        document.styleSheets[2].cssRules[10].style.backgroundColor = "rgb(224, 230, 235)";
        document.styleSheets[2].cssRules[10].style.color = "rgb(33, 37, 41)";
    }
}