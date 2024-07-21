CREATE DATABASE IF NO EXISTS inmueblesbase;

USE inmueblesbase;

CREATE TABLE propietarios (
id propietario INT AUTO_INCREMENT PRIMARY KEY, 
available BOOLEAN,
proprety VARCHAR,
`location` BOOLEAN,
preci INT
);  