


// Modal 1
function kpi(idSensor) {

    fetch (`/kpi/kpi1/${idSensor}`).then(response => {
        console.log(response);
    
        if(response.ok) {
            response.json().then(data => {
                if(idSensor == 1){
                    kpi1Max.innerHTML = data[0].max+"°C";
                }else if(idSensor == 2){
                    kpi1Max.innerHTML = data[0].max+"°C";
                }else if(idSensor == 3){
                    kpi1Max.innerHTML = data[0].max+"°C";
                }else {
                    kpi1Max.innerHTML = data[0].max+"°C";
                }

            })
        }
    })

    fetch (`/kpi/kpi2/${idSensor}`).then(response => {
        console.log(response);
    
        if(response.ok) {
            response.json().then(data => {
                if(idSensor == 1){
                    kpi1MaxU.innerHTML = data[0].max+"%";
                }else if(idSensor == 2){
                    kpi1MaxU.innerHTML = data[0].max+"%";
                }else if(idSensor == 3){
                    kpi1MaxU.innerHTML = data[0].max+"%";
                }else {
                    kpi1MaxU.innerHTML = data[0].max+"%";
                }

            })
        }
    })


    fetch (`/kpi/kpi3/${idSensor}`).then(response => {
        console.log(response);
    
        if(response.ok) {
            response.json().then(data => {
                if(idSensor == 1){
                    kpi1Min.innerHTML = data[0].min+"°C";
                }else if(idSensor == 2){
                    kpi1Min.innerHTML = data[0].min+"°C";
                }else if(idSensor == 3){
                    kpi1Min.innerHTML = data[0].min+"°C";
                }else {
                    kpi1Min.innerHTML = data[0].min+"°C";
                }

            })
        }
    })
    
    fetch (`/kpi/kpi4/${idSensor}`).then(response => {
        console.log(response);
    
        if(response.ok) {
            response.json().then(data => {
                if(idSensor == 1){
                    kpi1MinU.innerHTML = data[0].min+"%";
                }else if(idSensor == 2){
                    kpi1MinU.innerHTML = data[0].min+"%";
                }else if(idSensor == 3){
                    kpi1MinU.innerHTML = data[0].min+"%";
                }else {
                    kpi1MinU.innerHTML = data[0].min+"%";
                }
            })
        }
    })
    
    
    fetch (`/kpi/kpi5/${idSensor}`).then(response => {
        console.log(response);
    
        if(response.ok) {
            response.json().then(data => {
                var variacao = data[0].temp - data[1].temp;
                if(idSensor == 1){
                    kpi1Var.innerHTML = variacao.toFixed(1)+"°C";
                    varr.innerHTML ="Variação de temperatura: " + variacao.toFixed(1)+"°C";
                }else if(idSensor == 2){
                    kpi1Var.innerHTML = variacao.toFixed(1)+"°C";
                    var2.innerHTML ="Variação de temperatura: " + variacao.toFixed(1)+"°C";
                }else if(idSensor == 3){
                    kpi1Var.innerHTML = variacao.toFixed(1)+"°C";
                    var3.innerHTML ="Variação de temperatura: " + variacao.toFixed(1)+"°C";
                }else {
                    kpi1Var.innerHTML = variacao.toFixed(1)+"°C";
                    var4.innerHTML ="Variação de temperatura: " + variacao.toFixed(1)+"°C";
                }

            })
        }
    })
    
    
    fetch (`/kpi/kpi6/${idSensor}`).then(response => {
        console.log(response);
    
        if(response.ok) {
            response.json().then(data => {
                var variacao = data[0].umi - data[1].umi;

                if(idSensor == 1){
                    kpi1VarU.innerHTML = variacao+"%";
                }else if(idSensor == 2){
                    kpi1VarU.innerHTML = variacao+"%";
                }else if(idSensor == 3){
                    kpi1VarU.innerHTML = variacao+"%";
                }else {
                    kpi1VarU.innerHTML = variacao+"%";
                }

                
            })
        }
    })
}



