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

 }