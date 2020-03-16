const fs = require('fs')

fs.readFile('./a.md', 'utf-8', (err, text) => {
  if(err) {
    console.log(err)
    return 
  }
  text = text.toUpperCase()
  fs.writeFile('./a-after.md', text, err => {
    if(err) {
      console.log(err)
      return
    }
    console.log('写入完成')
  })
})