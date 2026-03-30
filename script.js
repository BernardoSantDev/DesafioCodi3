 function updateSystemCore(){
    const alvo = parseFloat(document.getElementById('alvo').value);
    const carga = parseFloat(document.getElementById('carga').value);
    const modobarra = document.getElementById('modobarra');
    const porcento = document.getElementById('porcento');
    const mensagem = document.getElementById('mensagem');

    if(isNaN(alvo) || isNaN(carga) || alvo <= 0){
        mensagem.innerText = "> ERRO: DADOS INVÁLIDOS DETECTADOS.";
        mensagem.style.color = "#ef4444";
        return;
    }

    let percentual = (carga / alvo) * 100;
    let displayPercentual = Math.round(percentual);

    const tamanho = percentual > 100 ? 100 : percentual;

    modobarra.style.width = tamanho + "%";
    porcento.innerText = displayPercentual + "<span>%</span>";

    modobarra.classList.remove("overcharge");
    mensagem.style.color = "#64748b";

    if(percentual < 50){
        carga.style.backgroundColor = "linear-gradient(90deg, #1e3a8a, #00f2ff)";
        mensagem.innerText = "> STATUS: INICIALIZANDO CARGA.";
    }
    else if(percentual < 100){
        carga.style.backgroundColor = "linear-gradient(90deg, #1e3a8a, #3fff00)";
        mensagem.innerText = "> STATUS: CARGA EM PROGRESSO.";
    }
    else{
        carga.classList.add("overcharge");
        mensagem.innerText = "> STATUS: CARGA COMPLETA.";
    }
 }