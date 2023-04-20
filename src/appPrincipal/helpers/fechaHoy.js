

export const fechaHoy = () => {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    const fecha = hoy.toISOString();
    return fecha;
}
