<?php
// Configuración de la base de datos
$host = 'localhost';
$dbname = 'hotel ittla';  // Asegúrate de usar el nombre correcto de tu base de datos
$username = 'root';  // Usuario correcto (usualmente 'root' en WAMP)
$password = '';  // Contraseña (vacía si no tienes contraseña en WAMP)

// Conexión a la base de datos
try {
    // Asegúrate de que las credenciales sean correctas
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Comentado o eliminado para evitar mensajes en producción
    // echo "Conexión exitosa a la base de datos";
} catch (PDOException $e) {
    die("Error al conectar: " . $e->getMessage());
}
?>
