import { Schema as _Schema, model } from 'mongoose';

// Initialising the mongoose Schema
const Schema = _Schema;

// Registering the City Schema
const CitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city_id: {
        type: String
    },
    location_id: {
        type: String
    },
    country_name: {
        type: String,
        required: true
    }
})

export default model('City', CitySchema);   // exporting the model 