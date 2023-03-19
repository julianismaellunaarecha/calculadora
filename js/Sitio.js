import getCalculadora from './Calculadora.js';

/**
 * Nuevo sitio para la calculadora
**/

let mainTag = document.createElement('main');
let articuloTag = document.createElement('article');
articuloTag.appendChild(getCalculadora());
mainTag.appendChild(articuloTag);
document.body.insertAdjacentElement('afterbegin', mainTag);
