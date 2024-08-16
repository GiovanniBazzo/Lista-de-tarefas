const tarefa = document.getElementById("tarefa");
const listaTarefa = document.getElementById('resultado')

function adicionarTarefa() {

    const textoTarefa = tarefa.value.trim();
    if (textoTarefa !== "") {
        listaTarefa.innerHTML = listaTarefa.innerHTML + `
        <li draggable="true" ondragstart="drag(event)">
            <input class="caixaSelecao" type="checkbox"> 
            <span class="classeLista">${textoTarefa}</span> 
            <button class='botaoDeletar' onclick="delet(this)">X</button> 
            <button class="edit" onclick="editar(this)">Edit</button>
        </li>`
    }

}

function editar(button) {
    const li = button.parentElement;
    const span = li.querySelector("span");
    const nova = prompt("Editar tarefa:", span.textContent);
    if (nova !== null && nova.trim() !== "") {
        span.textContent = nova.trim();
    }
}

function delet(button) {
    const li = button.parentElement;
    listaTarefa.removeChild(li);
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.resultado.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.resultado.appendChild(document.getElementById(data));
  }
  const reordenarTarefa = new Sortable(ul, {
    animation: 150,
  });