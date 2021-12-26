import log from './log';

class A {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

const a = new A('xx');

const add = (a, b) => {
  console.log(a.name);
  return a + b;
};

export default add;
