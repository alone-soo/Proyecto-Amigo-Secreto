// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// array para almacenar los nombres
let listaDeAmigos = [];

//funcion para agregar amigo
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').ariaValueMax.trim();

    if (nombreAmigo === ""){
        alert("Ingrese un nombre valido");
        return;
    }

    listaDeAmigos.push(nombreAmigo);
    document.getElementById('amigo').value = " ";
    actualizarLista();
}

