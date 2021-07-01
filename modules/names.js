function saludar(nombre, apellido)
{
    return `Hola ${nombre} ${apellido}`;
}

function contarLetras(nombre)
{
    return `Hola ${nombre}, tu nombre tiene ${nombre}.length`;
}

export { 
    saludar,
    contarLetras
}
