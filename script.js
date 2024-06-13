

(function() {
    'use strict';

//sacar llave

    var mensajesBody = [];
    var idsDiv = [];
    // Obtener el lemento `<div>`
    var parrafoElemento = document.querySelector('p');
    var textoParrafo = parrafoElemento.textContent;
    var llave = textoParrafo.replace(/[^A-Z]/g, '');
    console.log("La llave es: " + llave);

    var divs = document.getElementsByTagName('div');
    var ids = [];
    //almacenamos los mensajes cifrados en un arreglo
    for (var i = 0; i < divs.length; i++) {
        var id = divs[i].id;
        if (id) {
            ids.push(id);
        }
    }
    console.log("Los mensajes cifrados son: " + divs.length);


    //desencriptar
    var des = [];
    var config = {
        mode: CryptoJS.mode.ECB
    };
    //desciframos los mensajes con 3DES
    var key = CryptoJS.enc.Utf8.parse(llave);
    for (var j = 0; j < ids.length; j++) {
        var aux = CryptoJS.TripleDES.decrypt(ids[j], key, config).toString(CryptoJS.enc.Utf8);
        des.push(aux);
    }
    //imprimimos el mensaje cifrado junto con el descifrado
    for (var w = 0; w < divs.length; w++) {
        console.log(ids[w]+" "+des[w]);
    }
    //agregamos las pruebas en texto plano a la pagina
    for (var x = 0; x < des.length; x++) {
        var pElement = document.createElement('p');
        pElement.textContent = des[x]
        document.body.appendChild(pElement);
    }

})();