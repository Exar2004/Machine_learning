function dados() {
    const iphone = [
        {tag: "Iphone 15",qtd: 33},
        {tag: "Iphone 14",qtd: 24},
        {tag: "Iphone 13",qtd: 20},
        {tag: "Iphone 12",qtd: 18},
        {tag: "Iphone 11",qtd: 13}
    ]

    let aparelho = document.getElementById("entrada").value;

    for (let i = 0; i < iphone.length; i++) {

        if (aparelho == iphone[i].tag) {

            const qtdAparelho = iphone[i].qtd;

            let x = qtdAparelho/iphone[0].qtd

            if(x <= 1 && x >= 0,90) {
                console.log("Excelente");
                alert("Excelente", "")
            } 
            // else if(qtdAparelho == iphone[1].qtd) {
            //     console.log("Bom");
            //     alert("Bom", "")
            // } else if(qtdAparelho == iphone[2].qtd) {
            //     console.log("Razoável");
            //     alert("Razoável", "")
            // }else if(qtdAparelho == iphone[3].qtd) {
            //     console.log("Ruim");
            //     alert("Ruim", "")
            // }else if(qtdAparelho == iphone[4].qtd) {
            //     console.log("Péssimo");
            //     alert("Péssimo", "")
            // }

        }else{
            alert("Não avaliado", "")
        }

    }     

}