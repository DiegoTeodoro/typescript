let nomes:string[] = ["Diego", "Bruno", "Pedro"];
let numeros: Array<number> = [12,8,11,20];
console.log(nomes[0]);
console.log(numeros);

let pessoa:{nome:string; idade:number; email:string; ativo:boolean} ={
    nome:"Diego",
    idade:38,
    email:"diego@gmail.com",
    ativo:true
}

console.log(pessoa);

// tuplas
let array1: [string, string, number, boolean] = [
    "Dener Troquatte",
    "Teste",
    123,
    false,
  ];
  
  let array2: Array<string | number | boolean> = [
    true,
    "Dener",
    123,
    "Troquatte",
  ];
  
  let obj1: { nome: string; sobrenome: string; idade: number; deuBom: boolean } =
    {
      nome: "Dener",
      sobrenome: "Troquatte",
      idade: 123,
      deuBom: true,
    };
  
  let obj2: Array<{
    nome: string;
    sobrenome: string;
    idade: number;
    deuBom: boolean;
  }> = [
    {
      nome: "Dener",
      sobrenome: "Troquatte",
      idade: 123,
      deuBom: true,
    },
    {
      nome: "Dener1",
      sobrenome: "Troquatte",
      idade: 123,
      deuBom: true,
    },
    {
      nome: "Dener2",
      sobrenome: "Troquatte",
      idade: 456,
      deuBom: false,
    },
  ];
  
  console.log(array1);
  console.log(array2);
  console.log(obj1);
  console.log(obj2);