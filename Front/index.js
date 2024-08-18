/*leer un enpoint para accder y leer o mandar información para crear datos*/
var holder =document.getElementById('holder');
var formulario = document.getElementById('form');
var endpoint="http://localhost/InmueblesKoke/conexion.php";
/*Utilizar metodo open; el metodo GET para obtener información*/
var xhr = new XMLHttpRequest();
xhr.open( "GET", endpoint, true);
xhr.send();
xhr.addEventListener("load", loadSelectedData);
/*Deicirle  a la peticion que espere a cuando se carguen los datos*/


/*lo que recibimos es la info del database*/
function loadSelectedData(e) {
    /*el evento request tiene un eventoresponse que se visualiza
    consola*/
    /*procesando en formato JSON*/
    var dataJson =  (JSON.parse(e.target.responseText).data);
    /*metodo stringify lo muestra en cadenas y parse lo convierte en un arreglo*/
    dataDomInsert (dataJson);
    console.log(dataDomInsert)
    /* si la petición viene con un formato de arreglo la consola regresara un error*/
    /*estos datos van en el div holder*/
    
    
    
}

function dataDomInsert(arrayData) {
    var domContent=""
    for (let i = 0, l= arrayData.length; i < l; i++) {
        console.log(arrayData[i]);
        domContent += "<h2>"+arrayData[i].id + " -"+ arrayData[i].proprety+ "</h2>" +
        "<p> Location:" + arrayData[i].location + " </p>" +
        "<p> Price:" + arrayData[i].Precio + "</p>" ;
        
    }

    holder.innerHTML= domContent;
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

