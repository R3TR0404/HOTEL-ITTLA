<?php
// db_config.php: archivo con la configuración de la base de datos (como en ejemplos anteriores).
require_once 'db_config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $llegada = $_POST['fechaLlegada'];
    $salida = $_POST['fechaSalida'];
    $tipo = $_POST['tipoHabitacion'];

    // Validación básica (puedes agregar más validaciones)
    if (!empty($nombre) && !empty($llegada) && !empty($salida) && !empty($tipo)) {
        try {
            // Conectar a la base de datos
            $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Insertar el nuevo usuario en la base de datos
            $sql = "INSERT INTO usuarios (nombre, email) VALUES (:nombre, :email)";
            $stmt = $pdo->prepare($sql);

            // Vincular los parámetros a las variables
            $stmt->bindParam(':nombre', $nombre);
            $stmt->bindParam(':fechaLlegada', $llegada);
            $stmt->bindParam(':fechaSalida', $salida);
            $stmt->bindParam(':tipoHabitacion', $tipo);

            // Ejecutar la consulta
            $stmt->execute();

            echo "¡Usuario agregado exitosamente!";
        } catch (PDOException $e) {
            // Si hay un error con la conexión o la consulta, mostrar el error
            echo "Error al insertar el usuario: " . $e->getMessage();
        }
    } else {
        echo "Por favor, complete todos los campos.";
    }
}
?>