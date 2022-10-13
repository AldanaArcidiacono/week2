export function add(a, b) {
    // if (a === 0 || b === 0) {
    //     return 'Error';
    // }
    return +a + Number(b);
}

export function subtraction(a, b) {
    return a - b;
}

export function division(a, b) {
    const zeroError = new Error('No se puede dividir por cero');
    const paramError = new Error('Error: Parámetros no válidos');
    if (a === 0 || b === 0) {
        throw zeroError;
    }
    if (a === null || b === null) {
        throw paramError;
    }
    if (isNaN(a) || isNaN(b)) {
        throw paramError;
    }
    return a / b;
}
