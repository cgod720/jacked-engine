const fs = require('fs')
const basePath = process.cwd();

const updateDirs = () => {
    fs.rmSync(`${basePath}/build/images`, { recursive: true }, (err) => {
        if(err) console.log(err)
    })
    fs.rmSync(`${basePath}/build/json`, { recursive: true }, (err) => {
        if(err) console.log(err)
    })
    fs.rename(`${basePath}/build/sortedImages`, `${basePath}/build/images`, (err) => {
        if(err) console.log(err)
    })
    fs.rename(`${basePath}/build/sortedJson`, `${basePath}/build/json`, (err) => {
        if(err) console.log(err)
    })
}

updateDirs()