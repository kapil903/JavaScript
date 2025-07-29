let marvel_heros = ["CP", "IM", "THOR"]
let dc_heros = ["BM", "SM", "AM"]

// marvel_heros.push(dc_heros)

console.log(marvel_heros)

let all_heros = marvel_heros.concat(dc_heros)

console.log(all_heros)

const all_new_heros = [...marvel_heros, ...dc_heros] //SPREADING THE ELEMENT USING DOTS, an efficient way
console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6,[7,8,9]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)

console.log(Array.isArray("Kapil"))

console.log(Array.from("kapil"))

let Score1 = 300
let Score2 = 400
let Score3 = 500
console.log(Array.of(Score1, Score2, Score3))