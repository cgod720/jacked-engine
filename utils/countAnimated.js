const fs = require('fs')
const base = '/Users/carlosgodoy/Documents/projects/cryptohunkz-static-engine'


fs.readdir('/Users/carlosgodoy/Documents/projects/cryptohunkz-static-engine/build/images', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        let gifs = 0
        let pngs = 0
        const gifArr = []
        data.forEach((file, i) => {
            // console.log(file)
            if(file.slice(-3) === 'gif'){
                const gifStr = file.split('.')
                gifArr.push(gifStr[0])
                gifs++
                // fs.copyFile(`${base}/build/images/${i + 1}.gif`, `${base}/gifs/${i + 1}.gif`, fs.constants.COPYFILE_EXCL, (err) => {
                //     if(err) console.error(err)
                // })
                // console.log(`${base}/build/images/${i + 1}.gif`)
            } else if(file.slice(-3) === 'png'){
                pngs++
            }
        })
        console.log(gifs)
        console.log(pngs)



        // const gifs = []
        // data.forEach(file => {
        //     if(file.slice(-3) === 'gif'){
        //         gifs.push(file)
        //     }
        // })
        for (let i = 0; i < gifArr.length; i++) {
            // console.log(gifArr[i])
            const thePath = `${base}/${gifArr[i]}`
            // console.log(`${thePath.slice(0, 64)}build/images/${gifArr[i]}.png`)
            if(fs.existsSync(`${thePath.slice(0, 64)}build/images/${gifArr[i]}.png`)){
                console.log(`${thePath.slice(0, 64)}${gifArr[i]}.png`)
            }
        }
    }
})


fs.readFile('/Users/carlosgodoy/Documents/projects/cryptohunkz-static-engine/gifs/degenMetadata/_metadata.json', "utf8", (err, data) => {
    if(err) console.log(err)
    else {
        const parsed = JSON.parse(data)
        console.log(parsed.length)
    }
})