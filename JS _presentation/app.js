class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`პროდუქტი: ${this.name}`);
        console.log(`ფასი: ${this.price}₾`);
    }
}

const product1 = new Product("მაისური", 49);
const product2 = new Product("შარვალი", 129);

product1.displayProduct()
product2.displayProduct()


class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} ...`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} ყეფს.`);
    }
  }
  
  const dog = new Dog('ჯეკა', 'ბულდოგი');
  dog.speak();



  class Person {
    constructor(name, surname) {
      this._name = name; 
      this._surname = surname
    }
  
    get name() {
      return this._name; 
    }
  
    set name(newName) {
      this._name = newName; 
    }

    get surname() {
        return this._surname
    }

    set surname(newSurname) {
        this._surname = newSurname
    }

  }
  
const person = new Person('ლუკა', 'რაზიკაშვილი');
console.log(person.name);
console.log(person.surname);
person.name = 'ვაჟა';
person.surname = 'ფშაველა'
console.log(person.name);
console.log(person.surname);




class pliusminusi {
    static add(a, b) {
      return a + b;
    }

    static sub(a, b) {
        return a - b;
    }
  }
  
  console.log(pliusminusi.add(5, 6));
  console.log(pliusminusi.sub(5, 6)); 