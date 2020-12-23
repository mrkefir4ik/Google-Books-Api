const randomQuote = require('random-lotr-movie-quote');
const quote_button =  document.querySelector('.give_quote');
const search = document.querySelector('.search');
const button = document.querySelector('.button');
const app = document.querySelector('.app');

function searcher () {
  if(document.querySelector('.quote')){
    app.removeChild(document.querySelector('.quote'));
  }


 let results = document.querySelectorAll('.result');
 results.forEach(e =>{
  e.parentNode.removeChild(e);
 })

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://the-one-api.dev/v2//character?name=/${search.value}/i`,
    "method": "GET",
    "headers": {
      "Authorization": "Bearer 5eOAh3-2Ozp0GFsspTCC"
    }
  }



  let x = search.value;
  console.log(search.value);
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    response.docs.forEach(e =>{
      let div = document.createElement('div');
      div.className = "result";
      div.innerHTML = `
      <strong>Name:</strong>${e.name} <br><br>
      <strong>Race:</strong>${e.race} <br><br><strong>Birth:</strong>${e.birth} <br><br>
      <strong>Death:</strong>${e.death} <br> <br>
      <strong>Gender:</strong>${e.gender} <br><br>
      <strong>Hair:</strong>${e.hair} <br><br>
      <strong>Height:</strong>${e.height} <br><br>
      <strong>Realm:</strong>${e.realm} <br><br>
      <strong>Spouse:</strong>${e.spouse} <br><br>
      <strong>Learn more about ${e.name} <a href="${e.wikiUrl}">here</a></strong>`;
      app.append(div);
    })
  });


}

button.onclick = searcher;


//random quote
quote_button.onclick = function(){
  if(document.querySelector('.quote')){
    app.removeChild(document.querySelector('.quote'));
  }

  let results = document.querySelectorAll('.result');
  results.forEach(e =>{
   e.parentNode.removeChild(e);
  })
 let q = randomQuote();

let div_quote = document.createElement('div');
      div_quote.className = "quote";
      div_quote.innerHTML = `<blockquote>"${q.dialog}"</blockquote><h3>${q.char}</h3><h3>${q.movie}</h3>`;
      app.append(div_quote);

}
