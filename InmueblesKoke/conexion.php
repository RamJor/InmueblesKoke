<?php

$server = "localhost";
$user = "root";
$pass= "";
$db= "test";


$conexion = new mysqli($server, $user, $pass, $db);

if ($conexion->connect_errno) {
    die("Conexion Fallida" . $conexion->connect_errno);

} else {
   
}
<?php

$server = "localhost";
$user = "root";
$pass= "";
$db= "test";


$conexion = new mysqli($server, $user, $pass, $db);

if ($conexion->connect_errno) {
    die("Conexion Fallida" . $conexion->connect_errno);

} else {
    
}
header( "Access-Control-Allow-Origin: *" );
$json_data = [
	"data" => [
		[
			"id" => 1,
			"available" => 1,
			"property" => "Aparment E&R 2024",
			"location" => 1,
			"price" => 20000
		],
		[
			"id" => 2,
			"available" => 1,
			"property" => "New Aparment E&R 2025",
			"location" => 1,
			"price" => 8000
		]
	]
];

echo json_encode( $json_data );


?>
?>
