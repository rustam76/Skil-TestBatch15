function letterMiddleValue(a, b) {
    const aPos = Alphabet.indexOf(a);
    const bPos = Alphabet.indexOf(b);
    const len = bPos - aPos

    if (len < 2) {
        return '[none]'
    }
    const start = aPos + (len / 2)
    const end = start + 1 + (len % 2)
    return Alphabet.slice(Math.floor(start), end)
}

const Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(letterMiddleValue("Q", "U"));
console.log(letterMiddleValue("R", "U"));
console.log(letterMiddleValue("T", "Z"));
console.log(letterMiddleValue("Q", "Z"));