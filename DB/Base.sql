CREATE DATABASE IF NO EXISTS inmueblesbase;

USE inmueblesbase;

CREATE TABLE propietarios (
id propietario INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
available BOOLEAN DEFAULT TRUE,
proprety VARCHAR(255) NOT NULL,
`location` BOOLEAN NOT NULL,
Precio INT(11) NOT NULL
);

INSERT INTO propietarios VALUES ( NULL, DEFAULT, "Aparment E&R 2024", true, 20000);
INSERT INTO propietarios VALUES ( NULL, DEFAULT, "New Aparment E&R 2025", true, 8000);
INSERT INTO propietarios VALUES ( NULL, DEFAULT, "Tiny House E&R 2025", true, 28000);

SELECT * FROM propietarios;