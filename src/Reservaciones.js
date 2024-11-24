import React from "react";
import './Reservaciones.css';

function Reservaciones(){
    return (
        <div className="container">
        <h2>Reservaciones</h2>
        <form action="/reservar" method="POST">
            <div className="form-group">
            <label htmlFor="nombre">Nombre del cliente:</label>
            <input type="text" id="nombre" name="nombre" required />
            </div>
            <div className="form-group">
            <label htmlFor="fechaLlegada">Fecha de llegada:</label>
            <input type="date" id="fechaLlegada" name="fechaLlegada" required />
            </div>
            <div className="form-group">
            <label htmlFor="fechaSalida">Fecha de salida:</label>
            <input type="date" id="fechaSalida" name="fechaSalida" required />
            </div>
            <div className="form-group">
            <label htmlFor="tipoHabitacion">Tipo de habitación:</label>
            <select id="tipoHabitacion" name="tipoHabitacion" required>
                <option value="sencilla">Sencilla</option>
                <option value="doble">Doble</option>
                <option value="suite">Suite</option>
            </select>
            </div>
            <div className="form-group">
            <button type="submit">Reservar</button>
            </div>
        </form>
        </div>
    );
};

export default Reservaciones;