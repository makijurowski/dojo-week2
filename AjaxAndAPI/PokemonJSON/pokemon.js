

$(document).ready(function() {
  console.log("document is ready");

  
  function pokemonImageLoop(id) {
  console.log("Starting pokemonImageLoop with" + id);
    let newURL = `
      <img id="` + id + `" src="http://pokeapi.co/media/img/` + id + `.png" alt="Pokemon" class="thumbnail">
      <div class="description" id="` + id + `">This is stuff to see.</div>
      `
    console.log("Stopping pokemon image loop with" + id);
    return newURL;
  }

    console.log("starting append URL function");
    for (let i = 1; i <= 151; i++) { 
      var id = i;
      $("#pokemon").append(pokemonImageLoop(id));
      console.log("ending append URL function");
    }

    $(".thumbnail").on("click", ".description", function () {
      //show the description
      console.log("i was clicked", this);
      $(this).children().toggle();
    })
  
  /*

  $.get("http://pokeapi.co/api/v1/pokemon/1/", function (res) {
    console.log(res);
  }, "json");

  $.get("http://pokeapi.co/api/v1/pokemon/1/", function (res) {
    var html_str = "";
    html_str += "<h4>Types</h4>";
    html_str += "<ul>";
    for (var i = 0; i < res.types.length; i++) {
      html_str += "<li>" + res.types[i].name + "</li>";
    }
    html_str += "</ul>";
    $("#bulbasaur").html(html_str);
  }, "json");

  $.get("http://pokeapi.co/api/v1/pokemon/1/", function(res) {
    console.log(res.types[0].name);
    console.log(res.types[1].name);
  }, "json"); 

  $.get("http://pokeapi.co/api/v1/pokemon/1/", function (res) {
    for (var i = 0; i < res.types.length; i++) {
      console.log(res.types[i].name);
    }
  }, "json");
  */

})