import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;

// Registering the MealType Schema
const MealTypeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    meal_type: {
        type: Number,
        required: true
    }
})

export default model('MealType', MealTypeSchema);  // exporting the model