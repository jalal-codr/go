const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors({
    origin :"*"
}))
app.use(express.json())
 
const arr = []

app.get("/",(req,res)=>{
    res.send("crazy panda ! ")
})
app.post('/post',(req,res)=>{
    let data = {
        name:req.body.name,
        pswd:req.body.pswd
    }
    arr.push(data)
    res.send(data)
})
app.get('/get',(req,res)=>{
    res.send(arr)
})
const port = 7000 || process.env.Port
app.listen(port, console.log(`server runing on ${port}`))