const fs = require("fs");
const basePath = process.cwd();
const buildDir = `${basePath}/build/json`;
const inputDir = `${basePath}/build/images`;


// const separate = () => {
//     fs.readFile(`${buildDir}/_metadata.json`, 'utf8', (err, data) => {
//         // console.log(data)
//         if (err) console.log(err)
//         else {

//             const tempData = JSON.parse(data)
//             tempData.unshift('hello space')
//             const tempLen = tempData.length
//             const newArr = []

//             for (let i = 0; i < tempLen; i++) {


                
                
//                 if(fs.existsSync(`${inputDir}/${i}.gif`)){
//                     // console.log(`${inputDir}/${i}.gif`)
//                     // console.log(i)
//                     newArr.push(tempData[i])
//                     // Copy image to new location to be in order
//                     fs.copyFile(`${inputDir}/${newArr[newArr.length - 1]?.edition}.gif`, `${basePath}/gifs/gifs/${newArr[newArr.length - 1]?.edition}.gif`, fs.constants.COPYFILE_EXCL, (err) => {
//                         if(err) console.error(err)
//                     })
//                     // Update URI to have appropriate extension
//                     newArr[newArr.length - 1].image = `ipfs://NewUriToReplace/${i}.gif`
//                     newArr[newArr.length - 1].attributes.push({
//                         "trait_type": "Animated",
//                         "value": "True"
//                     })

//                     // Update metadata to be in order
//                     //--------------------------------------------------------
//                     newArr[newArr.length - 1].name = `Jacked Degenerate #${newArr[newArr.length - 1].edition}`
//                     // newArr[newArr.length - 1].edition = i + 1
//                     // -------------------------------------------------------
//                     // Create individual JSON files w new metadata
//                     fs.writeFile(`${basePath}/gifs/metadata/${newArr[newArr.length - 1].edition}.json`, JSON.stringify(newArr[newArr.length - 1]), 'utf8', (err) => {
//                         if(err) console.log(err)
//                     })
//                 }

                

                
//             }
//             // console.log(newArr.length)

//             // Create file w all updated metadata
//             fs.writeFile(`${basePath}/gifs/metadata/_metadata.json`, JSON.stringify(newArr.flat()), 'utf8', (err) => {
//                 if(err) console.error(err)
//                 else console.log('success madafuka')
//             })
//         }
//     })
// }


const length = () => {
    fs.readFile(`${basePath}/gifs/metadata/_metadata.json`, 'utf8', (err, data) => {
        if(err) console.log(err)
        else console.log(JSON.parse(data).length)
    })
}


// Filters out GIFS w unwanted traits
const filterGifs = () => {
    // iterate over metadata
    fs.readFile(`${basePath}/gifs/metadata/_metadata.json`, 'utf8', (err, data) => {
        if(err) console.log(err)
        else {
            const degens = JSON.parse(data)
            let filteredDegens = []
            const goodDegens = []
            degens.forEach((degen) => {
                // for (const attr of degen.attributes) {
                    
                // }
                for (const attr of degen.attributes) {
                    if(

                        //Accessory
                       attr.value === 'Palm'
                       // Neck
                    || attr.value === 'Hunk Chain'
                       // Torso
                    || attr.value === 'Bandolier'
                    || attr.value === 'Varsity Jacket'
                    || attr.value === 'Hawaiian T'
                    || attr.value === 'Cyberpunk Sleeveless'
                    || attr.value === 'Sleeveless Red'
                    || attr.value === 'Sleeveless Green'
                    || attr.value === 'Cyberpunk Vest'
                    || attr.value === 'Karate Gi'
                    || attr.value === 'Tank Top'
                    || attr.value === 'Squire'
                    // Head
                    || attr.value === "Elvis"
                    || attr.value === "Man Bun"
                    || attr.value === "Samurai Helm"
                    || attr.value === "Feather Hat"
                    // Mask
                    || attr.value === "Sub Zero"
                    || attr.value === "Smoke Mask"
                    // Eyes
                    || attr.value === "Don"
                    || attr.value === "Raph"
                    || attr.value === 'Red'
                    // Hoodie
                    || attr.value === "Black Hoodie"
                    || attr.value === "Red Hoodie"




                        // Backgrounds
                    || attr.value === 'Neon Palms' 
                    || attr.value === 'Red Soundboard'
                    || attr.value === 'Purple Soundboard'
                    || attr.value === 'Synthwave'
                    || attr.value === 'Rave Matrix'
                    ){
                        // console.log('got one')
                        // console.log(degen)
                        filteredDegens.push(degen.edition)
                        
                    } else {
                        goodDegens.push(degen.edition)
                    }
                }
            })
            filteredDegens = new Set(filteredDegens)
            filteredDegens = Array.from(filteredDegens)
            // console.log(new Set(goodDegens))
            // console.log(filteredDegens)

            // console.log(filteredD)
            // copy good degens metadata and gifs to new location
            const meta = []
            for (let i = 0; i < degens.length; i++) {
                
                if(!filteredDegens.includes(degens[i].edition)){
                    console.log('add to new location')

                    meta.push(degens[i])

                    fs.copyFile(`${basePath}/gifs/gifs/${degens[i].edition}.gif`, `${basePath}/gifs/degens/${degens[i].edition}.gif`, fs.constants.COPYFILE_EXCL, (err) => {
                        if(err) console.error(err)
                    })
                    fs.copyFile(`${basePath}/gifs/metadata/${degens[i].edition}.json`, `${basePath}/gifs/degenMetadata/${degens[i].edition}.json`, fs.constants.COPYFILE_EXCL, (err) => {
                        if(err) console.error(err)
                    })

                } else {
                    console.log('trash', degens[i].edition)
                }
                
            }
            console.log(meta.length)
            fs.writeFile(`${basePath}/gifs/degenMetadata/_metadata.json`, JSON.stringify(meta.flat()), 'utf8', (err) => {
                if(err) console.error(err)
                else console.log('success madafuka')
            })

        }
    })
}


