function realizarSoma(quantidadeArbitros, notaArbitro01, notaArbitro02, notaArbitro03, notaArbitro04, notaArbitro05) {
    if (quantidadeArbitros == "5" && notaArbitro01 != "" && notaArbitro02 != "" && notaArbitro03 != "" && notaArbitro04 != "" && notaArbitro05 != "") {
        const notasConcedidas = [
            Number.parseFloat(notaArbitro01),
            Number.parseFloat(notaArbitro02),
            Number.parseFloat(notaArbitro03),
            Number.parseFloat(notaArbitro04),
            Number.parseFloat(notaArbitro05)
        ];
        
        notasConcedidas.sort(function(a, b){return a - b});
        let soma = notasConcedidas[1] + notasConcedidas[2] + notasConcedidas[3];
        
        popularDados(
            notasConcedidas[0].toFixed(2),
            soma.toFixed(2),
            notasConcedidas[4].toFixed(2)
        );
    }
    else if (quantidadeArbitros == "3" && notaArbitro01 != "" && notaArbitro02 != "" && notaArbitro03 != "") {
        const notasConcedidas = [
            Number.parseFloat(notaArbitro01),
            Number.parseFloat(notaArbitro02),
            Number.parseFloat(notaArbitro03)
        ];
        
        notasConcedidas.sort(function(a, b){return a - b});
        let soma = notasConcedidas[0] + notasConcedidas[1] + notasConcedidas[2];
        
        popularDados(
            notasConcedidas[0].toFixed(2),
            soma.toFixed(2),
            notasConcedidas[2].toFixed(2)
        );
    }
    else {
        alert("É necessário informar TODAS as NOTAS.");
    }
}

function popularDados(notaMenorConcedida, somatorioNotas, notaMaiorConcedida) {
    document.getElementById("notaMenorConcedida").value = notaMenorConcedida;
    document.getElementById("somatorioNotas").value = somatorioNotas;
    document.getElementById("notaMaiorConcedida").value = notaMaiorConcedida;
}

function verificarQuantidadeArbitrosSelecionada(quantidadeArbitros) {
    definirQuantidadeArbitros(Number.parseInt(quantidadeArbitros));
    limparDados();
}

function definirQuantidadeArbitros(quantidadeArbitros) {
    if (quantidadeArbitros == 3) {
        document.getElementById("divNotaArbitro04").style.display = "none";
        document.getElementById("divNotaArbitro05").style.display = "none";
        document.getElementById("divBtnRealizarSomaComCincoNotas").style.display = "none";
        
        document.getElementById("divBtnRealizarSomaComTresNotas").style.display = "block";
    }
    else {
        document.getElementById("divNotaArbitro04").style.display = "block";
        document.getElementById("divNotaArbitro05").style.display = "block";
        document.getElementById("divBtnRealizarSomaComTresNotas").style.display = "none";

        document.getElementById("divBtnRealizarSomaComCincoNotas").style.display = "block";
    }
}

function limparDados() {
    document.getElementById("notaArbitro01").value = "";
    document.getElementById("notaArbitro02").value = "";
    document.getElementById("notaArbitro03").value = "";
    document.getElementById("notaArbitro04").value = "";
    document.getElementById("notaArbitro05").value = "";
    document.getElementById("notaMenorConcedida").value = "";
    document.getElementById("somatorioNotas").value = "";
    document.getElementById("notaMaiorConcedida").value = "";
}