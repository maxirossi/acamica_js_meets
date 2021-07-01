import { sumar , restar, multiplicar, dividir, redondear } from '../modules/math.js';

export const title = 'Conversor';

function celciusAFahrenheit(grados)
{
    grados = sumarGrados(grados);
    let conversion = (grados * 1.8) + (32);
    return conversion;
}

function fahrenheitACelcius(grados)
{
    grados = sumarGrados(grados);
    let conversion = (grados - 32) * (5/9);
    return  (grados - 32) * (5/9);
}

function sumarGrados(grados)
{
    return sumar(grados, 1);
}

export { celciusAFahrenheit, fahrenheitACelcius };
