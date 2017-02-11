import { extendObservable} from 'mobx';

class Counter {
  constructor() {
    extendObservable(this, {
      count: 0
    });
    this.load();
  }

  increment() {
    this.count++;
    this.store();
  }

  decrement() {
    this.count--;
    this.store();
  }

  store() {
    localStorage.count = this.count;
  }

  load(){
    this.count = Number(localStorage.count) || 0;
  }

}

export default Counter;
