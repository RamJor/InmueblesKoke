

var form = document.getElementsByTagName("form")[0];
var inputsUI = form.getElementsByTagName("input");
var inputId = inputsUI[0];
var inputAvailable = inputsUI[1];
var inputProperty = inputsUI[2];
var inputLocation = inputsUI[3];
var inputPrice = inputsUI[4];
var inputSubmit = inputsUI[5];
console.log(inputSubmit)



inputSubmit.addEventListener("click", function p (e,){
    e.preventDefault();

    console.log(inputProperty.value);
    var dataLocation= inputProperty.value;
    var DataPrecio= inputProperty.value;

//Solo se genera nuevo registro
xhr.open( "POST", endpoint, true);

xhr.setRequestHeader ( "Content-Type", "application/x-www-form-urlencoded");

xhr.send("id=" + inputId + "proprety=" + dataProprety +  "&location=" + dataLocation + "&precio=" + DataPrecio );

xhr.addEventListener("load", loadInsertData);

})


/*leer un enpoint para accder y leer o mandar información para crear datos*/
var holder =document.getElementById('holder');
var endpoint = "http://localhost/InmueblesKoke/index-insert.php"
var formulario = document.getElementById('form');

var xhr = new XMLHttpRequest();


function loadInsertData(e) {
    
    var dataJson =  JSON.parse(e.target.responseText);
   
      console.log(dataJson)
      //función que limpia todos los inputs
      form.reset();
  
    
    
    
}
