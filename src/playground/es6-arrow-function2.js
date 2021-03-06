const multiplier = {
    numbers: [2, 6, 36],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((numb) => numb * this.multiplyBy);
    }
};

console.log(multiplier.multiply());