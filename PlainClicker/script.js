/*fetch("https://api.countapi.xyz/get/kuczisa/clicker")
    .then(a=>a.json())
    .then(b=>document.getElementById("clicky").innerHTML = b.value)

  function intensive(){
    fetch("https://api.countapi.xyz/update/kuczisa/clicker/?amount=1")
      .then(a=>a.json())
      .then(b=>document.getElementById("clicky").innerHTML = b.value)

  }

  */

var i = 0;
document.getElementById("clicky").innerHTML = i;


function intensive(){
   i = i + 1;
document.getElementById("clicky").innerHTML = i;

}