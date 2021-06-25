import toDos from '../models/todo.js';

export const getToDos = async (req, res) => {
    try {
        const toDo = await toDos.find();
        res.status(200).json(toDo);
        console.log(toDo);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createToDo = async (req, res) => {
    const todo = req.body;
    const newToDo = new toDos(todo);
    try {
        await newToDo.save();
        res.status(201).json(newToDo);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteToDo = async (req, res) => {
    const { todo_id } = req.params;
    toDos.findByIdAndDelete(todo_id, (err, toDo) => {
        if (err) {
            res.status(500).json({
                err
            });
        } else {
            res.status(200).json({
                message: 'To-Do has been removed',
                toDo
            });
        }
    });
}
