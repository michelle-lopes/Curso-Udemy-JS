const nome = prompt('digite seu nome completo:');
document.body.innerHTML += `o seu nome é: <strong>${nome}</strong><br />`;
document.body.innerHTML += `seu nome tem <strong> ${nome.length}</strong> letras <br />`;
document.body.innerHTML += `a segunda letra do seu nome é: <strong> ${nome[1]}<strong/><br />`;
document.body.innerHTML += `qual o primeiro índice da letra e no seu nome?<strong> ${nome.indexOf('e')}</strong> <br />`;
document.body.innerHTML += `qual o ultimo indice da letra e no seu nome? <strong> ${nome.lastIndexOf('e')}</strong><br/>`;
document.body.innerHTML += `as ultimas 3 letras do seu nome são:<strong> ${nome.slice(-3, nome.length)}</strong><br/>`;
document.body.innerHTML += `as ultimas do seu nome são: <trong>${nome.split(' ')}</strong><br/>`;
document.body.innerHTML += `seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong><br/>`;
document.body.innerHTML += `seu nome com letras minusculas: <strong>${nome.toLocaleLowerCase()}</strong><br/>`; 


