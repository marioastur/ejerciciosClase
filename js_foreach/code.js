/*

function jewelSearch(myJewels, myStones){
    let jewelArray = myJewels.split("")
    let stoneArray = myStones.split("")
    let jewelCount = 0

    for (let index = 0; index < jewelArray.length; index++) {
        for (let secondIndex = 0; secondIndex < stoneArray.length; secondIndex++) {
            if (jewelArray[index]==stoneArray[secondIndex]) {
                jewelCount += 1
            }
        }   
    }
    return jewelCount
}
*/


let myJewels = "aN"

let myStones = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestiae harum nostrum esse cumque enim eum tenetur, minima facilis quo, dignissimos blanditiis veniam. Assumenda similique accusamus voluptates temporibus ad consequatur"

let jewelArray = myJewels.split("")
let stoneArray = myStones.split("")
const initialValue = 0


let myJewelsCount = stoneArray.reduce(function(counter, currentStone) {
    if (jewelArray.includes(currentStone)) {
        return counter + 1
    }
    return counter
}, initialValue)

console.log('Número de joyas : ' + myJewelsCount)