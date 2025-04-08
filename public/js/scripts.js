// // VARIÁVEIS => Um espaço da memória do computador
// // que guardamos algo (um numero, uma letra, um texto, uma imagem)
// // FUNÇÃO => Um trecho de código que só é executado quando
// // é chamado

function colocarNaTela(dados){
	console.log(dados)
	document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
	document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
	document.querySelector(".descricao").innerHTML = dados.weather[0].description
	document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
	document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
}

async function buscarCidade(cidade){

	const resposta = await fetch(`/clima?cidade=${cidade}`)
	const dados = await resposta.json()
	
	console.log('Passei pelo bakc end')

	colocarNaTela(dados)
}


function cliqueiNoBotao(){
	let cidade = document.querySelector(".input-cidade").value
	
	buscarCidade(cidade)
}