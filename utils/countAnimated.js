const fs = require('fs')
const base = '/Users/carlosgodoy/Documents/projects/cryptohunkz-static-engine/build/images'


fs.readdir('/Users/carlosgodoy/Documents/projects/cryptohunkz-static-engine/build/images', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        let gifs = 0
        let pngs = 0
        data.forEach(file => {
            if(file.slice(-3) === 'gif'){
                gifs++
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
        // for (let i = 0; i < gifs.length; i++) {
        //     const thePath = `${base}/${gifs[i]}`
        //     // console.log(thePath.slice(0, thePath.length - 3))
        //     if(fs.existsSync(`${thePath.slice(0, thePath.length - 3)}png`)){
        //         console.log(`${thePath.slice(0, thePath.length - 3)}png`)
        //     }
        // }
    }
})