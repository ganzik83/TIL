// ES6 > class

class Car {
  // 클래스를 사용시에는 생성자를 만들어줘야한다.
  constructor(car) {
    this.name = car.name;
    this.price = car.price;
    this.year = car.year;
  }

  // new Car({name:'', price:'', year:''})
  drive() {
    console.log('Baaam');
  }
}

const bmw = new Car({
  name: 'X6',
  price: 1,
  year: 2019
});

const audi = new Car({
  name: 'A6',
  price: 0.5,
  year: 2016
});

bmw.drive();
audi.drive();

// React
// class App extends React.Component {

// }
// extends는 무엇인가?. class를 상속하는 개념

class SuperCar extends Car {
  constructor(option) {
    // 상속 받은 경우에는 super를 입력해야한다.
    super(option);
    console.log('Awesome!');
  }

  powerDrive() {
    console.log('Baaaaaaaaaaaaaaaaaaam!');
  }
}

const iAmSuperCar = new SuperCar({
  name: 'porche',
  price: 5,
  year: 2019
});

console.log(iAmSuperCar);
iAmSuperCar.drive();
iAmSuperCar.powerDrive();

// 실습

class Monster {
  constructor(option) {
    this.name = option.name;
    this.health = 100; // default는 생성자에서 설정 가능하다
  }
}

// 1. Monster를 사용해서 pikachu 인스턴스를 생성하자.

const pikachu = new Monster({
  name: 'pikachu'
});
// 2. Monster를 상속받아서 Dinosaur 클래스를 선언

class Dinosaur extends Monster {
  constructor(props) {
    super(props);
  }

  momtongbakchigi(victim) {
    // victim.health = victim.health - victim.health * 0.1;
    victim.health -= victim.health * 0.1;
    console.log(victim.health);
  }
}

const tirano = new Dinosaur({
  name: 'tirano'
});

tirano.momtongbakchigi(pikachu);
console.log(pikachu);

// 3. Dinosaur 클래스는 momtongbakchigi(인스턴스의 10% 깎는)메소드가 있고 health를 10% 깎는 기능으로 구현하라

// 4. Dinosaur의 인스턴스 객체 하나는 tirano라고 짓고 pikachu의 인스턴스의 health를 10% 깎자
