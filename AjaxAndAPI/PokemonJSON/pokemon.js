/*jshint esversion: 6 */


$(document).ready(function() {
  // console.log("document is ready");

  
  function pokemonImageLoop(id) {
    // console.log("Starting pokemonImageLoop with" + id);
    let newURL = `
      <div class="thisPokemon" id="` + id + `">
      <img id="` + id + `" src="http://pokeapi.co/media/img/` + id + `.png" alt="Pokemon" class="thumbnail" />
      <p class="description" id="` + id + `">This is stuff to see.</p></div>
    `;
    // console.log("Stopping pokemon image loop with" + id);
    return newURL;
  }

  /*
    `
      <div class="thisPokemon" id="` + id + `">
      <img id="` + id + `" src="http://pokeapi.co/media/img/` + id + `.png" alt="Pokemon" class="thumbnail" />
      <div class="description" id="` + id + `">This is stuff to see.</div>
    `;



    `
      <img id="` + id + `" src="http://pokeapi.co/media/img/` + id + `.png" alt="Pokemon" class="thumbnail">
      <div class="description" id="` + id + `">This is stuff to see.</div>
      `;
  */

    // console.log("starting append URL function");
    for (let i = 1; i <= 151; i++) { 
      var id = i;
      $("#pokemon").append(pokemonImageLoop(id));
      // console.log("ending append URL function");
    }

/*
  function clickThePokemon(id) {

  }
*/
  $(document).on('click', '.thumbnail', function(e) {
    let id = $(this).get(0).id;
    // console.log("myID: " + id);
    let url = "http://pokeapi.co/api/v1/pokemon/" + id;
    // $(this).children().toggle();

    $.get(url, function (res) {
      pokemonInfo = {
        name: res.name,
        types: getPokemonType(),
        height: res.height,
        weight: res.weight,
        id: id,
        url: url,
      };

      function getPokemonType () {
        let pokemonType = [];
        for (let i = 0; i < res.types.length; i++) {
          pokemonType.push(res.types[i].name);
          //res.types[0].name
        }
        return pokemonType;
      }
        //res.types[0].name
    }, "json");
    
    $(this).next().slideToggle('show');

    // console.log(url);

    // console.log("I was clicked, my ID is " + id);
  });

  });
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
