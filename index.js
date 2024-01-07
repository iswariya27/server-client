const express = require('express');
const cors = require('cors')
const app = express();

// //server ssend to borwser show
// app.get('/',(req,res) => {
//     res.send("Hello iwariya")
// });


//api in json
// app.get('/',(req,res) => {
//     res.json({mesg:"Hello iwariya"})
// });

// app.post('/',(req,res) => {
//     res.json([
//         {name:'ishu'},
//         {name:"iswariya"},
//         {namr:"Ratha"},
//         {name: "Riya", age: 23, emali: "riya@gmail.com"}
//     ],)
// });

// app.get('/user', (req,res) => {
//     res.json({mesg:"iswariya is a update today"})
// });

// app.put('/user', (req,res)=>{
//     res.json({mesg: "ishu"})
// })



app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));


let user = [];


app.get('/user',(req,res)=>{
    res.json(user);
});

app.post('/user', (req, res)=>{
    // console.log(req.body);
    req.body.id = user.length + 1;
    user.push(req.body);
    res.json({mesg:"Ok"})
});

app.get('/user/:id', (req,res)=>{
    let id = req.params.id;
    let users = user.find((users) => users.id == id);
    if (users) {
        res.json(users);       
    } else {
        res.status(404).json({mesg: "user not found"})
    }
});

app.put('/user/:id', (req,res) => {
    let index = user.findIndex((users) => users.id == req.params.id);
    if (index != -1) {
        req.body.id = parseInt(req.params.id);
        user[index] = req.body;
        res.json({mesg: "upated"});
    } else {
        res.status(404).json({mesg: "User Not Found"})
    }
   
});


app.delete('/user/:id',(req,res) => {
    let index = user.findIndex((users) => users.id == req.params.id);
    if (index != -1) {
        user.splice(index, 1);
        res.json({ mesg: "deleted"});
    } else {
        res.status(404).json({ mesg: "user not found"});
    }
});


let book = [];


app.get('/book',(req,res)=>{
    res.json(book);
});

app.post('/book', (req, res)=>{
    // console.log(req.body);
    req.body.id = book.length + 1;
    book.push(req.body);
    res.json({mesg:"Ok"})
});

app.get('/book/:id', (req,res)=>{
    let id = req.params.id;
    let books = book.find((books) => books.id == id);
    if (books) {
        res.json(books);       
    } else {
        res.status(404).json({mesg: "book not found"})
    }
});

app.put('/book/:id', (req,res) => {
    let index = book.findIndex((books) => books.id == req.params.id);
    if (index != -1) {
        req.body.id = parseInt(req.params.id);
        book[index] = req.body;
        res.json({mesg: "upated"});
    } else {
        res.status(404).json({mesg: "book Not Found"})   
    }
   
});


app.delete('/book/:id',(req,res) => {
    let index = book.findIndex((books) => books.id == req.params.id);
    if (index != -1) {
        book.splice(index, 1);
        res.json({ mesg: "deleted"});
    } else {
        res.status(404).json({ mesg: "book not found"});
    }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});