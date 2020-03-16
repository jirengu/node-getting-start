const MarkdownIt = require('markdown-it')
const fs = require('fs')
    
let md = new MarkdownIt()


fs.readFile('./a.md', 'utf8', (err, text) => {
  if(err) throw err
  console.log(text)
  let html = md.render(text)

  fs.writeFile('./a.html', html, err => {
    if(err) throw err
    console.log('转换完成')
  })
})
