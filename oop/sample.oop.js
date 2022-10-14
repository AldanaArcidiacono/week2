const user = {
    name: 'Pepe',
    renderUpper: function () {
        console.log(this.name.toUpperCase());
    },
};

const user2 = {
    name: 'Ernest',
    renderUpper: function () {
        console.log(this.name.toUpperCase());
    },
};

user.renderUpper(); // PEPE
user2.renderUpper(); // ERNEST
