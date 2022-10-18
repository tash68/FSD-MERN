import Mealtype from '../Models/Mealtype.json';

export function getMealtypes(req,res) {
    res.status(200).json({
        message: 'Mealtypes loaded successfully',
        mealtypes: Mealtype
    })
}