import React from 'react';
import './App.css';


function Home () {
    const handleOpenNewWindow = () => {
        // Abre una nueva ventana con la URL especificada
        const newWindow = window.open('', '_blank', 'width=800,height=600');
    
        // Verifica si la nueva ventana se ha abierto correctamente
        if (newWindow) {
          // Escribe el contenido HTML para la nueva ventana
        newWindow.document.write(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Reservaciones</title>
            <style>
                /* Estilos básicos para la ventana de reservaciones */
                body {
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
                margin: 0;
                padding: 0;
                }
                .container {
                width: 100%;
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h2 {
                text-align: center;
                color: #333;
                }
                form {
                display: flex;
                flex-direction: column;
                }
                .form-group {
                margin-bottom: 15px;
                }
                label {
                display: block;
                margin-bottom: 5px;
                font-weight: bold;
                }
                input, select, button {
                width: 100%;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 16px;
                }
                button {
                background-color: #4CAF50;
                color: white;
                cursor: pointer;
                border: none;
                transition: background-color 0.3s;
                }
                button:hover {
                background-color: #45a049;
                }
            </style>
            </head>
    
            <body>
            <div class="container">
                <h2>Reservaciones</h2>
                <form action="/reservar" method="POST">
                <div class="form-group">
                    <label for="nombre">Nombre del cliente:</label>
                    <input type="text" id="nombre" name="nombre" required>
                </div>                <div class="form-group">
                    <label for="fechaLlegada">Fecha de llegada:</label>
                    <input type="date" id="fechaLlegada" name="fechaLlegada" required>
                </div>
                <div class="form-group">
                    <label for="fechaSalida">Fecha de salida:</label>
                    <input type="date" id="fechaSalida" name="fechaSalida" required>
                </div>
                <div class="form-group">
                    <label for="tipoHabitacion">Tipo de habitación:</label>
                    <select id="tipoHabitacion" name="tipoHabitacion" required>
                    <option value="sencilla">Sencilla</option>
                    <option value="doble">Doble</option>
                    <option value="suite">Suite</option>
                    </select>
                </div>
                <div class="form-group">
                    <button type="submit">Reservar</button>
                </div>
                </form>
            </div>
            </body>
            </html>
        `);
    
          // Cierra el flujo de escritura del documento
        newWindow.document.close();
        }
    };

    return(
        <section id="home">
        <div className="welcome-text">
            <h2>Bienvenido a Hotel Paradise</h2>
            <p>La mejor experiencia de lujo y confort.</p>
            <button onClick={handleOpenNewWindow} className="btn-reservar">Reservar Ahora</button>
        </div>
        </section>
    );
};

export default Home;