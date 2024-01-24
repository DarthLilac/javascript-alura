alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let escolha;
let tentativas = 1;

while (escolha != numeroSecreto) {
    escolha = prompt('Escolha um número entre 1 e 100');
    if (escolha == numeroSecreto) {
        break;
    } else {
        if (escolha > numeroSecreto) {
            alert(`O número secreto é menor que ${escolha}`);
        } else {
            alert(`O número secreto é maior que ${escolha}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
