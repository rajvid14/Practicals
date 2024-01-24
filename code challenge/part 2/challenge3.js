const mark = {
    Fullname: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi
    }
};

const john = {
    Fullname: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi
    }
};

mark.calcBMI();
john.calcBMI();
console.log(john.bmi > mark.bmi ? `${john.Fullname}'s BMI (${john.bmi}) is higher than ${mark.Fullname}` : `${mark.Fullname}'s BMI (${mark.bmi}) is higher than ${john.Fullname}`)