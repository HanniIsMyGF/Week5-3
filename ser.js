const express = require('express')
const app = express()
const port = 3002
app.use(express.json())

const todoList = [
    {id: 1, task: "ทำการบ้าน", completed: false },
    {id: 2 ,task: "ออกกำลังกาย", completed: true }
]

app.get('/',(req,res) => res.send("Hello My server"))
//ข้อ 1
app.get('/todos',(req,res) => {
    res.json(todoList)
})
//ข้อ 2
app.get('/todos/:id' , (req,res) => {
    const data = todoList.find((i) => i.id == req.params.id)
    if (data == undefined) {
        res.json({"message": "ไม่พบบันทึกที่ระบุ"})
    } 
})

//ข้อ 3
app.post("/todos", (req,res) => {
    let id = todoList[todoList.length - 1].id +1
    let task = req.body.task
    let comleted = req.body.comleted
    todoList = [...todoList, {id, task, comleted}]
})

app.listen(port, () => {
    console.log("Server is running on Port :", port)
})