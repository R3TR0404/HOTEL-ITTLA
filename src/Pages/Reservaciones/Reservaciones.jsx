import React from "react";
function Reservaciones  () {
    return(
        <section className="reservaciones">
            <div className="container">
            <h2>Reservaciones</h2>
            <form action="/reservar" method="POST">
            <div className="form-group">
                <label for="nombre">Nombre del cliente:</label>
                <input type="text" id="nombre" name="nombre" required></input>
            </div>
            <div class="form-group">
                <label for="fechallegada">Fecha de llegada</label>
                <input type="date" id="fechaLlegada" name="fechaLlegada" required></input>
            </div>
            <div class="form-group">
            <label for="fechaSalida">Fecha de salida:</label>
            <input type="date" id="fechaSalida" name="fechaSalida" required></input>
            </div>
            <div class="form-group">
                <label for="tipoHabitacion">Tipo de habitación:</label>
                <select id="tipoHabitacion" name="tipoHabitacion" require>
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
        </section>
    );
};

export default Reservaciones;