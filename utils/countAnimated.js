const fs = require('fs')
const base = '/Users/carlosgodoy/Documents/projects/cryptohunkz-static-engine/build/images'


fs.readdir('/Users/carlosgodoy/Documents/projects/cryptohunkz-static-engine/build/images', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        // let gifs = 0
        // data.forEach(file => {
        //     // if(file.slice(-3) === 'png'){
        //         gifs++
        //     // }
        // })
        // console.log(gifs)
        const gifs = []
        data.forEach(file => {
            if(file.slice(-3) === 'gif'){
                gifs.push(file)
            }
        })
        console.log(gifs.length)
    }
})