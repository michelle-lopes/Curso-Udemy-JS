const elementos = [
    {tag: 'p', texto: 'Qualquer coisa aqui'.},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'section', texto: 'fase 3'},
    {tag: 'footer', texto: 'fase 4'},
  
];

const container = document.querySelector ('.container');

const div = document.createElement ('div');

for (let i = 0; i < elementos.length;
    i++) {
let {tag, texto} = elementos [i];
let tagCriada = document.createElement(tag);
tagCriada.innerText= texto;
div.appendChild(tagCriada);
    }

    container.appendChild(div);
