let periodoregistrado, consumoregistrado, mediaconsumodiario, mediaconsumomensal, tarifaagua, tarifaesgoto, valortotalfatura;

function calcularPeriodo(dtanterior, dtatual){
    return dtatual - dtanterior;
}
function calcularConsumo(consumoanterior, consumoatual ){
    return consumoatual - consumoanterior;
}

function calcularMediaconsumodiario(consumoregistrado, dtanterior, dtatual){
    return consumoregistrado/30;
}

function calcularMediaconsumomensal(mediaconsumodiario){
    return consumoregistrado*30;
}

function calcularFaturaCategoriaA(){
    const faixaA1=22.84, faixaA2=22.84, faixaA3=42.62, faixaA4=71.74, faixaA5=295.91;
    const adicionalA1=0, adicionalA2=3.95, adicionalA3=5.81, adicionalA4=7.46, adicionalA5=9.00;
}
function calcularFaturaCategoriaB(){
    const faixaB1=22.84, faixaB2=39.55; 
    const adicionalB1=0, adicionalB2=4.82; 
    
}
function calcularFaturaCategoriaC(){
    const faixaC1=54.05, faixaC2=54.05; 
    const adicionalC1=0, adicionalC2=6.14; 
}