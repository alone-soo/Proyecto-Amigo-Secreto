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

//funcion para actualizar lista
function actualizarLista(){
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaDeAmigos.forEach( amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(1);
    });
}

//funcion para sortear amigo
function sortearAmigo(){
    if (listaDeAmigos.length === 0){
        alert("No hay amigos para sortear. Agregar al menos uno.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    let ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = "";

    let li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSorteado}`;
    ulResultado.appendChild(li);

    listaDeAmigos = [];
    actualizarLista();
}