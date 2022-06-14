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
    <button class="receitas"onclick="bolinho_arroz()">Bolinho de Arroz Assado</button>
    
    <button class="receitas"onclick="carne()">Carne com Casca de Banana</button>
    
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
    document.getElementById("I.A").innerHTML = `<div id="conteudo">
  <div id="header">
    <div id="perfil" class="bot_icon">
      <img src="icon_bot.png" alt="" />
    </div>
    <h3 id="perfil">Robson</h3>
  </div>
  <div id="dcr">
    <h1>Curiosidades</h1>
    <br>
    <p>*931 milhões de toneladas de alimentos desperdiçados no mundo. Isso sugere que 17% da produção total de alimentos do mundo foram para o lixo.</p>
    <br>
    <p>*Em um ano o Brasil desperdiça cerca de 27 milhões de toneladas de alimentos, sem nem um reaproveitamento.</p>
    
    <br>
    <p>*A França ficou em primeiro lugar na lista de um novo indice quemede a sustentabilidade dos alimentos, principalmente porque tem políticas inovadoras de combate ao desperdício de alimentos e porque a população tem uma dieta balanceada.</p> 
    <br>
    <p>*Brasil está em 20º lugar na lista</p>  
    <br>
    <p>*Os países que estão com os piores índices da lista são Índia, Arábia Saudita e Egito, por terem pela frente o desafio de lidar com a obesidade e má-nutrição da população. Nestes países, o uso dos recursos – especialmente da água – é considerado insustentável. </p>

    

  </div>
  <div id="footer">
  <input id= "refresh"class="butão" type="button" value="Voltar" onClick="window.location.reload()">
    
  </div>
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
    document.getElementById("I.A").innerHTML = `<div id="conteudo">
  <div id="header">
    <div id="perfil" class="bot_icon">
      <img src="icon_bot.png" alt=""/>
    </div>
    <h3 id="perfil">Robson</h3>
  </div>
  <div id="dcr">
    <h1>Dicas</h1>
    <br>
    <p>*Normalmente, Quando usamos algum alimento como a polpa da fruta para fazer o suco, jogamos o resto fora. Mas, os talos, as cascas, sementes podem sim ser reaproveitadas para fazer um prato cheio de nutrientes. Aproveite 100% dos seus alimentos sempre que possível</p>
    <br>
    <p>*Separe o lixo:</p>
    <p>Além da reciclagem ajudar o meio ambiente, separar o lixo por etapas pode ser bom até para plantações. Pois o material orgânico( restos de comida) podem servir de adubo para as plantações.</p>
    <br>
    <p>*Reutilize embalagens:</p>
    <p>Pote de requeijão feito como copo depois do uso?! Isso já é um hábito sustentável.
    Reutilizar embalagens de alimentos plásticas ou de vidro, nos motivam a consumir menos.</p>
    <br>
    <p>*Valorize o consumo de produtos orgânicos:</p>
    <p>Os alimentos orgânicos passam por um processo de produção sustentável em todas as suas fases, com o objetivo de amenizar os danos causados ao meio ambiente.</p>
    
    

  </div>
  <div id="footer">
  <input id= "refresh"class="butão" type="button" value="Voltar" onClick="window.location.reload()">
    
  </div>
</div>`
  }, 2000) 
}
