import { Schema as _Schema, model } from 'mongoose';

// Initialising the mongoose Schema
const Schema = _Schema;

// Registering the User Schema
const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export default model('User', UserSchema);   // exporting the model 