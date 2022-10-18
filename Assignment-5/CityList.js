import { map } from '../Models/City.json'; // import city json data from models

// API for getCityList function : to get all cities

export function getCityList(_req,res){
    const result = map(item => item.name);
    res.status(200).json({
        message : 'City list loaded successfully',
        city: result
    })
}