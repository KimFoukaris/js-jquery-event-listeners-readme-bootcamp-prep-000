//define functions here
function getIt() {
  $('p').on('click', function() {
    alert ("Hey!")
  })
}

function pressIt(){
  $('#typing').on('keydown', function(key) {
    if (key.which === 71)
      alert("You pressed G")
})
}

function submitIt() {
  $('form').on("submit", function() {
    alert("Your for is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here
getIt()
pressIt()
submitIt()
});
