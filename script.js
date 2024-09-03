const chave = "456c09595d987ef348793f7604dded4c";

function cliqueiNoBotao() {
    const cidade = document.querySelector(".inputCidade").value;
    buscarCidade(cidade);
}

async function buscarCidade(cidade) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=456c09595d987ef348793f7604dded4c&units=metric`).then(resposta => resposta.json());
    colocaNaTela(dados)
}

function colocaNaTela(dados) {

    document.querySelector(".cidade").innerHTML = `Tempo em ${dados.name}`;
    document.querySelector(".tempo").innerHTML = `${Math.floor(dados.main.temp)}ºC`;
    document.querySelector(".icone").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
    document.querySelector(".umidade").innerHTML = `Umidade:${dados.main.humidity}%`;
    console.log(dados)
}