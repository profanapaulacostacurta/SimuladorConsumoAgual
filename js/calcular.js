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
    let qtdefaixaA1=10, qtdefaixaA2=5, qtdefaixaA3=5, qtdefaixaA4=29, qtdefaixaA5=0;
    let isfaixaA1=0,isfaixaA2=0,isfaixaA3=0, isfaixaA4=0,isfaixaA5=0;
    const faixaA1=22.84, faixaA2=22.84, faixaA3=42.62, faixaA4=71.74, faixaA5=295.91;
    const adicionalA1=0, adicionalA2=3.95, adicionalA3=5.81, adicionalA4=7.46, adicionalA5=9.00;
        if (consumoregistrado <= qtdefaixaA1){
            qtdefaixaA1 = 0;
            console.log("faixa1"+qtdefaixaA1);
            isfaixaA1 = 1;
            qtdefaixaA2 = 0;
            qtdefaixaA3 = 0
            qtdefaixaA4 = 0;
            qtdefaixaA5 = 0;
        }else {
            if (consumoregistrado <= (qtdefaixaA1+qtdefaixaA2)){
                qtdefaixaA2 = consumoregistrado - qtdefaixaA1;
                console.log("faixa2"+qtdefaixaA2);
                isfaixaA2 = 1;
                qtdefaixaA1 = 0
                qtdefaixaA3 = 0
                qtdefaixaA4 = 0;
                qtdefaixaA5 = 0;
            }else {
                if (consumoregistrado <= (qtdefaixaA1+qtdefaixaA2+qtdefaixaA3)){
                    qtdefaixaA3 = consumoregistrado - qtdefaixaA1 - qtdefaixaA2;
                    console.log("faixa3"+qtdefaixaA3);
                    isfaixaA3 = 1;
                    qtdefaixaA1 = 0;                                
                    qtdefaixaA4 = 0;
                    qtdefaixaA5 = 0;
                } else {
                    if (consumoregistrado <= (qtdefaixaA1+qtdefaixaA2+qtdefaixaA3+qtdefaixaA4)){
                        qtdefaixaA4 = consumoregistrado - qtdefaixaA1 - qtdefaixaA2 - qtdefaixaA3;
                        console.log("faixa4"+qtdefaixaA4);
                        isfaixaA4 = 1;
                        qtdefaixaA1 = 0;
                        qtdefaixaA5 = 0;
                    }else{
                        faixaA5 = consumoregistrado-qtdefaixaA1-qtdefaixaA2-qtdefaixaA3-qtdefaixaA4;
                        console.log("faixa5"+qtdefaixaA5);
                        qtdefaixaA1 = 0;
                        isfaixaA5 = 1;
                    }
                }
            }
        }    
        console.log("1"+(isfaixaA1*faixaA1));
    console.log("2"+(isfaixaA2*faixaA2));
    console.log("3"+(isfaixaA3*faixaA3));
    console.log("4"+(isfaixaA4*faixaA4));
    console.log("5"+(isfaixaA5*faixaA5));
    
    console.log("6"+(faixaA1*adicionalA1));
    console.log("7"+(faixaA2*adicionalA2));
    console.log("8"+(faixaA3*adicionalA3));
    console.log("9"+(faixaA4*adicionalA4));
    console.log("10"+(faixaA5*adicionalA5));
    
    
    return (isfaixaA1*faixaA1) + (isfaixaA2*faixaA2) + (isfaixaA3*faixaA3) + (isfaixaA4*faixaA4) + (isfaixaA5*faixaA5) +(qtdefaixaA1*adicionalA1) + (qtdefaixaA2*adicionalA2) + (qtdefaixaA3*adicionalA3) + (qtdefaixaA4*adicionalA4) + (qtdefaixaA5*adicionalA5);
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
