const data = require('../rarity.json')
const fs = require('fs')
// console.log(data[0]["Legendary"])



for (const cat of data) {
    // console.log(cat.data)
    for (const item of cat.data) {
        // console.log(item)
        let str = item.occurrence.substring(0, item.occurrence.indexOf('e'))
        // console.log(str)
        let strArr = str.split(' ')
        // console.log(strArr)
        item.occurrence = strArr[0]
        item.freq = (strArr[0] / strArr[2]).toFixed(5)
    }
}

// console.log(data[0].data[0].freq)


for (const each of data) {
    // console.log(each.data)
    for (const eachOne of each.data) {
        console.log(eachOne)
        // console.log(eachOne.trait,eachOne.freq)
    }
}

fs.writeFile('./updatedRarities.json', JSON.stringify(data), () => 'success')



// console.log(data)