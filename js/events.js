//define functions here
function getIt() {
  $('p').on('click', function() {
    alert ("Hey!")
  })
}
$('#typing').on('keydown', function(key) {
  if (key.which === 71)
    alert("You pressed G")
})
}

$(document).ready(function(){

// call functions here
getIt()
pressIt()
});
