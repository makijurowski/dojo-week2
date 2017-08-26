

$(document).ready(function() {
  console.log("document is ready");

  function pokemonImageLoop(id) {
  console.log("Starting pokemonImageLoop with" + id);
    let newURL = `
        <img src="http://pokeapi.co/media/img/` + id + `.png" alt="Pokemon" class="thumbnail">`
    console.log("Stopping pokemon image loop with" + id);
    return newURL;
  }

    console.log("starting append URL function");
    for (let i = 1; i <= 151; i++) { 
      var id = i;
      $("#wrapper").append(pokemonImageLoop(id));
      console.log("ending append URL function");
    }

})