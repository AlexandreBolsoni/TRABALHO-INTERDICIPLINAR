
var buscar = document.getElementById("inBuscar");
//buscar.addEventListener("keyup", pesquisar);
var btMostrar = document.getElementById("btMostrar");

function vetor(){
   
    for(var aux  = 0; aux < Nome.length; aux++){
      
        var mae = document.getElementById("tabela");
        var organiza = document.createElement('tr');

        var vetNome = document.createElement('td');
        var vetCPF = document.createElement('td');
        var vetNascimento = document.createElement('td');
        var vetPonto = document.createElement('td');
        var resultado = document.createElement("td")
        

        vetNome.textContent = Nome[aux];
        vetCPF.textContent = CPF[aux];
        vetNascimento.textContent = Nascimento[aux];
        vetPonto.textContent = Ponto[aux];
        if(Ponto[aux] >= 900){
            resultado.textContent = "APROVADO"
        }else{
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

function pesquisar(){
    
    var coluna = "0";

    var buscar, tab, tr, th, td, i;

    buscar = document.getElementById("inBuscar");
    buscar = buscar.value.toUpperCase();

    tab = document.getElementById("tab");

    tr = tab.getElementsByTagName("tr");
    th = tab.getElementsByTagName("th");

    for(var i = 0;i<tr.length;i++){
        td=tr[i].getElementsByTagName("td")[coluna];
        if(td){

            if(td.innerHTML.toUpperCase().indexOf(buscar) > -1){
                tr[i].style.display ="";

            }else{
                tr[i].style.display ="none";
            }
        }
    }

}

function mostra(){
    
    var coluna = "2";

    var buscar, tab, tr, th, td, i;

    buscar = document.getElementById("inData");
    buscar = buscar.value.toUpperCase();

    tab = document.getElementById("tab");

    tr = tab.getElementsByTagName("tr");
    th = tab.getElementsByTagName("th");

    for(var i = 0;i<=inData.value;i++){
        td=tr[i].getElementsByTagName("td")[coluna];
        if(td){

            if(td.innerHTML.toUpperCase().indexOf(buscar) > -1){
                tr[i].style.display ="";

            }else{
                tr[i].style.display ="none";
            }
        }
    }

}



