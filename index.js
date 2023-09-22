// const express =require('express')
// const mongoose =require('mongoose')
// const bodyparser =require('body-parser')
// const cors =require('cors')

// const app = express();
// const PORT = process.env.PORT || 8000

// app.use(cors());
// app.use(bodyparser.json());

// mongoose.connect('mongodb+srv://saimahalakshmiabc24:saimahalakshmiabc24@cluster0.ysftjwy.mongodb.net/?retryWrites=true&w=majority',{
//     // useNewParser:true,
//     useUnifiedTopology:true,
// })
// .then(()=>{
//     console.log('connected to mongodb')
// })
// .catch((error)=>{
//     console.error('error connecting to mongodb:', error)
// })

// // const mern =require('./routes/todoRoutes');
// // app.use('/api',todoRoutes);
// app.listen(PORT, ()=>{
//     console.log(`server is running on port ${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('../backend/Router/UserRouter');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://saimahalakshmiabc24:saimahalakshmiabc24@cluster0.ysftjwy.mongodb.net/?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
//   useCreateIndex: true,
//   createIndexes: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});