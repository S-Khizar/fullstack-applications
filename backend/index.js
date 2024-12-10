import express from 'express'
import cors from 'cors'



const app=express();

app.use(cors());




app.get('/',(req,res)=>{
    res.send('server is ready');
});

//get a list  of 5 jokes



app.get('/api/jokes',(req,res)=>{
  const jokes=  [
        {
          "id": 1,
          "title": "Why don’t scientists trust atoms?",
          "content": "Because they make up everything!"
        },
        {
          "id": 2,
          "title": "Why did the scarecrow win an award?",
          "content": "Because he was outstanding in his field!"
        },
        {
          "id": 3,
          "title": "Why don’t skeletons fight each other?",
          "content": "They don’t have the guts."
        },
        {
          "id": 4,
          "title": "What do you call fake spaghetti?",
          "content": "An impasta!"
        },
        {
          "id": 5,
          "title": "Why did the bicycle fall over?",
          "content": "Because it was two-tired!"
        },
        {
          "id": 6,
          "title": "What do you call cheese that isn’t yours?",
          "content": "Nacho cheese!"
        },
        {
          "id": 7,
          "title": "Why couldn’t the leopard play hide and seek?",
          "content": "Because he was always spotted."
        },
        {
          "id": 8,
          "title": "Why did the math book look sad?",
          "content": "Because it had too many problems."
        },
        {
          "id": 9,
          "title": "What do you get when you cross a snowman and a dog?",
          "content": "Frostbite!"
        },
        {
          "id": 10,
          "title": "Why was the computer cold?",
          "content": "It left its Windows open!"
        }
      ]
      
      res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`)
})