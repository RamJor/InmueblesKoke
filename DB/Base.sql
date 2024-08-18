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

--Hard delete y soft delete: Se refieren a que úedes eliminar la info de una base de datos
--O solo simular que  estas eliminando esa info de la base de datos
--Ejemplo, ocultar información y no se muestra pero no esta eliminado

--Para actualizar un registro utilizaremos UPDATE
-- mysql> UPDATE inmueblesbase SET campo que nos interese actualizar|la llave primaria no se puede modificar
--(available=FALSE);
--mysql UPDATE propietarios SET available=FALSE WHERE id=39;
--Si queremos actualizar un rango del campo price
--mysql UPDATE propietarios SET price=2800 WHERE price=2000;

--Simular que un registro este eliminado
-- Soft delete Que todos los registros con cierto precio no este
mysql UPDATE propietarios SET available=FALSE WHERE price=3700;

--Mostrar unicamente a los registros que si estan disponibles available = TRue
mysql> SELECT * FROM propietario WHERE available = TRUE;

--Este es el concepto de soft DELETE 0 = borrados y 1 = Disponibles

--Hard DELETE
--Ventaje estamos eliminando información innecesaria
mysql> DELETE FROM propietarios WHERE id = 39;
--Que elimine un conjunto de registro
mysql> DELETE FROM propietarios WHERE id>=4 AND id<= 6;
