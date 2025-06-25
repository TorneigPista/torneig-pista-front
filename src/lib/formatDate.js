/**
 * Convierte una fecha a la máscara solicitada.
 *
 * Tokens disponibles:
 *  YYYY | YY   → año (4 / 2 dígitos)
 *  MM   | M    → mes (01-12 / 1-12)
 *  DD   | D    → día (01-31 / 1-31)
 *  HH   | H    → horas 24 h (00-23 / 0-23)
 *  mm   | m    → minutos (00-59 / 0-59)
 *  ss   | s    → segundos (00-59 / 0-59)
 *
 * Ejemplos:
 *  formatDate('2025-06-25 15:30', 'DD/MM/YYYY')  → "25/06/2025"
 *  formatDate(new Date(),           'YYYY-MM-DD HH:mm') → "2025-06-25 15:30"
 */
export function formatDate(fecha_programada, formatReturn = 'DD-MM-YYYY') {
    const date = new Date(fecha_programada);
    if (isNaN(date)) return '';               // fecha inválida

    // helper para rellenar con 0 a la izquierda
    const pad = (n) => String(n).padStart(2, '0');

    // partes
    const parts = {
        YYYY: date.getFullYear(),
        YY: String(date.getFullYear()).slice(-2),
        MM: pad(date.getMonth() + 1),
        M: date.getMonth() + 1,
        DD: pad(date.getDate()),
        D: date.getDate(),
        HH: pad(date.getHours()),
        H: date.getHours(),
        mm: pad(date.getMinutes()),
        m: date.getMinutes(),
        ss: pad(date.getSeconds()),
        s: date.getSeconds(),
    };

    // sustituye todos los tokens que existan en la máscara
    return Object.entries(parts).reduce(
        (out, [token, value]) => out.replaceAll(token, value),
        formatReturn
    );
}