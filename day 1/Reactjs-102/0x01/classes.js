class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

