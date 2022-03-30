var nomePokemon;
var fase;
var faseNum;
var x = 5 
const interval = setInterval(function() {
    faseNum = localStorage.getItem("fasenum")
    if($(".fase-num").text){
    $(".fase-num").text(faseNum)
    }
  }, 1000);
if(localStorage.getItem("fase")){
    faseNum = localStorage.getItem("fasenum")
    $(".fase-num").text(faseNum)
}
else{
    localStorage.setItem("fasenum", "1");
    localStorage.setItem("fase", "10");
}
function quem(){
    var requestURL = 'https:pokeapi.co/api/v2/pokemon/' + parseInt(Math.random() * localStorage.getItem("fase"));
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
var data = request.response;
if(data != ""){
    var img = "<h3>Você sabe o nome?</h3>";
    img += "<img id='poke-img' src='" +  data.sprites.front_default +"' alt='foto do pokemon'>"
    nomePokemon = data.name;
      $(".img-pokemon").html(img);
    $("#nome-escrito").css("visibility", "visible");
    $("#testa-nome").css("visibility", "visible");
    $(".img-pokemon").css("visibility", "visible");
}
}}
function testaNome(){
    if($("#nome-escrito").val() == nomePokemon){
      acertou();
      quem()
      reseta()
    }
    else{
        errou(nomePokemon);
        quem()
        reseta()
    }
}
function NextFase(){
    
fase = parseInt(localStorage.getItem("fase"));
faseNum = parseInt(localStorage.getItem("fasenum"));
if(fase + 20<498){
aumentaNivel();
} 
else{
    localStorage.setItem("fase", 498);
    faseNum = 26;
    localStorage.setItem("fasenum", faseNum)
} 


}
function AnteriorFase(){
    
    fase = localStorage.getItem("fase");
    faseNum = localStorage.getItem("fasenum");
    if(fase - 20>1){
    diminuiNivel();
    }
    else{
        localStorage.setItem("fase", 10);
        faseNum = 1
        localStorage.setItem("fasenum", faseNum)
    }
    
    
    
    }

    function acertou(){
        swal({
            title: "Você acertou!",
            text: "Você quer aumentar a dificuldade????",
             buttons: ["Sim", "Não"],
          })
          .then((aumento) => {
            if (aumento) {
                swal("O nível não foi aumentado!");
            } else {
            
              swal("Nível aumentado!", {
                icon: "success",
              });
              aumentaNivel()
              quem()
            }
          });
    }
    function errou(){
        swal("Você errou!", "a resposta certa é: " + nomePokemon)

        quem()
    }
    function aumentaNivel(){
        fase = parseInt(localStorage.getItem("fase"));
faseNum = parseInt(localStorage.getItem("fasenum"));
fase = fase + 20;
faseNum++;
localStorage.setItem("fase", fase)
localStorage.setItem("fasenum", faseNum)
} 
    function diminuiNivel(){
        fase = localStorage.getItem("fase");
    faseNum = localStorage.getItem("fasenum");
    fase = fase - 20;
    faseNum--;
    localStorage.setItem("fase", fase)
    localStorage.setItem("fasenum", faseNum)
    }
    function reseta(){
        $("#nome-escrito").val(null)
        console.log("reseta")
    }