import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import toDoRoutes from './routes/todo.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/todo', toDoRoutes);

const PORT = process.env.PORT || 4000 ;
const CONNECTION_URL ="mongodb+srv://jabuna:56charpala@cluster0.rkjtd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> app.listen(PORT, ()=> console.log(`Server running on PORT :${PORT}`)))
.catch((error) => console.log(error.message));


mongoose.set('useFindAndModify', false);



