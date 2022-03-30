
 
 

var nome;
  function buscapokemon(nome) {
       
    var requestURL = 'https:pokeapi.co/api/v2/pokemon/' + nome;
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
var data = request.response;
if(data && nome != ""){
    var altura = data.height/3.2808;
    var msg = "<img id='poke-img' src='" +  data.sprites.front_default +"' alt='foto do pokemon'>"
    msg += "<h3>Nome: " + data.name + "</h3>";
    msg +="<h3>Número na pokedéx: " + data.game_indices[4].game_index + "</h3>";
    msg +="<h3>peso: " + data.weight + " kg</h3>";
    
    msg +="<h3>altura: " + altura.toFixed(2) + " m</h3>";
    
    msg +="<h3>Tipo: " + data.types[0].type.name + "</h3>";
    
    msg +="<h3>Ataque 1: " + data.moves[0].move.name + "</h3>";
    
    msg +="<h3>Ataque 2: " + data.moves[1].move.name + "</h3>";
    
    msg +="<h3>Ataque 3: " + data.moves[2].move.name + "</h3>";
    
    msg +="<h3>Ataque 4: " + data.moves[3].move.name + "</h3>";
    $("#info").css("visibility", "visible");
    $("#info").html(
    msg
    );
     
    }
else{
   alert("parece que esse pokémon não existe. Por favor tente colocar outro nome.");
}
$("#busca").click(function(){
  $("#info").css("visibility", "hidden");
  $("#poke-img").attr("src", "");
});
$("#zerar").click(
function zerar(){
  $("#info").css("visibility", "hidden");
  $("#busca").value("");
  $("#poke-img").attr("src", "");
});
}
          }
        
            function random(){
              var numero = parseInt(Math.random() * 493);
              buscapokemon(numero);
           console.log(numero);
            }