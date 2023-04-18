const username: string = 'Nicolas';
const sum = (a: number, b: number) => {
  return a + b;
};
sum(1, 2);

class Persona {

  constructor(public age: number, public lastName: string){};
}

const nico = new Persona(15, 'Molina');
nico.age;
