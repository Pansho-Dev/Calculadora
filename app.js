//Agregar numeros al input vacio y que al hacer click cambie el color
agregar = (valor, boton) => {
  
    boton.style.backgroundColor = "#B4C4B8";
    setTimeout(() => {boton.style.backgroundColor = ""; }, 120);

  document.getElementById("pantalla").value += valor;
};

// Aqui se calcularan lo valores del input, y se hace un trycatch para evitar errores en caso de que la
// persona ingrese una operacion invalida como 2++2 o 1--1.
calcular = () => {
  try {

    const valorPantalla = document.getElementById("pantalla").value;
    const resultado = eval(valorPantalla);

    // Se valida que al apretar el = se haya ingresado un valor evitando que aparesca como UNDEFINED
    if (resultado !== undefined) {
        document.getElementById("pantalla").value = resultado;
    } else {
        alert("Ingresa un valor")
    }
    

  } catch (error) {
    alert(
      "La operacion que intentas hacer es invalida por favor intenta de nuevo"
    );
  }
};

//Limpiar el Input
limpiar = () => {
  document.getElementById("pantalla").value = "";
};
