function calcularPeriodo(dtanterior, dtatual){
    return dtatual - dtanterior;
}
function calcularConsumo(consumoanterior, consumoatual ){
    return consumoatual - consumoanterior;
}

function calcularMediaconsumodiario(consumoregistrado, periodoregistrado){
    return consumoregistrado/periodoregistrado;
}

function calcularMediaconsumomensal(mediaconsumodiario){
    return consumoregistrado*30;
}

function calcularFaturaCategoriaA(consumoregistrado){
    let faixa1=10; faixa2=5, faixa3=5, faixa4=29, faixa5=0;
    let consumido = consumoregistrado;
    const faixaA1=22.84, faixaA2=22.84, faixaA3=42.62, faixaA4=71.74, faixaA5=295.91;
    const adicionalA1=0, adicionalA2=3.95, adicionalA3=5.81, adicionalA4=7.46, adicionalA5=9.00;
        if (consumido <= faixa1){
            faixa1 = consumido;
            faixa2 = 0;
            faixa3 = 0
            faixa4 = 0;
            faixa5 = 0;
        }else {
            if (consumido <= (faixa1+faixa2)){
                faixa2 = consumido - faixa1;
                faixa3 = 0
                faixa4 = 0;
                faixa5 = 0;
            }else {
                if (consumido <= (faixa1+faixa2+faixa3)){
                    faixa3 = consumido - faixa1 - faixa2;
                    faixa4 = 0;
                    faixa5 = 0;
                } else {
                    if (consumido <= (faixa1+faixa2+faixa3+faixa4)){
                        faixa4 = consumido - faixa1 - faixa2 - faixa3;
                        faixa5 = 0;
                    }else{
                        faixa5 = consumido-faixa1-faixa2-faixa3-faixa4;
                    }
                }
            }
        }    
    return (faixa1*faixaA1) + (faixa2*faixaA2) + (faixa3*faixaA3) + (faixa4*faixaA4) + (faixa5*faixaA5) +(faixa1*adicionalA1) + (faixa2*adicionalA2) + (faixa3*adicionalA3) + (faixa4*adicionalA4) + (faixa5*adicionalA5);
}

function calcularFaturaCategoriaB(consumoregistrado){
    let faixa1=10; faixa2=0,
    let consumido = consumoregistrado;
    const faixaB1=22.84, faixaB2=39.55; 
    const adicionalB1=0, adicionalB2=4.82; 
         if (consumido <= faixa1){
            faixa1 = consumido;
            faixa2 = 0;
        }else {
            faixa2 = consumido-faixa1;
        }    
    return (faixa1*faixaB1) + (faixa2*faixaB2) + (faixa1*adicionalB1) + (faixa2*adicionalB2);    
}
function calcularFaturaCategoriaC(consumoregistrado){
    let faixa1=10, faixa2=0;
    let consumido = consumoregistrado;
    const faixaC1=54.05, faixaC2=54.05; 
    const adicionalC1=0, adicionalC2=6.14; 
    if (consumido <= faixa1){
        faixa1 = consumido;
        faixa2 = 0;
    }else {
        faixa2 = consumido-faixa1;
    }    
    return (faixa1*faixaC1) + (faixa2*faixaC2) + (faixa1*adicionalC1) + (faixa2*adicionalC2);    
}
