// solution 1

8;
1846;

// solution 2

yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659;

// solution 3

"Your name is Alejandro and you like purple";
"Your name is Melissa and you like green";
"Your name is undefined and you like green";

// solution 4

Maya;
Marisaa;
Chi;

// Solution 5

"Raindrops on roses";
"Whiskers on Kittens";
["Bright copper kettles", "warm woolen mittens", "brown paper packages tied up with string"];

// Solution 6

[10, 30, 20];

// Solution 6


const { a, b } = obj.numbers;

// Solution 7 

[arr[0], arr[1]] = [arr[1],
    [0]
];

//solution 8

function raceResults([first, second, third, ..rest]) {
    return ({ first, second, third, ...rest });
}

const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, ...rest });