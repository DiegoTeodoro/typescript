class Pessoa{

    nome: string = "";
    idade: number = 0;
  
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
      }
    }
    
    const pessoa1 = new Pessoa("Dener Troquatte", 31);
    const pessoa2 = new Pessoa("João da Silva", 67);
    
    console.log(pessoa1.nome);
    console.log(pessoa1.idade);
    
    console.log(pessoa2.nome);
    console.log(pessoa2.idade);
