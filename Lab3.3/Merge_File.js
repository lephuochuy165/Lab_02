import fs from 'fs';
fs.readFile('file1.txt', (err, content1) => {
    if (err) {
        throw err;
    }
    fs.readFile('file2.txt', (err, content2) => {
        if (err) {
            throw err;
        }  
        const mergeContent = content1 + ',' + content2;
        fs.writeFile('file3.txt', mergeContent, (err) => {
            if (err) {
                throw err;
            }
            console.log('File is merge!')
            console.log(mergeContent)
        } )
    })
})

