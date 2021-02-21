class NameGenerator {
  constructor() {
    const btn = document.querySelector('button');
    this.names = ['Max', 'Manu', 'Anna'];
    this.currentName = 0;
    btn.addEventListener('click', () => {
      console.log(this);
      this.addName();
    });
  }
  
  addName() {
    console.log(this);
    console.log(this.names[this.currentName]);
    this.currentName++;
    if (this.currentName >= this.names.length) {
      this.currentName = 0;
    }
  }
}

const gen = new NameGenerator();
