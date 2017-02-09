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

var rosa = Object.create(bill);
rosa.nome = 'Rosa';
rosa.idade = 20;
rosa.altura = 170;

bill.loga();
rosa.loga();
