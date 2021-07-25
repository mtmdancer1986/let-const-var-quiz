// solution one  first try at solution....

function filterOutOdds(...nums) {
    return nums.filter(val => val % 2 === 0);
}

// answer
const filterOutOdds = (...nums) => nums.filter(val => val % 2 === 0);

// solution two solution
const findMin = (...args) => Math.min(...args);

//solution three first try
function mergObject(obj, obj2) {
    return newObject = ({...obj1, ...obj2 });
}

//solution
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2 });


//solution four first try
function doubleAndReturnArgs(array, ...args) {
    const newArray = [...array];
    args.map(val => newArray.push(val * 2));
    return newArray;
}

//solution 
const doublAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)];

//solution five 
const removeRandom = items => {
    let random = Math.floor(math.random() * items.length);
    return [...items.slice(0, random), ...items.slice(random + 1)];
}

// solution six first try
// const extend = (...array1, ...array2) => [...array1, ...array2];

// solution but has error in my editor when I use return 
// const extend = (...array1, ...array2) => return [...array1, ...array2];

//solution seven first try
// const addKeyVal = (obj, key, val) => {...obj, key = val };

//solution
const addKeyVal = (obj, key, val) => { return {...obj, [key]: val } };

//solution eight
const removeKey = (obj, key) => {
    let newObj = {...obj };
    delete newObj[key];
    return newObj;
}

// solution nine first try
// const newObj = (obj1, obj2) => {...obj, ...obj2 };

//solution
const newObj = (obj1, obj2) => { return {...obj, ...obj2 } };


// solution ten

const update = (obj, key, val) => { return {...obj, [key]: val }; }