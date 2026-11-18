const data = ["hello", 12, "asdad", "qweqw", 111, true, false]
console.log("\n# data")
console.log(data)

const arr = []
data.map(d => arr.push({
    type: typeof d,
    value: d
}))

console.log("\n# arr")
arr.map(a => console.log(a))

const strings = []
const numbers = []
const booleans = []

arr.map(a => a.type === "string" ? strings.push(a) : (a.type === "number" ? numbers.push(a) : booleans.push(a)))

console.log("\n# strings")
strings.map(s => console.log(s))
console.log("\n# numbers")
numbers.map(n => console.log(n))
console.log("\n# booleans")
booleans.map(b => console.log(b))