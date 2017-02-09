var bill = {
  nome: 'Bill',
  idade: 20
};

bill.altura = 175;

var rosa = {
  nome: 'Rosa',
  idade: 21,
  altura: 170
};

function loga_pessoa(pessoa) {
  console.log('nome', pessoa.nome);
  console.log('idade', pessoa.idade);
  console.log('altura', pessoa.altura);
}

loga_pessoa(bill);
loga_pessoa(rosa);
