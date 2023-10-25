window.alert("hihi");
var show_quantity = document.getElementById("show_quantity");
show_quantity.onchange = function(){
    let a= show_quantity.options[show_quantity.selectedIndex].value;
    document.write(a);
}