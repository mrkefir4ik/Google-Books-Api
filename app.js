const search = document.querySelector('.search');
const button = document.querySelector('.button');

function searcher () {
  let x = search.value;
  console.log(x);
  $.ajax({
    url: `https://superheroapi.com/api/2777162452537755/search/batman`,
    dataType: "json",
    
    success: function(data){
      console.log(data)
    },

    type: 'GET',

    
  })
}

button.onclick = searcher;