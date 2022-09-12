const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const port = process.env.PORT || 8000

//  pablic static path
const staticPath = path.join(__dirname,'../public')
// view directory change by custom name templates
templatePath = path.join(path.join(__dirname,'../template/views'))
// partial path
partialsPath = path.join(path.join(__dirname,'../template/partials'))

console.log(templatePath);

// to set the view engine(template engine)
app.set('view engine','hbs')
// view directory change by custom name templates
app.set('views',templatePath)
// register partial
hbs.registerPartials(partialsPath)

// builtin middleware
app.use(express.static(staticPath))

app.get('/',(req, res)=>{
    res.render('index')
})

app.get('/about',(req, res)=>{
    res.render('about')
})

app.get('/weather',(req, res)=>{
    res.render('weather')
})

app.get('*',(req, res)=>{
    res.render('error404',{
        errMsg:'Oops! Page not found'
    })
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})