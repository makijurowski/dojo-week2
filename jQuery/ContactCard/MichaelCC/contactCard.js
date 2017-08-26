function generateCard(fname, lname, desc) {
  console.log("generating card", fname, lname, desc);
  var card =  `
    <div class="card">
      <h2>`+ fname +` `+ lname +`</h2>
      <h6>Click for details</h6>
      <p style="display: none;">`+ desc +`</p>
    </div>`
  console.log(card);
  $(".cards").append(card)
}

$(document).ready(function() {
  console.log("document is ready");

  $("button").click(function(e) {
    e.preventDefault();
    console.log("e", e);
    console.log(this);
    //you can use id
    var fn = $("#first_name").val();
    //or you can select by tag and attribute value
    var ln = $("input[name='last_name']").val();
    var desc = $("textarea[name='description']").val();
    generateCard(fn, ln, desc)
  })

  $("div.cards").on("click", ".card", function() {
    //show the description
    console.log("i was clicked", this);
    $(this).children().toggle()
  })

  $("form.githubForm").submit(function(e) {
    e.preventDefault()
    console.log(e.target.childNodes);
    let username = $("#username").val()
    $.get("https://api.github.com/users/" + username , function(data) {
      console.log(data);
      generateCard(data.login, data.name, data.bio)
    })
  })

})
