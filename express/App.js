const express = require('express');
const app = express();
const port = 8000;
const student = [{
    name: "satyarth",
    age: 22,
    city: "delhi"

}]
app.get('/', (req, res) => {
    res.send("<h1>hi this is my first node js app</h1>");

})
app.get('/about', (req, res) => {
    res.send("<h1>hi this is about page</h1>");

})
app.get('/img', (req, res) => {
    res.send(`<img src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png">`);
})

app.listen(port, () => {
    console.log(`server is run at:http://localhost:${port}`)

})