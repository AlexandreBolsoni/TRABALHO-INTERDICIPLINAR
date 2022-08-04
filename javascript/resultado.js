var inBuscar = document.getElementById("inBuscar");
var inData = document.getElementById("inData");
var tabela = document.getElementById("tabela");
var tbody = document.getElementById("tbody");

function gerarTabela() {
    var buscaNome = inBuscar.value;
    var buscaAno = inData.value;
    tbody.innerText = "";
    for (var i = 0; i < nome.length; i++) {

        if ((anoNascimento[i] <= buscaAno || buscaAno == "") 
        && (nome[i].toUpperCase().indexOf(buscaNome.toUpperCase()) != -1 || buscaNome == "")) {
            var tr = document.createElement('tr');

            var vetNome = document.createElement('td');
            var vetCPF = document.createElement('td');
            var vetNascimento = document.createElement('td');
            var vetPonto = document.createElement('td');
            var resultado = document.createElement("td");

            vetNome.textContent = nome[i];
            vetCPF.textContent = cpf[i];
            vetNascimento.textContent = nascimento[i];
            vetPonto.textContent = ponto[i];
            if (ponto[i] >= 900) {
                resultado.textContent = "APROVADO";
            } else {
                resultado.textContent = "REPROVADO";
            }

            tr.appendChild(vetNome);
            tr.appendChild(vetCPF);
            tr.appendChild(vetNascimento);
            tr.appendChild(vetPonto);
            tr.appendChild(resultado);

            tbody.appendChild(tr);
        }
    }
}

gerarTabela();
inBuscar.addEventListener("keyup", gerarTabela);
inData.addEventListener("keyup", gerarTabela);