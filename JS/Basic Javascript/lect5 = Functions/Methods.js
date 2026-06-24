// Methods.js
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    }
};
// calling : calculator.add(4,5);

// there is also short hand  to define method
const calculator2 = {
    add (a, b) {
        return a + b;
    },
    sub (a, b) {
        return a - b;
    },
    mul (a, b) {
        return a * b;
    }
};