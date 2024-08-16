const listaTarefa = document.getElementById("resultado");
const tarefa = document.getElementById("tarefa");

function adicionarTarefa() {
    const textoTarefa = tarefa.value.trim();
    if (textoTarefa !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
                <input class="caixaSelecao" type="checkbox"> 
                <span class="classeLista">${textoTarefa}</span> 
                <button class='botaoDeletar' onclick="delet(this)">X</button> 
                <button class="edit" onclick="editar(this)">Edit</button> 
        `;
        listaTarefa.appendChild(li);
        tarefa.value = "";
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