
/*function jewelSearch(myJewels, myStones){
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
let myStones = "anshnraN"

let jewelArray = myJewels.split("")
let stoneArray = myStones.split("")
let jewelCount = 0

let result = jewelArray.map(function(jewel){
    let ifJewel = stoneArray.filter(x=>x==jewel)
    return ifJewel
})

console.log(result)