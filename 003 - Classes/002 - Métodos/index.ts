class Pessoa {
    nome: string = "";
    idade: number = 0;
  
    constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
    }
  
    comer(comida: string) {
      return `O ${this.nome} comeu ${comida}`;
    }
  
    fezAniversario() {
      return `O ${this.nome} fez tantos anos ${++this.idade}`;
    }
  }
  
  const pessoa1 = new Pessoa("Dener Troquatte", 35);
  console.log(pessoa1.comer("Feijoada"));
  console.log(pessoa1.fezAniversario());
  
  const pessoa2 = new Pessoa("João da Silva", 67);
  console.log(pessoa2.comer("Dogão"));
  console.log(pessoa2.fezAniversario());