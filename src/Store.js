import { extendObservable} from 'mobx';
    var moment = require('moment');

class Store {
  constructor() {
    extendObservable(this, {
      count: 0,
      date: 0,
      color: "white",
      goal: "coding",
    });
    this.load();
  }


  increment() {
    this.count++;
    this.color ="#83fddd";
    this.addDate();
    this.store();
  }

  decrement() {
    this.color ="rgb(238, 181, 241)";
    this.count--;
    this.store();
  }

  store() {
    localStorage.count = this.count;
  }

  addDate(){
          console.log('hello');
    localStorage.date = moment().toISOString();
  }

  load(){
    this.count = Number(localStorage.count) || 0;

    if(localStorage.date == "undefined"){
      this.date = ": in your dreams"
    }
    else {
      this.date = moment(localStorage.date).fromNow()
    }
  }

}

export default Store;
