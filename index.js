const returnFirstTwoDrivers = (arrayDrivers) => {
    return arrayDrivers.slice(0, 2);
};

const firstTwo = returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
console.log(firstTwo); // Output: ['Antonia', 'Nuru']

const returnLastTwoDrivers = (arrayDrivers) => {
    return arrayDrivers.slice(-2);
};

const lastTwo = returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
console.log(lastTwo); // Output: ['Amari', 'Mo']

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
    return function(fare) {
        return fare * x;
    };
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare);
};

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare);
};

function selectDifferentDrivers(arrayDrivers, cb) {
    return cb(arrayDrivers); // Directly invoke cb with arrayDrivers
}
