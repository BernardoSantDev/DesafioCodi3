function updateSystemCore(){
    const alvo = parseFloat(document.getElementById('alvo').value);
    const cargaValor = parseFloat(document.getElementById('carga').value); // Mudei o nome aqui para não confundir
    const modobarra = document.getElementById('modobarra');
    const porcento = document.getElementById('porcento');
    const mensagem = document.getElementById('mensagem');

    if(isNaN(alvo) || isNaN(cargaValor) || alvo <= 0){
        mensagem.innerText = "> ERRO: DADOS INVÁLIDOS DETECTADOS.";
        mensagem.style.color = "#ef4444";
        return;
    }

    let percentual = (cargaValor / alvo) * 100;
    let displayPercentual = Math.round(percentual);

    const tamanho = percentual > 100 ? 100 : percentual;

    modobarra.style.width = tamanho + "%";

    if (tamanho > 0) {
        modobarra.style.opacity = "1";
    } else {
        modobarra.style.opacity = "0";
    }

    porcento.innerHTML = displayPercentual + "<span>%</span>";

    modobarra.classList.remove("overcharge");
    mensagem.style.color = "#64748b";



    if (percentual <= 50) {
        modobarra.style.background = `linear-gradient(90deg, #1e3a8a, #00f2ff)`;
        mensagem.innerText = "> INICIALIZANDO CARGA.";
    } else if (percentual < 100) {
        modobarra.style.background = `linear-gradient(90deg, #00f2ff, #3fff00)`;
        mensagem.innerText = "> CARGA EM PROGRESSO.";
    } else if (percentual >= 100) {
        modobarra.classList.add('overcharge'); 
        mensagem.innerText = "> ALVO ALCANÇADO! SOBRECARGA ATIVADA.";
    }
}