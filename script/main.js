function cambiarNombre() {
    let actualNombre = document.getElementById("nombre").innerHTML;
    console.log(actualNombre);
    let nuevoNombre = prompt("¿Cómo te llamas?", "Alexis");
    document.getElementById("nombre").innerHTML = "Mi nombre es " + nuevoNombre;
}

function cambiarColor() {
    let colorActual = document.styleSheets[1].cssRules[0].style.backgroundColor;
    if (colorActual == 'rgb(224, 230, 235)') {
        document.styleSheets[1].cssRules[0].style.backgroundColor = "rgb(33, 37, 41)";
        document.styleSheets[1].cssRules[0].style.color = "rgb(224, 230, 235)";
    } else {
        document.styleSheets[1].cssRules[0].style.backgroundColor = "rgb(224, 230, 235)";
        document.styleSheets[1].cssRules[0].style.color = "rgb(33, 37, 41)";
    }
}