// let allTraits
const listTraitNames = () => {
    fs.readFile(`${basePath}/gifs/metadata/_metadata.json`, 'utf8', (err, data) => {
        if(err) console.log(err)
        else {
            const degens = JSON.parse(data)
            const traits = []
            degens.forEach((degen) => {
                for (const attr of degen.attributes) {
                    if(attr.trait_type === 'Eyes'){
                         if(!traits.includes(attr.value)){
                        
                        // console.log(attr)
                        traits.push(attr.value)
                        }
                    }
                }
            })
            console.log(traits)
            // allTraits = traits
            // console.log(allTraits)
        }
    })
}


// separate()
// length()
// filterGifs()
// listTraitNames()
//renameTraits
// mergeMetadata


// First open degenMetadata, start at 9652
// Re-id each degen starting at 9652 in _metadata file, copy object to new location. Copy Image file to new location w same ID number .json

const reIdMetadata = () => {
    fs.readFile(`${basePath}/gifs/degenMetadata/_metadata.json`, 'utf8', (err, data) => {
        if(err) console.log(err)
        else {
            const degens = JSON.parse(data)
            const goodDegens = []
            let counter = 9652
            for (let i = 0; i < degens.length; i++) {
                
                // console.log(degens[i])
                const updatedDegen = { ...degens[i] }
                updatedDegen.name = `Jacked Degenerate #${counter}`
                updatedDegen.description = `Jacked Degenerates is a collection of 10K premier, highly detailed pixelated profile pictures`
                updatedDegen.attributes.pop()
                updatedDegen.edition = counter
                updatedDegen.image = `ipfs://NewUriToReplace/${counter}.gif`
                // if(counter === 9662){
                //     console.log(updatedDegen)
                // }
                for (let j = 0; j < updatedDegen.attributes.length; j++) {
                    
                    // console.log(updatedDegen.attributes[j])
                    if(updatedDegen.attributes[j].trait_type === 'Body' && updatedDegen.attributes[j].value === 'Alien'){
                        updatedDegen.attributes[j].value = 'Super Human'
                    } else if(updatedDegen.attributes[j].trait_type === 'Body' && updatedDegen.attributes[j].value === 'Zombie'){
                        updatedDegen.attributes[j].value = 'Undead'
                    } else if(updatedDegen.attributes[j].trait_type === 'Body' && updatedDegen.attributes[j].value === 'Android'){
                        updatedDegen.attributes[j].value = 'AI'
                    } else if(updatedDegen.attributes[j].trait_type === 'Eyes' && updatedDegen.attributes[j].value === 'Blazed'){
                        updatedDegen.attributes[j].value = 'Baked'
                    } else if(updatedDegen.attributes[j].trait_type === 'Eyes' && updatedDegen.attributes[j].value === 'DEGEN'){
                        updatedDegen.attributes[j].value = 'Degenerate'
                    } else if(updatedDegen.attributes[j].trait_type === 'Eyes' && updatedDegen.attributes[j].value === 'VR Goggles'){
                        updatedDegen.attributes[j].value = 'Metaverse'
                    } else if(updatedDegen.attributes[j].trait_type === 'Eyes' && updatedDegen.attributes[j].value === 'WUT'){
                        updatedDegen.attributes[j].value = 'Serious'
                    } else if(updatedDegen.attributes[j].trait_type === 'Head' && updatedDegen.attributes[j].value === 'Crown'){
                        updatedDegen.attributes[j].value = 'Royal'
                    } else if(updatedDegen.attributes[j].trait_type === 'Head' && updatedDegen.attributes[j].value === 'Seaman Hat'){
                        updatedDegen.attributes[j].value = 'Sailor'
                    } else if(updatedDegen.attributes[j].trait_type === 'Mouth' && updatedDegen.attributes[j].value === 'Cigar'){
                        updatedDegen.attributes[j].value = 'Stoagie'
                    } else if(updatedDegen.attributes[j].trait_type === 'Neck' && updatedDegen.attributes[j].value === 'Bone Tooth'){
                        updatedDegen.attributes[j].value = 'Sabretooth'
                    } else if(updatedDegen.attributes[j].trait_type === 'Torso' && updatedDegen.attributes[j].value === "Doctor's Coat"){
                        updatedDegen.attributes[j].value = 'Surgeon'
                    } else if(updatedDegen.attributes[j].trait_type === 'Torso' && updatedDegen.attributes[j].value === 'Knight'){
                        updatedDegen.attributes[j].value = 'Imperator'
                    } else if(updatedDegen.attributes[j].trait_type === 'Head' && updatedDegen.attributes[j].value === 'Captains Hat'){
                        updatedDegen.attributes[j].value = 'Captain'
                    } else if(updatedDegen.attributes[j].trait_type === 'Head' && updatedDegen.attributes[j].value === 'Cowboy Hat'){
                        updatedDegen.attributes[j].value = 'Cowboy'
                    } else if(updatedDegen.attributes[j].trait_type === 'Background' && updatedDegen.attributes[j].value === 'Punkscape 794'){
                        updatedDegen.attributes[j].value = 'Scape 794'
                    } else if(updatedDegen.attributes[j].trait_type === 'Background' && updatedDegen.attributes[j].value === 'Punkscape 5457'){
                        updatedDegen.attributes[j].value = 'Scape 5457'
                    } else if(updatedDegen.attributes[j].trait_type === 'Facial Hair' && updatedDegen.attributes[j].value === 'Black Moustache'){
                        updatedDegen.attributes[j].value = 'Black Stache'
                    } else if(updatedDegen.attributes[j].trait_type === 'Facial Hair' && updatedDegen.attributes[j].value === 'Blonde Moustache'){
                        updatedDegen.attributes[j].value = 'Blonde Stache'
                    } else if(updatedDegen.attributes[j].trait_type === 'Facial Hair' && updatedDegen.attributes[j].value === 'Brown Moustache'){
                        updatedDegen.attributes[j].value = 'Brown Stache'
                    }
                    
                }

                // Copy updated degen GIF to build/images folder
                // WORKS!
                fs.copyFile(`${basePath}/gifs/degens/${degens[i].edition}.gif`, `${basePath}/build/images/${updatedDegen.edition}.gif`, fs.constants.COPYFILE_EXCL, (err) => {
                    if(err) console.error(err)
                })


                console.log(`${basePath}/gifs/degenMetadata/${degens[i].edition}.json`)
                console.log(updatedDegen.edition)
                console.log(`${basePath}/build/json/${updatedDegen.edition}.json`)

                // WRITE new updated degen JSON to build/json folder
                // WORKS!
                fs.writeFile(`${basePath}/build/json/${updatedDegen.edition}.json`, JSON.stringify(updatedDegen), (err) => {
                    if(err) console.error(err)
                })
                
                goodDegens.push(updatedDegen)
                counter++
            }
            // console.log(goodDegens)
            // create new _metadata.json file for all to live in
        }
    })
}

reIdMetadata()


// Write a function to iterate over all of the JSON files for entire collection and update trait names up to 9652 and create new JSON files for each one in a new folder that will then replace build/json
// Create new _metadata file with ALL of the metadata for 10k JackedDegenerates by iterating over every file and adding its contents to a new file