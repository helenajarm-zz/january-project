import { extendObservable} from 'mobx';
    var moment = require('moment');

class Store {
  constructor() {
    extendObservable(this, {
      count: 0,
      date: 0,
      color: "white",
      goal: "coding",
      modalVisible: false,
    });
    this.load();
  }


  toggleModal = (event) => {
    console.log("hi");
    this.modalVisible = !this.modalVisible;

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
    localStorage.date = moment().toISOString();
  }

  load(){
    this.count = Number(localStorage.count) || 0;


    if(localStorage.goal === undefined){
      this.goal = "ie. reading";
      this.modalVisible = true;
    }
    else{
      this.goal  = localStorage.goal;
    }

    if(localStorage.date === undefined){
      this.date = ": in your dreams";
    }
    else {
      this.date = moment(localStorage.date).fromNow()
    }
  }

}

export default Store;
