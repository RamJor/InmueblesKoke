
var endpoint = "http://localhost/InmueblesKoke/index-insert.php"
var form = document.getElementsByTagName("form")[0];
var inputsUI = form.getElementsByTagName("input");
var inputId = inputsUI[0];
var inputAvailable = inputsUI[1];
var inputProperty = inputsUI[2];
var inputLocation = inputsUI[3];
var inputPrice = inputsUI[4];
var inputSubmit = inputsUI[5];
console.log(inputSubmit)

var addbutton = document.getElementById('addbutton')
var updatebutton = document.getElementById('updatebutton')
var deletebutton = document.getElementById('deletebutton')


addbutton.addEventListener("click", function p (e,){
    e.preventDefault();

    console.log(inputProperty.value);

//Solo se genera nuevo registro
var xhr = new XMLHttpRequest();
xhr.open( "POST", endpoint, true);
xhr.setRequestHeader ( "Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

xhr.send("proprety=" + inputProperty.value +  "&location=" + inputLocation.value + "&Precio=" + inputPrice.value);

xhr.addEventListener("load", loadInsertData);

})


/*leer un enpoint para accder y leer o mandar información para crear datos*/
// var holder =document.getElementById('holder');

var formulario = document.getElementById('form');




function loadInsertData(e) {
    var dataJson =  JSON.parse(e.target.responseText);
      console.log(dataJson)
}



/*Validando el formularios*/

// formulario.addEventListener ( 'submit', function(e) {
//     e.preventDefault();
//     const id = document.querySelector("").value
//     const price = document.querySelector("").value
//     const property = document.querySelector("").value
//     const locationn = document.querySelector("").value
//     const availablel = document.querySelector("").value
    
// })

