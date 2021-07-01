
function sumar(n1,n2) 
{
    return (n1+n2);
}

function multiplicar(n1,n2) 
{
    return (n1*n2);
}

function dividir(n1,n2) 
{
    return (n1/n2);
}

function restar(n1,n2)
{
    return (n1-n2);
}


function redondear(num, decimales)
{
    return num.toFixed(decimales);
}

export { sumar, restar, multiplicar, dividir, redondear };

