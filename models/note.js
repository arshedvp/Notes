import { Schema, model, models } from 'mongoose';

const NotesSchema = new Schema({
    creator:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true, 
    },
    tag:{
        type: String,
        default: "General"
    },
  });

  
const Note = models.Note || model('Note', NotesSchema);

export default Note;