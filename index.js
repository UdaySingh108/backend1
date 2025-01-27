import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

const app = express();
app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Hello World!! How are you?');
// });
app.get('/api/jokes',(req,res)=>{
  const jokes=[
    {
      id:1,
      title:"Joke1",
      content:"Dk is Beautiful"
    },
    {
      id:2,
      title:"Joke2",
      content:"Avnish is innocent"
    }
  ];
  res.send(jokes);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
