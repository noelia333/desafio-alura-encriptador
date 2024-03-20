const mapaEncriptacion = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const mapaDesencriptacion = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
};

function encriptarTexto(texto) {
    return texto.replace(/[aeiou]/g, letra => mapaEncriptacion[letra]);
}

function desencriptarTexto(texto) {
    return texto.replace(/enter|imes|ai|ober|ufat/g, letra => mapaDesencriptacion[letra]);
}

function encriptarYMostrar() {
    var texto = document.querySelector('.ingresar-texto').value;
    var textoEncriptado = encriptarTexto(texto);
    document.querySelector('.texto-copiar').value = textoEncriptado;
}

function desencriptarYMostrar() {
    var texto = document.querySelector('.ingresar-texto').value;
    var textoDesencriptado = desencriptarTexto(texto);
    document.querySelector('.texto-copiar').value = textoDesencriptado;
}

function copiarTexto() {
    var textoACopiar = document.querySelector('.texto-copiar');
    textoACopiar.select();
    document.execCommand('copy');
    alert('Texto copiado con exito !!!');
    textoACopiar.value = '';
}



