const fs = require("fs");
const path = require("path");
const basePath = process.cwd();
const buildDir = `${basePath}/build/json`;
const inputDir = `${basePath}/build/images`;


const shuffle = () => {
    fs.readFile(`${buildDir}/_metadata.json`, 'utf8', (err, data) => {
        if (err) console.log(err)
        else {
            // JSON.parse(data).forEach(element => {
            //     console.log(element)
            // });
            const tempData = JSON.parse(data)
            const tempLen = tempData.length
            const newArr = []
            // console.log(tempData.length)
            for (let i = 0; i < tempLen; i++) {
                // console.log(tempData.indexOf(item))
                let random = Math.floor(Math.random() * tempData.length)
                
                
            
                // tempData[i].edition = i + 1
                // tempData[i].image = `ipfs://NewUriToReplace/${i + 1}.png`
                newArr.push(tempData.splice(random, 1))
                newArr[i][0].name = `CryptoHunkz #${i + 1}`
                newArr[i][0].edition = i + 1
                newArr[i][0].image = `ipfs://NewUriToReplace/${i + 1}.png`

                
            }
            // console.log(tempData, '\n------')
            // console.log(data[i])
            // console.log(newArr.flat())
            fs.writeFile('./newMetadata.json', JSON.stringify(newArr), 'utf8', (err) => {
                if(err) console.error(err)
                else console.log('success madafuka')
            })
        }
    })
}



shuffle()