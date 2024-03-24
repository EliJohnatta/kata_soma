function carregarDados() {
    if (sessionStorage.length >= 1) {
        document.getElementById("notaArbitro01").value = sessionStorage.getItem("notaArbitro01");
        document.getElementById("notaArbitro02").value = sessionStorage.getItem("notaArbitro02");
        document.getElementById("notaArbitro03").value = sessionStorage.getItem("notaArbitro03");
        document.getElementById("notaArbitro04").value = sessionStorage.getItem("notaArbitro04");
        document.getElementById("notaArbitro05").value = sessionStorage.getItem("notaArbitro05");
        document.getElementById("notaMenorConcedida").value = sessionStorage.getItem("notaMenorConcedida");
        document.getElementById("somatorioNotas").value = sessionStorage.getItem("somatorioNotas");
        document.getElementById("notaMaiorConcedida").value = sessionStorage.getItem("notaMaiorConcedida");
    }
}

function realizarSoma(notaArbitro01, notaArbitro02, notaArbitro03, notaArbitro04, notaArbitro05) {
    if (notaArbitro01 != '' && notaArbitro02 != '' && notaArbitro03 != '' && notaArbitro04 != '' && notaArbitro05 != '') {
        const notasConcedidas = [
            Number.parseFloat(notaArbitro01),
            Number.parseFloat(notaArbitro02),
            Number.parseFloat(notaArbitro03),
            Number.parseFloat(notaArbitro04),
            Number.parseFloat(notaArbitro05)
        ];
        
        notasConcedidas.sort(function(a, b){return a - b});
        let soma = notasConcedidas[1] + notasConcedidas[2] + notasConcedidas[3];
        
        document.getElementById("notaMenorConcedida").value = notasConcedidas[0].toFixed(2);
        document.getElementById("somatorioNotas").value = `${notasConcedidas[1].toFixed(2)} + ${notasConcedidas[2].toFixed(2)} + ${notasConcedidas[3].toFixed(2)} = ${soma.toFixed(2)}`;
        document.getElementById("notaMaiorConcedida").value = notasConcedidas[4].toFixed(2);
        
        sessionStorage.setItem("notaArbitro01", notaArbitro01);
        sessionStorage.setItem("notaArbitro02", notaArbitro02);
        sessionStorage.setItem("notaArbitro03", notaArbitro03);
        sessionStorage.setItem("notaArbitro04", notaArbitro04);
        sessionStorage.setItem("notaArbitro05", notaArbitro05);
        sessionStorage.setItem("notaMenorConcedida", document.getElementById("notaMenorConcedida").value);
        sessionStorage.setItem("somatorioNotas", document.getElementById("somatorioNotas").value);
        sessionStorage.setItem("notaMaiorConcedida", document.getElementById("notaMaiorConcedida").value);
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

    sessionStorage.clear();
}