let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
};

for (const key in names) {
    if (Object.hasOwnProperty.call(names, key)) {
        console.log('Olá, ' + names[key]);
    }
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (const key in car) {
    if (Object.hasOwnProperty.call(car, key)) {
        console.log(key, car[key]);       
    }
}