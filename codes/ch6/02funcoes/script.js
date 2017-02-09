var bill = {
  nome: 'Bill',
  idade: 20,
  altura: 175,
  loga: function() {
    console.log('nome', this.nome);
    console.log('idade', this.idade);
    console.log('altura', this.altura);
  }
};

var rosa = {
  nome: 'Rosa',
  idade: 21,
  altura: 170,
  loga: bill.loga
};

bill.loga();
rosa.loga();
