// Prototype class
class hamburger {
    size = String;
    stuffing = String;
    spices = Boolean;
    mayo = Boolean;
    constructor (size, stuffing, spices, mayo) {
       this.size = size;
       this.stuffing = stuffing;
       this.spices = spices;
       this.mayo = mayo;
    }
    addMayo() {
        this.mayo = true;
    }
    addSpices() {
        this.spices = true;
    }

};

// New hamburger

const myHamburger = new hamburger("small", "cheese",);

// Consts for parts

const bigHamburger = {
    callories: 40,
    price: 100,
};

const smallHamburger = {
    callories: 20,
    price: 50,
};

const cheese = {
    callories: 20,
    price: 10,
};
const salad = {
    callories: 5,
    price: 20,
};
const fries = {
    callories: 10,
    price: 15,
};
const spices = {
    callories: 0,
    price: 15,
};
const mayo = {
    callories: 20,
    price: 5,
};



// Price check

function checkPrice (hamburger) {
    let stockPrice;
    let stuffingPrice;
    let toppingPrice = 0;

    switch (hamburger.size) {
        case "big":
            stockPrice = bigHamburger.price
            break;
        case "small":
            stockPrice = smallHamburger.price
            break;
    }

    switch (hamburger.stuffing) {
        case "cheese":
            stuffingPrice = cheese.price
            break;
        case "salad":
            stuffingPrice = salad.price
            break;
        case "fries":
            stuffingPrice = fries.price
            break;
    }

    if (hamburger.mayo === true) {
        toppingPrice = toppingPrice + mayo.price;        
    } else {toppingPrice = toppingPrice}
    if (hamburger.spices === true) {
        toppingPrice = toppingPrice + spices.price;        
    } else {toppingPrice = toppingPrice}

    let finalPrice = stockPrice + stuffingPrice + toppingPrice;
    return `${finalPrice} Tuhrics`;
};

// Callories check

function checkCallories (hamburger) {
    let stockCallories = 0;
    let stuffingCallories = 0;
    let toppingCallories = 0;

    switch (hamburger.size) {
        case "big":
            stockCallories = bigHamburger.callories
            break;
        case "small":
            stockCallories = smallHamburger.price
            break;
    }

    switch (hamburger.stuffing) {
        case "cheese":
            stuffingCallories = cheese.callories
            break;
        case "salad":
            stuffingCallories = salad.callories
            break;
        case "fries":
            stuffingCallories = fries.callories
            break;
    }

    if (hamburger.mayo === true) {
        toppingCallories = toppingCallories + mayo.callories;        
    } else {toppingCallories = toppingCallories}
    if (hamburger.spices === true) {
        toppingCallories = toppingCallories + spices.callories;        
    } else {toppingCallories = toppingCallories}

    let finalCallories = stockCallories + stuffingCallories + toppingCallories;
    return `${finalCallories} Callories`;
};


// Console logs
console.log(myHamburger);
console.log(checkPrice(myHamburger));
console.log(checkCallories(myHamburger));
myHamburger.addMayo();
console.log(myHamburger);
console.log(checkPrice(myHamburger));
console.log(checkCallories(myHamburger));
myHamburger.addSpices();
console.log(myHamburger);
console.log(checkPrice(myHamburger));
console.log(checkCallories(myHamburger));