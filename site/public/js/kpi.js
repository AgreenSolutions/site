
var kpi1U = document.getElementById("kpi1MaxU");


function kpis() {
fetch ("/kpi/kpi1").then(response => {
    console.log(response);

    if(response.ok) {
        response.json().then(data => {
            console.log("AAAAAAAAA ",data);
            kpi1Max.innerHTML = data[0].max+"°C";
        })
    }
})
}
