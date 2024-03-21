


const object1 = {
  a : function(){
    console.log(this)
  }
}


class Player {
    constructor(name , type){
      console.log(this)
    this.name = name;
    this.type = type;
  }
  introduce(){
    console.log(`hi my name is ${this.name} by first name is your ${this.type}`)
  }
}


class Wizard extends Player{
  constructor(name , type){
    super(name , type);   
  }
  Player(){
    console.log("hi");
  }
}

const Wizard1 = new Wizard("poriua" , "webDevliper");
const Wizard2 = new Wizard("weds" , "wfdcss");