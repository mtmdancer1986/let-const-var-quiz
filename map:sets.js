// solution 1

{ 1, 2, 3, 4 }

// solution 2

"ref";

// solution 3

m = [{
            [1, 2, 3]: true
        },
        {
            [1, 2, 3]: false
        }
    ],

    // solution 4

    const hasDuplicate = arr => new Set(arr).size !== arr.length;

// solution 5


function vowelCount(arg) {
    const vowels = "aeiou";
    let count = new Map();
    for (let x of arg) {
        let lowerCase = x.toLowerCase();
        if (vowels.includes(lowerCase)) {
            if (count.has(lowerCase)) {
                count.set(lowerCase, count.get(lowerCase) + 1);
            } else {
                count.set(lowerCase, 1);
            }
        }
    }
    return count;
}