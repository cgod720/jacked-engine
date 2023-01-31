const fs = require("fs");
const basePath = process.cwd();
const buildDir = `${basePath}/build/json`;
const inputDir = `${basePath}/build/images`;


const shuffle = () => {
    fs.readFile(`${buildDir}/_metadata.json`, 'utf8', (err, data) => {
        if (err) console.log(err)
        else {

            const tempData = JSON.parse(data)
            const tempLen = tempData.length
            const newArr = []

            for (let i = 0; i < tempLen; i++) {

                // Get pseudorandom number
                let random = Math.floor(Math.random() * tempData.length)
                
                
                // Push random metadata to new array
                newArr.push(tempData.splice(random, 1))

                
                // Copy image to new location to be in order
                if(fs.existsSync(`${inputDir}/${newArr[i][0].edition}.gif`)){
                    fs.copyFile(`${inputDir}/${newArr[i][0].edition}.gif`, `${basePath}/build/sortedImages/${i + 1}.gif`, fs.constants.COPYFILE_EXCL, (err) => {
                        if(err) console.error(err)
                    })
                    // Update URI to have appropriate extension
                    newArr[i][0].image = `ipfs://NewUriToReplace/${i + 1}.gif`
                    newArr[i][0].attributes.push({
                        "trait_type": "Type",
                        "value": "GIF"
                    })

                } else {
                    fs.copyFile(`${inputDir}/${newArr[i][0].edition}.png`, `${basePath}/build/sortedImages/${i + 1}.png`, fs.constants.COPYFILE_EXCL, (err) => {
                        if(err) console.error(err)
                    })

                    newArr[i][0].attributes.push({
                        "trait_type": "Type",
                        "value": "PNG"
                    })
                    newArr[i][0].image = `ipfs://NewUriToReplace/${i + 1}.png`

                }

                // Update metadata to be in order
                //--------------------------------------------------------
                newArr[i][0].name = `Jacked Degenerate #${i + 1}`
                newArr[i][0].edition = i + 1
                // -------------------------------------------------------

                // Create individual JSON files w new metadata
                fs.writeFile(`${basePath}/build/sortedJson/${newArr[i][0].edition}.json`, JSON.stringify(newArr[i][0]), 'utf8', (err) => {
                    if(err) console.log(err)
                })

                
            }

            // Create file w all updated metadata
            fs.writeFile(`${basePath}/build/sortedJson/_metadata.json`, JSON.stringify(newArr.flat()), 'utf8', (err) => {
                if(err) console.error(err)
                else console.log('success madafuka')
            })
        }
    })
}



shuffle()