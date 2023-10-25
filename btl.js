// window.alert("Hello mấy con gà!")
var checkbox1 = document.getElementsByClassName("checkbox1");
var a=true;
function change() {
  for (var i = 0; i < checkbox1.length; i++) {
    checkbox1[i].checked = a ;
  }
  if(a) a=false;
  else a=true;
};

function clickchangecolor(c){
  let checkbox2 = c.querySelector("input");
  if(checkbox2.checked){
    checkbox2.checked= false;
  }
  else{
    checkbox2.checked= true;
  }
}
function anhien(tag){
  var tag1 = document.getElementsByClassName(tag);
  for(var i=0;i<tag1.length;i++){
    tag1[i].classList.toggle("d-none");
  }
}