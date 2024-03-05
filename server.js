const express=require('express')
const { Server }=require('socket.io')
const { createServer }=require('node:http')
const {join}=require('node:path')
const {availableParallelism}=require('node:os')
const cluster=require('node:cluster')

const app=express()
const server=createServer(app)
const io=new Server(server)


const port=4000

app.get('/',(req,res)=>{
    res.sendFile(join(__dirname,'index.html'))
})
app.get('/testing',(req,res)=>{
    res.send("<h1>Testing API endpoints</h1>")
})
io.on('connection',(socket)=>{
    
    socket.emit('connected',socket.id)
    socket.broadcast.emit('connection',`${socket.id} has joined the chat`)
    
    socket.on('send-message',(message)=>{
        socket.broadcast.emit('received-message',message)
    })
    socket.on('disconnect',(message)=>{
        console.log("user disconnected")
    })
    socket.on('personal',({person,message})=>{
        io.to(person).emit("other-message",message)
    })
})

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
