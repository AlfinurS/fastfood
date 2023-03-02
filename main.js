/* 3. *Некая сеть фастфуда предлагает несколько видов гамбургеров:
### Маленький (50 рублей, 20 калорий).
### Большой (100 рублей, 40 калорий).

### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
### С сыром (+10 рублей, +20 калорий).
### С салатом (+20 рублей, +5 калорий).
### С картофелем (+15 рублей, +10 калорий).

### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий). 
### 3Напишите программу, рассчитывающую стоимость и калорийность гамбургера. 
Можно использовать примерную архитектуру класса из методички, но можно использовать и свою. */
const humburgerSizeMap = {
    small: { title: "small", price: 50, calories: 20 },
    big: { title: "big", price: 100, calories: 40 }
}

const humburgerStuffMap = {
    cheese: { price: 10, calories: 20 },
    salat: { price: 20, calories: 5 },
    potato: { price: 15, calories: 10 },
}

const humburgerExtraMap = {
    flavoring: { price: 15, calories: 0 },
    sauce: { price: 20, calories: 5 },
}

class Humburger {
    constructor(id, size, stuff) {
        this.id = id;
        this.price = humburgerSizeMap[size].price + humburgerStuffMap[stuff].price;
        this.calories = humburgerSizeMap[size].calories + humburgerStuffMap[stuff].calories;
        this.size = size;
        this.stuff = stuff;
        this.extra = [];
    }
    addExtra(extra){
        this.price = this.price + humburgerExtraMap[extra].price;
        this.calories = this.calories + humburgerExtraMap[extra].calories;
        this.extra.push(extra);
    }
    getPrice() {
		return this.price;
	}
    getCal() {
        return this.calories;
    }

}

const btn = document.querySelector("#cheese");
const btn2 = document.querySelector("#salat");
const btn3 = document.querySelector("#potato");

const btnExtra = document.querySelector("#sauce");
const btnExtra2 = document.querySelector("#flavoring");

/* const btnSmallBurger = document.querySelector("#cheeseSmall");
const btnSmallBurger2 = document.querySelector("#salatSmall");
const btnSmallBurger3 = document.querySelector("#potatoSmall");

const btnExtraSmall = document.querySelector("#sauceSmall");
const btnExtraSmall2 = document.querySelector("#flavoringSmall"); */

const cart = [];


function addBigBurger(event) {
    const idStuff = event.target.id;
    const humburgerBig = new Humburger(1 ,"big", idStuff);
    cart.push(humburgerBig);
}

function addBigBurgerExtra(event) {
    const idExtra = event.target.id;
    const index = cart.findIndex(item => item.id === 1)
    cart[index].addExtra(idExtra);
    
console.log(cart);
}

function addSmallBurger(event) {
    const idStuff = event.target.id;
    const humburgerSmall = new Humburger(2, "small", idStuff);
    cart.push(humburgerSmall);
}

function addBurgerExtra(event) {
    const idExtra = event.target.id;
    const index = cart.findIndex(item => item.id === 2)
    cart[index].addExtra(idExtra);
    console.log(cart);
}

btn.addEventListener("click", addBigBurger);
btn2.addEventListener("click", addBigBurger);
btn3.addEventListener("click", addBigBurger);

btnExtra.addEventListener("click", addBigBurgerExtra);
btnExtra2.addEventListener("click", addBigBurgerExtra);
/* 
btnSmallBurger.addEventListener("click", addSmallBurger);
btnSmallBurger2.addEventListener("click", addSmallBurger);
btnSmallBurger3.addEventListener("click", addSmallBurger);

btnExtraSmall.addEventListener("click", addBigBurgerExtra);
btnExtraSmall2.addEventListener("click", addBigBurgerExtra); */