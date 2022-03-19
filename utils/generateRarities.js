const fs = require('fs')
const { rarityData } = require('./rarity')

// console.log(typeof(rarityData))
const newData = []

for (const layer in rarityData) {
    const item = {
        name: layer,
        data: rarityData[layer]
    }
    newData.push(item)
}

// console.log(newData)
const jsonedData = JSON.stringify(newData)



fs.writeFile('./rarity.json', jsonedData, 'utf8', (data) => {
    console.log(data)
})