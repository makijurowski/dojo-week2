

function pokemonImageLoop(totalNum) {
  console.log("Starting to loop through images");
  for (let i = 1; i <= totalNum; i++) { 
    console.log("Starting loop through images starting with" + i);
    let newURL = `
       <div class="pokemonImage">
        <img src="http://pokeapi.co/media/img/` + i + `.png" alt="Pokemon"> 
        </div>`
        console.log("Stopping loop through images starting with" + i);
    return newURL;
  }
}

$(document).ready(function() {
  console.log("document is ready");

  $("#wrapper").append(pokemonImageLoop(151));

})