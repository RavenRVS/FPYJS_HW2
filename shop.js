const catalog = [
    {
        id: '1',
        name: 'Джинсы',
        description: 'Синие джинсы поплулярного производителя',
        sizes: ['S', 'M', 'L',],
        price: 3500,
        available: true,
    },
    {
        id: '2',
        name: 'Рубашка',
        description: 'Рубашка с длинными рукавами',
        sizes: ['48', '50', '52',],
        price: 2500,
        available: true,
    },
    {
        id: '3',
        name: 'Свитер',
        description: 'Классический свитер с оленями',
        sizes: [ 'M', 'L',],
        price: 5000,
        available: true,
    },
    {
        id: '4',
        name: 'Куртка',
        description: 'Демисезонная кожаная куртка',
        sizes: ['48', '50',],
        price: 12500,
        available: true,
    },
    {
        id: '5',
        name: 'Пиджак',
        description: 'Модный пиджак с карманами',
        sizes: [ 'S', 'L',],
        price: 8500,
        available: true,
    },
];

let basket = [
    {
        good: catalog[0],
        amount: 2,
    },
    {
        good: catalog[3],
        amount: 1,
    }
]

function findItemInBasket (catalogPosition) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].good == catalogPosition) {
            return [true, i];
        };
    }
    return false;
};

function addOneItemOnBasket (catalogPosition, amount) {
    let f = findItemInBasket(catalogPosition)
    if (f[0] == true) {
        basket[f[1]].amount = basket[f[1]].amount + amount;
    } else {
        basket.push({'good': catalogPosition, 'amount': amount,});
    }
    return basket;
};

function deleteItemOnBasket (catalogPosition) {
    let f = findItemInBasket(catalogPosition)
    if (f[0] == true) {
        basket.splice(f[1], 1);
        return true;
    } else {
        return false;
    }
};

function deleteAllItemsOnBasket () {
    if (basket.length > 0) {
        basket.splice(0, basket.length);
        return true;
    } else {
        console.log('Корзина уже пустая')
        return false;
    }
}

function total () {
    let result = { 
        totalAmount: 0,
        totalSumm: 0,
    }
    for (let i = 0; i < basket.length; i++) {
        result.totalAmount = result.totalAmount + basket[i].amount;
        let sumForItem = basket[i].good.price * basket[i].amount
        result.totalSumm = result.totalSumm + sumForItem;
    }
    return result;
}

console.log(addOneItemOnBasket(catalog[0], 3))
console.log(deleteItemOnBasket(catalog[3]))
console.log(deleteAllItemsOnBasket())
console.log()
console.log()
console.log(addOneItemOnBasket(catalog[1], 3))
console.log(addOneItemOnBasket(catalog[3], 2))
console.log()
console.log()
console.log(total())