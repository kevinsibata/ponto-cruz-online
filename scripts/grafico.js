var i;

var pontos = document.getElementsByClassName("ponto");

function destacarPonto() {
    
}

for(i=0; i<=pontos.length; i++){
    pontos[i].addEventListener("mouseover", destacarPonto, false);
}

