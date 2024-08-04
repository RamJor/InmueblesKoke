

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

    var dataProprety= inputProperty.value;
    var dataLocation= inputProperty.value;
    var DataPrecio= inputProperty.value;
     
   info(dataProprety,dataLocation,DataPrecio)

})



/*leer un enpoint para accder y leer o mandar información para crear datos*/
var holder =document.getElementById('holder');
var endpoint = "http://localhost/InmueblesKoke/index-insert.php"
var formulario = document.getElementById('form');
/*Ejemplo de mandar la información*/
var xhr = new XMLHttpRequest();
xhr.open( "POST", endpoint, true);
/*Tipo e formato que vamos a enviar; Se necesita cuando enviamos información
con la intención de que el endpoint sepa el formato que llevará*/
xhr.setRequestHeader ( "Content-Type", "application/x-www-form-urlencoded");
/*Generando una variables de envioen URL dependiendo de la herramienta se agrega
los formatos de concatenación*/
/*Estos dato son los que se enviaran al endpoint*/

xhr.send("proprety=" + dataProprety +  "&location=" + dataLocation + "&precio=" + DataPrecio );


xhr.addEventListener("load", loadInsertData);
/*Deicirle  a la peticion que espere a cuando se carguen los datos*/


/*lo que recibimos es la info del database*/
function loadInsertData(e) {
    /*el evento request tiene un eventoresponse que se visualiza
    consola*/
    /*procesando en formato JSON*/
    var dataJson =  JSON.parse(e.target.responseText);
    /*metodo stringify lo muestra en cadenas y parse lo convierte en un arreglo*/
    /*dataDomInsert (dataJson);*/  
      console.log(dataJson)
    /* si la petición viene con un formato de arreglo la consola regresara un error*/
    /*estos datos van en el div holder*/
    
    
    
}

/*function dataDomInsert(arrayData) {
 
 
}

/*Validando el formularios*/

formulario.addEventListener ( 'submit', function(e) {
    e.preventDefault();
    const id = document.querySelector("").value
    const price = document.querySelector("").value
    const property = document.querySelector("").value
    const locationn = document.querySelector("").value
    const availablel = document.querySelector("").value
    
})

