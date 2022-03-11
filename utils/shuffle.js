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
                
                
                
                // Push random metadata to new array
                newArr.push(tempData.splice(random, 1))
                // console.log(`${basePath}/build/images/${newArr[i][0].edition}.png`)

                // Copy image to new location to be in order
                fs.copyFile(`${basePath}/build/images/${newArr[i][0].edition}.png`, `${basePath}/build/sortedImages/${i + 1}.png`, fs.constants.COPYFILE_EXCL, (err) => {
                    if(err) console.error(err)
                    else console.log('success yoooo')
                })

                // Sort metadata
                //--------------------------------------------------------
                newArr[i][0].name = `CryptoHunkz #${i + 1}`
                newArr[i][0].edition = i + 1
                newArr[i][0].image = `ipfs://NewUriToReplace/${i + 1}.png`
                // -------------------------------------------------------

                // Create individual JSON files w new metadata
                fs.writeFile(`${basePath}/build/sortedJson/${newArr[i][0].edition}.json`, JSON.stringify(newArr[i][0]), 'utf8', (err) => {
                    if(err) console.log(err)
                    else console.log('new json file added')
                })

                
            }
            // console.log(tempData, '\n------')
            // console.log(data[i])
            // console.log(newArr.flat())
            fs.writeFile(`${basePath}/build/sortedJson/_newMetadata.json`, JSON.stringify(newArr.flat()), 'utf8', (err) => {
                if(err) console.error(err)
                else console.log('success madafuka')
            })

            // console.log(`${basePath}/build/images/${random}.png`)
            // fs.copyFile()

        }
    })
}



shuffle()