var inBuscar = document.getElementById("inBuscar");
var inData = document.getElementById("inData");
function vetor() {

    for (var aux = 0; aux < nome.length; aux++) {

        var mae = document.getElementById("tabela");
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
        


        mae.appendChild(organiza);

        

    }
}


function pesquisar() {
    var busca = inBuscar.value
    var mae = document.getElementById("tabela");
    mae.innerText = ""
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


            mae.appendChild(organiza);

        }

    }
}
inBuscar.addEventListener("keyup",pesquisar);


function mostra() {
   
    var busca = inData.value
    var mae = document.getElementById("tabela");
    mae.innerText = ""
    for (var i = 0; i < anoNascimento.length; i++) {

      
            if (anoNascimento[i]<=busca) {
               
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
                


                mae.appendChild(organiza);
            }
            if(busca == ""){
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


            mae.appendChild(organiza);

            }
        
        }

}
inData.addEventListener("keyup",mostra);