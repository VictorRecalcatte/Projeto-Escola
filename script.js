function receitas(){
  console.log("entrou em receitas")
  setTimeout(() => {
    document.getElementById('msg').innerHTML =
      '<p class="message" id="msg_bot">Olá! O que você quer saber sobre sustentabilidade?</p><p class="message" id="msg_client">Receitas</p>'
  }, 100)
  setTimeout(() => {
    document.getElementById('msg').innerHTML =
      '<p class="message" id="msg_bot">Olá! O que você quer saber sobre sustentabilidade?</p><p class="message" id="msg_client">Receitas</p><p class="message" id="msg_bot">OK. Carregando receitas!</p>'
  }, 500)

  

  setTimeout(() => {
    document.getElementById('msg').innerHTML =`
    <button class="receitas" onclick="pizza_fingida()">Pizza Fingida</button>
    <button class="receitas"onclick="panquecas_verde()">Panqueca Verde</button>
    `
  }, 2000)
  
  setTimeout(() => {
  document.getElementById("footer").innerHTML= `<div id="footer">
  <input id= "refresh"class="butão" type="button" value="Voltar" onClick="window.location.reload()">
    
  </div>`
  }, 2000)
    

}


function curiosidades(){
  console.log("entrou em curiosidades")
  setTimeout(() => {
    document.getElementById('msg').innerHTML =
      '<p class="message" id="msg_bot">Olá! O que você quer saber sobre sustentabilidade?</p><p class="message" id="msg_client">Curiosidades</p>'
  }, 100)
  setTimeout(() => {
    document.getElementById('msg').innerHTML =
      '<p class="message" id="msg_bot">Olá! O que você quer saber sobre sustentabilidade?</p><p class="message" id="msg_client">Curiosidades</p><p class="message" id="msg_bot">OK. Carregando Curiosidades!</p>'
  }, 500)

  

  setTimeout(() => {
    document.getElementById('msg').innerHTML =`
    <h1>Não tem ainda :)</h1>
    `
  }, 2000)

  setTimeout(() => {
    document.getElementById("footer").innerHTML= `<div id="footer">
    <input id= "refresh"class="butão" type="button" value="Voltar" onClick="window.location.reload()">
      
    </div>`
    }, 2000)
}



function dicas(){
  console.log("entrou em dicas")
  setTimeout(() => {
    document.getElementById('msg').innerHTML =
      '<p class="message" id="msg_bot">Olá! O que você quer saber sobre sustentabilidade?</p><p class="message" id="msg_client">Dicas</p>'
  }, 100)
  setTimeout(() => {
    document.getElementById('msg').innerHTML =
      '<p class="message" id="msg_bot">Olá! O que você quer saber sobre sustentabilidade?</p><p class="message" id="msg_client">Dicas</p><p class="message" id="msg_bot">OK. Carregando Dicas!</p>'
  }, 500)

  

  setTimeout(() => {
    document.getElementById('msg').innerHTML =`
    <h1>Não tem ainda :)</h1>
    `
  }, 2000)

  setTimeout(() => {
    document.getElementById("footer").innerHTML= `<div id="footer">
    <input id= "refresh"class="butão" type="button" value="Voltar" onClick="window.location.reload()">
      
    </div>`
    }, 2000)
}