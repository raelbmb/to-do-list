// Array contendo o caminho para suas imagens de papel de parede
var wallpapers = [
  "img/fundo1.jpeg",
  "img/fundo2.jpeg",
  "img/fundo3.jpeg",
  "img/fundo4.jpg",
  "img/fundo5.jpg",
  "img/fundo6.jpg",
  "img/fundo7.jpg",
  "img/fundo8.jpg",
  "img/fundo9.jpg",
  "img/fundo10.jpg",
];

// Função para escolher um papel de parede aleatório
function getRandomWallpaper() {
  var randomIndex = Math.floor(Math.random() * wallpapers.length);
  return wallpapers[randomIndex];
}

// Função para aplicar o papel de parede aleatório
function applyRandomWallpaper() {
  var wallpaperDiv = document.getElementById("wallpaper");
  var randomWallpaper = getRandomWallpaper();
  wallpaperDiv.style.backgroundImage = "url('" + randomWallpaper + "')";
}

// Aplicar um papel de parede aleatório quando a página é carregada
window.onload = applyRandomWallpaper;

//

const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-tasks");

let minhaListaDeItens = [];

function addTarefa() {
  minhaListaDeItens.push({
    tarefa: input.value,
    concluida: false,
  });

  input.value = "";

  mostrarTarefas();
}

function mostrarTarefas() {
  let novaLi = "";

  minhaListaDeItens.forEach((item, index) => {
    novaLi =
      novaLi +
      ` 
       <li class="task ${item.concluida && "done"}">
       <img src="img/checked.png" alt="IMAGEM-DE-OK" onclick="concluirTarefa(${index})">
       <p>${item.tarefa}</p>
       <img src="img/trash-icon.png" alt="imagem-da-LIXEIRA" onclick="deletarItem(${index})">
   </li>`;
  });

  listaCompleta.innerHTML = novaLi;

  localStorage.setItem("lista", JSON.stringify(minhaListaDeItens));
}

function concluirTarefa(index) {
  minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida;

  mostrarTarefas();
}

function deletarItem(index) {
  minhaListaDeItens.splice(index, 1);

  mostrarTarefas();
}

function recarregarTarefas() {
  const tarefasDoLocalStorage = localStorage.getItem("lista");

  if (tarefasDoLocalStorage) {
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage);
  }
  mostrarTarefas();
}

recarregarTarefas();
button.addEventListener("click", addTarefa);
