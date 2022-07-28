/*Trabalho Interdisiplinar
Tema:Concurso Publicos
Grupo: Estêvão, Alexandre, Laélio
*/
var inBuscar = document.getElementById("inBuscar");
var inData = document.getElementById("inData");





function vetor() {

    for (var aux = 0; aux < nome.length; aux++) {

        var tab = document.getElementById("tabela");
        var organiza = document.createElement('tr');


        var vetNome = document.createElement('td');
        var vetCPF = document.createElement('td');
        var vetNascimento = document.createElement('td');
        var vetPonto = document.createElement('td');
        var resultado = document.createElement("td");



        vetNome.textContent = nome[aux];
        vetCPF.textContent = cpf[aux];
        vetNascimento.textContent = nascimento[aux];
        vetPonto.textContent = ponto[aux];
        if (ponto[aux] >= 900) {
            resultado.textContent = "APROVADO"
        } else {
            resultado.textContent = "REPROVADO"
        }



        organiza.appendChild(vetNome);
        organiza.appendChild(vetCPF);
        organiza.appendChild(vetNascimento);
        organiza.appendChild(vetPonto);
        organiza.appendChild(resultado);



        tab.appendChild(organiza);



    }
}


function pesquisar() {
    var busca = inBuscar.value
    var tab = document.getElementById("tabela");
    tab.innerText = ""
    for (var i = 0; i < nome.length; i++) {
        if (nome[i].toUpperCase().indexOf(busca.toUpperCase()) != -1) {
            var organiza = document.createElement('tr');

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
                resultado.textContent = "APROVADO"
            } else {
                resultado.textContent = "REPROVADO"
            }



            organiza.appendChild(vetNome);
            organiza.appendChild(vetCPF);
            organiza.appendChild(vetNascimento);
            organiza.appendChild(vetPonto);
            organiza.appendChild(resultado);


            tab.appendChild(organiza);

        }
        else {

        }
    }

}
inBuscar.addEventListener("keyup", pesquisar);


function mostra() {
    var buscaNome = inBuscar.value
    var busca = inData.value
    var tab = document.getElementById("tabela");
    tab.innerText = ""
    for (var i = 0; i < anoNascimento.length; i++) {


        if (anoNascimento[i] <= busca && nome[i].toUpperCase().indexOf(buscaNome.toUpperCase()) != -1) {

            var organiza = document.createElement('tr');

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
                resultado.textContent = "APROVADO"
            } else {
                resultado.textContent = "REPROVADO"
            }




            organiza.appendChild(vetNome);
            organiza.appendChild(vetCPF);
            organiza.appendChild(vetNascimento);
            organiza.appendChild(vetPonto);
            organiza.appendChild(resultado);



            tab.appendChild(organiza);
        }
        if (busca == "") {
            var organiza = document.createElement('tr');

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
                resultado.textContent = "APROVADO"
            } else {
                resultado.textContent = "REPROVADO"
            }



            organiza.appendChild(vetNome);
            organiza.appendChild(vetCPF);
            organiza.appendChild(vetNascimento);
            organiza.appendChild(vetPonto);
            organiza.appendChild(resultado);


            tab.appendChild(organiza);

        }
            }
}
inData.addEventListener("keyup", mostra);