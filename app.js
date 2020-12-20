const search = document.querySelector('.search');
const button = document.querySelector('.button');

function searcher () {

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://the-one-api.dev/v2/book",
    "method": "GET",
    "headers": {
      "Authorization": "5eOAh3-2Ozp0GFsspTCC"
    }
  }





  let x = search.value;
  console.log(x);
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });


}

button.onclick = searcher;