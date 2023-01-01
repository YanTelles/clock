const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sg = document.querySelector("#sg");


function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function time() {
    api = (fazGet("http://worldtimeapi.org/api/timezone/America/Bahia"));
    retorno = JSON.parse(api);

    let ano = retorno.datetime.split("-")[0];
    let mes = retorno.datetime.split("-")[1];
    let dia = retorno.datetime.split("-")[2].split(":")[0].split("T",1)[0];

    let hh = retorno.datetime.split("-")[2].split(":")[0].split("T")[1] * 30;
    let mm = retorno.datetime.split("-")[2].split(":")[1] * deg;
    let ss = retorno.datetime.split("-")[2].split(":")[2].split(".",1)[0] * deg;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sg.style.transform = `rotateZ(${ss}deg)`;

    setTimeout('time()', 1000);
}

time();
