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

function calcularTarifa(consumoregistrado, categoria){
    if (categoria == 'A'){
        return calcularFaturaCategoriaA(consumoregistrado);
    }else{
         if (categoria == 'B'){
             return calcularFaturaCategoriaB(consumoregistrado);
         }else{
             return calcularFaturaCategoriac(consumoregistrado);
         }
    }
}

function calcularFaturaCategoriaA(consumoregistrado){
    let faixa1=10; faixa2=5, faixa3=5, faixa4=29, faixa5=0;
    let isfaixa1=0,isfaixa2=0,isfaixa3=0, isfaixa4=0,isfaixa5=0;
    const faixaA1=22.84, faixaA2=22.84, faixaA3=42.62, faixaA4=71.74, faixaA5=295.91;
    const adicionalA1=0, adicionalA2=3.95, adicionalA3=5.81, adicionalA4=7.46, adicionalA5=9.00;
        if (consumoregistrado <= faixa1){
            faixa1 = 0;
            isfaixa1 = 1;
            faixa2 = 0;
            faixa3 = 0
            faixa4 = 0;
            faixa5 = 0;
        }else {
            if (consumoregistrado <= (faixa1+faixa2)){
                faixa2 = consumoregistrado - faixa1;
                isfaixa2 = 1;
                faixa1 = 0
                faixa3 = 0
                faixa4 = 0;
                faixa5 = 0;
            }else {
                if (consumoregistrado <= (faixa1+faixa2+faixa3)){
                    faixa3 = consumoregistrado - faixa1 - faixa2;
                    isfaixa3 = 1;
                    faixa1 = 0;                                
                    faixa4 = 0;
                    faixa5 = 0;
                } else {
                    if (consumoregistrado <= (faixa1+faixa2+faixa3+faixa4)){
                        faixa4 = consumoregistrado - faixa1 - faixa2 - faixa3;
                        isfaixa4 = 1;
                        faixa1 = 0;
                        faixa5 = 0;
                    }else{
                        faixa5 = consumoregistrado-faixa1-faixa2-faixa3-faixa4;
                        faixa1 = 0;
                        isfaixa5 = 1;
                    }
                }
            }
        }    
        
    return (isfaixa1*faixaA1) + (isfaixa2*faixaA2) + (isfaixa3*faixaA3) + (isfaixa4*faixaA4) + (isfaixa5*faixaA5) +(faixa1*adicionalA1) + (faixa2*adicionalA2) + (faixa3*adicionalA3) + (faixa4*adicionalA4) + (faixa5*adicionalA5);
}

function calcularFaturaCategoriaB(consumoregistrado){
    let faixa1=10; faixa2=0;
    let isfaixa1=0,isfaixa2=0;
    const faixaB1=22.84, faixaB2=39.55; 
    const adicionalB1=0, adicionalB2=4.82; 
         if (consumoregistrado <= faixa1){
            faixa1 = 0;
            isfaxa1=1;
            faixa2 = 0;
        }else {
            faixa2 = consumoregistrado-faixa1;
            faxa1 = 0;
        }    
    return (isfaixa1*faixaB1) + (isfaixa2*faixaB2) + (faixa1*adicionalB1) + (faixa2*adicionalB2);    
}
function calcularFaturaCategoriaC(consumoregistrado){
    let faixa1=10, faixa2=0;
     let isfaixa1=0,isfaixa2=0;
    let consumido = consumoregistrado;
    const faixaC1=54.05, faixaC2=54.05; 
    const adicionalC1=0, adicionalC2=6.14; 
    if (consumoregistrado <= faixa1){
        faixa1 = 0;
        isfaixa1=1;
        faixa2 = 0;
    }else {
        faixa2 = consumoregistrado-faixa1;
        faixa1=0;
        isfaixa2=1;
    }    
    return (isfaixa1*faixaC1) + (isfaixa2*faixaC2) + (faixa1*adicionalC1) + (faixa2*adicionalC2);    
}
