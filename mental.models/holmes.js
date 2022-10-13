const sherlock = {
    surname: 'Holmes',
    address: {
        city: 'London',
        street: 'Baker',
    },
    greetings: () => {
        console.log('Hi');
    },
};

sherlock.address.number = '221B';

let john = {};
john.address = { ...sherlock.address, city: 'Ibiza' };

john.address = JSON.parse(JSON.stringify(sherlock.address));

let obj = {};
console.log(obj.algo?.foo); //undefined
