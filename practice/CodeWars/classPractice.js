class God {
  static create() {
    const adam = new Man('Adam');
    const eve = new Woman('Eve');
    return [adam, eve];
  }
}

class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  getGender() {
    return this.gender;
  }

  getName() {
    return this.name;
  }
}

class Man extends Human {
  constructor(name) {
    super(name, 'male');
  }
}

class Woman extends Human {
  constructor(name) {
    super(name, 'female');
  }
}

class Class {
  static #value = 1;
  static #firstCall = true;

  static getNumber() {
    if (this.#firstCall) {
      this.#firstCall = false;
      return 1;
    }
    return (this.#value *= 2);
  }
}

console.log(new Class());
console.log(Class.getNumber());
console.log(Class.getNumber());
console.log(Class.getNumber());
