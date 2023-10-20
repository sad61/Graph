"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTable = void 0;
var HashTable = /** @class */ (function () {
    function HashTable() {
        this.primeiroNivelSize = 10;
        this.segundoNivelSize = 10;
        this.primeiroNivel = new Array(this.primeiroNivelSize);
        for (var i = 0; i < this.primeiroNivelSize; i++) {
            this.primeiroNivel[i] = new Array(this.segundoNivelSize);
            for (var j = 0; j < this.segundoNivelSize; j++) {
                this.primeiroNivel[i][j] = [];
            }
        }
    }
    HashTable.prototype.hashPrimeiroNivel = function (chavePrimeiroNivel) {
        return chavePrimeiroNivel % this.primeiroNivelSize;
    };
    HashTable.prototype.hashSegundoNivel = function (chaveSegundoNivel) {
        return chaveSegundoNivel % (this.segundoNivelSize / (this.primeiroNivelSize / 10));
    };
    HashTable.prototype.inserir = function (chavePrimeiroNivel, chaveSegundoNivel, valor) {
        var indicePrimeiroNivel = this.hashPrimeiroNivel(chavePrimeiroNivel);
        var indiceSegundoNivel = this.hashSegundoNivel(chaveSegundoNivel);
        this.primeiroNivel[indicePrimeiroNivel][indiceSegundoNivel] = [valor];
    };
    HashTable.prototype.buscar = function (chavePrimeiroNivel, chaveSegundoNivel) {
        var indicePrimeiroNivel = this.hashPrimeiroNivel(chavePrimeiroNivel);
        var indiceSegundoNivel = this.hashSegundoNivel(chaveSegundoNivel);
        return this.primeiroNivel[indicePrimeiroNivel][indiceSegundoNivel];
    };
    return HashTable;
}());
exports.HashTable = HashTable;
var tabela = new HashTable();
tabela.inserir(2, 3, "Otavio");
tabela.inserir(2, 3, "Margarida");
tabela.inserir(2, 5, "Henrique");
tabela.inserir(7, 17, "Marcelo");
console.log(tabela.buscar(2, 3));
console.log(tabela.buscar(2, 5));
console.log(tabela.buscar(7, 17));
console.log(tabela.buscar(10, 10));
