import * as promptly from 'promptly';

promptly.prompt('Who might I be speaking with? ')
  .then(sayHello);

function sayHello (name: string) {
  console.log(`It's a pleasure to meet you ${name}.`);
}
