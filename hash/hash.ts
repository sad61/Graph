export class HashTable<T> {
  private primeiroNivel: Array<Array<Array<T>>>;
  private primeiroNivelSize: number = 10;
  private segundoNivelSize: number = 10;

  constructor() {
    this.primeiroNivel = new Array(this.primeiroNivelSize);

    for (let i = 0; i < this.primeiroNivelSize; i++) {
      this.primeiroNivel[i] = new Array(this.segundoNivelSize);
      for (let j = 0; j < this.segundoNivelSize; j++) {
        this.primeiroNivel[i][j] = [];
      }
    }
  }

  private hashPrimeiroNivel(chavePrimeiroNivel: number): number {
    return chavePrimeiroNivel % this.primeiroNivelSize;
  }

  private hashSegundoNivel(chaveSegundoNivel: number): number {
    return chaveSegundoNivel % (this.segundoNivelSize / (this.primeiroNivelSize / 10));
  }

  inserir(chavePrimeiroNivel: number, chaveSegundoNivel: number, valor: T): void {
  const indicePrimeiroNivel = this.hashPrimeiroNivel(chavePrimeiroNivel);
  const indiceSegundoNivel = this.hashSegundoNivel(chaveSegundoNivel);

  this.primeiroNivel[indicePrimeiroNivel][indiceSegundoNivel] = [valor];
}

  buscar(chavePrimeiroNivel: number, chaveSegundoNivel: number): T[] | null {
    const indicePrimeiroNivel = this.hashPrimeiroNivel(chavePrimeiroNivel);
    const indiceSegundoNivel = this.hashSegundoNivel(chaveSegundoNivel);

    return this.primeiroNivel[indicePrimeiroNivel][indiceSegundoNivel];
  }
}


const tabela = new HashTable<string>();

tabela.inserir(2, 3, "Otavio");
tabela.inserir(2, 3, "Margarida");
tabela.inserir(2, 5, "Henrique");
tabela.inserir(7, 17, "Marcelo");

console.log(tabela.buscar(2, 3));
console.log(tabela.buscar(2, 5)); 
console.log(tabela.buscar(7, 17)); 
console.log(tabela.buscar(10, 10)); 

