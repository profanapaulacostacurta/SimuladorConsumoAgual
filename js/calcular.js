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
    let qtdefaixaA1=10, qtdefaixaA2=5, qtdefaixaA3=5, qtdefaixaA4=30, qtdefaixaA5=0;
    let isfaixaA1=0,isfaixaA2=0,isfaixaA3=0, isfaixaA4=0,isfaixaA5=0;
    const faixaA1=22.84, faixaA2=22.84, faixaA3=42.62, faixaA4=71.74, faixaA5=295.91;
    const adicionalA1=0, adicionalA2=3.95, adicionalA3=5.81, adicionalA4=7.46, adicionalA5=9.00;
        if (consumoregistrado <= qtdefaixaA1){
            console.log("faixa1: "+qtdefaixaA1);
            isfaixaA1 = 1;
        }else {
            if (consumoregistrado <= (qtdefaixaA1+qtdefaixaA2)){
                qtdefaixaA2 = consumoregistrado - qtdefaixaA1;
                console.log("faixa2: "+qtdefaixaA2);
                isfaixaA2 = 1;
            }else {
                if (consumoregistrado <= (qtdefaixaA1+qtdefaixaA2+qtdefaixaA3)){
                    qtdefaixaA3 = consumoregistrado - qtdefaixaA1 - qtdefaixaA2;
                    console.log("faixa3: "+qtdefaixaA3);
                    isfaixaA3 = 1;
                } else {
                    if (consumoregistrado <= (qtdefaixaA1+qtdefaixaA2+qtdefaixaA3+qtdefaixaA4)){
                        qtdefaixaA4 = (consumoregistrado - qtdefaixaA1 - qtdefaixaA2 - qtdefaixaA3);
                        console.log("faixa4: "+qtdefaixaA4);
                        isfaixaA4 = 1;
                    }else{
                        qtdefaixaA5 = consumoregistrado-qtdefaixaA1-qtdefaixaA2-qtdefaixaA3-qtdefaixaA4;
                        console.log("faixa5: "+qtdefaixaA5);
                        isfaixaA5 = 1;
                    }
                }
            }
        }    
    console.log("f1: "+(isfaixaA1*faixaA1));
    console.log("f2: "+(isfaixaA2*faixaA2));
    console.log("f3: "+(isfaixaA3*faixaA3));
    console.log("f4: "+(isfaixaA4*faixaA4));
    console.log("f5: "+(isfaixaA5*faixaA5));

    console.log("Tarifa: " + (isfaixaA1*faixaA1) + (isfaixaA2*faixaA2) + (isfaixaA3*faixaA3) + (isfaixaA4*faixaA4) + (isfaixaA5*faixaA5));
    
    console.log("a1: "+(qtdefaixaA1*adicionalA1));
    console.log("a2: "+(qtdefaixaA2*adicionalA2));
    console.log("a3: "+(qtdefaixaA3*adicionalA3));
    console.log("a4: "+(qtdefaixaA4*adicionalA4));
    console.log("a5: "+(qtdefaixaA5*adicionalA5));
    console.log("Adicional: "+ (isfaixaA1*qtdefaixaA1*adicionalA1) + (isfaixaA2*qtdefaixaA2*adicionalA2) + (isfaixaA3*qtdefaixaA3*adicionalA3) + (isfaixaA4*qtdefaixaA4*adicionalA4) + (isfaixaA5*qtdefaixaA5*adicionalA5));
    
    return (isfaixaA1*faixaA1) + (isfaixaA2*faixaA2) + (isfaixaA3*faixaA3) + (isfaixaA4*faixaA4) + (isfaixaA5*faixaA5) +(isfaixaA1*qtdefaixaA1*adicionalA1) + (isfaixaA2*qtdefaixaA2*adicionalA2) + (isfaixaA3*qtdefaixaA3*adicionalA3) + (isfaixaA4*qtdefaixaA4*adicionalA4) + (isfaixaA5*qtdefaixaA5*adicionalA5);
}

function calcularFaturaCategoriaB(consumoregistrado){
    let qtdefaixaB1=10, qtdefaixaB2=0;
    let isfaixaB1=0,isfaixaB2=0;
    const faixaB1=22.84, faixaB2=39.55; 
    const adicionalB1=0, adicionalB2=4.82; 
         if (consumoregistrado <= qtdefaixaB1){
           isfaixaB1=1;
        }else {
            qtdefaixaB2 = consumoregistrado-qtdefaixaB1;
            isfaixaB2=1;
        }    
    console.log("f1: "+(isfaixaB1*faixaB1));
    console.log("f2: "+(isfaixaB2*faixaB2));
   

    console.log("Tarifa: " + (isfaixaB1*faixaB1) + (isfaixaB2*faixaB2));
    
    console.log("a1: "+(qtdefaixaB1*adicionalB1));
    console.log("a2: "+(qtdefaixaB2*adicionalB2));
   
    console.log("Adicional: "+ (isfaixaB1*qtdefaixaB1*adicionalB1) + (isfaixaB2*qtdefaixaB2*adicionalB2));
    
    return (isfaixaB1*faixaB1) + (isfaixaB2*faixaB2) + (isfaixaB1*qtdefaixaB1*adicionalB1) + (isfaixaB2*qtdefaixaB2*adicionalB2);    
}

function calcularFaturaCategoriaC(consumoregistrado){
    let qtdefaixaC1=10, qtdefaixaC2=0;
    let isfaixaC1=0,isfaixaC2=0;
    const faixaC1=54.05, faixaC2=54.05; 
    const adicionalC1=0, adicionalC2=6.14; 
    if (consumoregistrado <= qtdefaixaC1){
        isfaixaC1=1;
      }else {
        qtdefaixaC2 = consumoregistrado-qtdefaixaC1;
        isfaixaC2=1;
    }    
    console.log("f1: "+(isfaixaC1*faixaC1));
    console.log("f2: "+(isfaixaC2*faixaC2));
   

    console.log("Tarifa: " + (isfaixaC1*faixaC1) + (isfaixaC2*faixaC2));
    
    console.log("a1: "+(qtdefaixaC1*adicionalC1));
    console.log("a2: "+(qtdefaixaC2*adicionalC2));
   
    console.log("Adicional: "+ (isfaixaC1*qtdefaixaC1*adicionalC1) + (isfaixaC2*qtdefaixaC2*adicionalC2));
    
    return (isfaixaC1*faixaC1) + (isfaixaC2*faixaC2) + (isfaixaC1*qtdefaixaC1*adicionalC1) + (isfaixaC2*qtdefaixaC2*adicionalC2);    
}
