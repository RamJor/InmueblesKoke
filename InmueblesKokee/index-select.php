<?php
header( "Access-Control-Allow-Origin:*" );

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "inmuebleskoke";

$proprety_data 	= $_POST[ "property" ];
$location_data 	= $_POST[ "location" ];
$Precio_data 	= $_POST[ "Precio" ];

$conn = mysqli_connect( $db_host, $db_user, $db_pass, $db_name );
if( ! $conn ) { die( "DB Connection failed..!" ); }

#Realizando una cadena query para realizar la consulta
$query = "INSERT INTO draftproperties VALUES( NULL, DEFAULT, '$property_data', $location_data, $price_data )";
$query_result = mysqli_query( $conn, $query);

$json_data = [
	"status" => "New record created"
];

echo json_encode( $json_data );
?>

<!-- <?php
header("Access-Control-Allow-Origin: *");
/*determinar la información para conectarnos a la base de datos*/
$db_host = "localhost";
$db_user = "root";
$db_pass="";
$db_name= "inmuebleskoke";


/*Recibiendo datos de otro lugar*/


/*nosconecta a una base de datos "x" y válidados*/
$conn=mysqli_connect($db_host, $db_user, $db_pass, $db_name); 
if (!$conn) {
    /*interrumpe la ejecucuión del código y lo siguiente 
    ya no lo ejecuta*/
    die("DB Connection Failed..!");
}
/*cadena que interpreta una <consulta></consulta> la consulta cambia de cuerdo 
a la tarea CRUD acá haremos un insert-post*/
$query ="INSERT INTO propietarios VALUES()";

/*hace una consulta en mysql; nos pide una conexion a 
la base de datos "conn" y una cadena que represente una consulta*/
$query_result = mysqli_query($conn, $query); 

/*almacenar toda la información de la db*/
$all_records = [];

/* utilizamos while para iterar los datos
mysqli_fetch_assoc() esta función devuelve los datos
como un arreglo asociativo, pero solo toma el primer indice
[0]*/
while ($record = mysqli_fetch_assoc($query_result)) {
    /*utilizamos el metodo array_push(array"donde lo vamos
    a meter", var"dato
    que vamos a meter")*/
    array_push($all_records, $record);
}

$json_data = [
    "data" => $all_records
];


echo json_encode( $json_data );

?> -->