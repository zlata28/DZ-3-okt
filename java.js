//калькулятор-конструктор
function Calculator(){
    this.read = function(){
      this.a = +prompt(0);
      this.b = +prompt(0);
    };
    this.sum = function(){
      return this.a + this.b;
    };
  
    this.mul = function(){
      return this.a * this.b;
    };
  }
let calculator = new Calculator();

alert("Sum=" + calculator.sum());

alert("Mul=" + calculator.mul());

//task2
function Accumulator(startingValue){
    this.value = startingValue;

    this.read = function(){
      this.value += +prompt('Сколько нужно добавить?');
    };
}
let accumulator = new Accumulator(0); 

accumulator.read(); 
accumulator.read(); 

alert(accumulator.value);
