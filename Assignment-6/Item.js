import { Schema as _Schema, model } from 'mongoose';

const Schema = _Schema;

// Registering the Items Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    restaurantId: {
        type: String,
        required: true
    },
    ingridients: {
        type: Array
    },
    image: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    }
})

export default model('Item', ItemSchema);  // exporting the model