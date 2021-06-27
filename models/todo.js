import mongoose from 'mongoose';

const toDoSchema = mongoose.Schema({
    toDoText: String,
})

const ToDo = mongoose.model('ToDo', toDoSchema);

export default ToDo;