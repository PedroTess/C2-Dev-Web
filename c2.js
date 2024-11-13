// CODIGO ORIGINAL

function gerarAleatorios() {
    var vetor = [];

    while (vetor.length < 6) {
        var aleatorio = Math.floor(Math.random() * 60) + 1;
        if (!vetor.includes(aleatorio)) {
            vetor.push(aleatorio);
        }
    }

    return vetor;
}

// CODIGO ATUALIZADO

function gerarAleatoriosOtimizado(quantidade) {
    let numeros = Array.from({ length: 60 }, (_, i) => i + 1);
    
    for (let i = numeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
    }

    return numeros.slice(0, quantidade);
}