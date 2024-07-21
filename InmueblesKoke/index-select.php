<?php
/*determinar la información para conectarnos a la base de datos*/
$db_host = "localhost";
$db_user = "root";
$db_pass="";
$db_name= "name";
/*nosconecta a una base de datos "x" y válidados*/
$conn=mysqli_connect($db_host, $db_user, $db_pass, $db_name); 
if (!$conn) {
    /*interrumpe la ejecucuión del código y lo siguiente 
    ya no lo ejecuta*/
    die("DB Connection Failed..!");
}
/*cadena que interpreta una <consulta></consulta>*/
$query ="SELECT * FROM NAME";

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
    array_push($all_records, $records)
}

$json_data = [
    "data" => $all_records
]




?>