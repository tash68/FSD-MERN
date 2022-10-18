import { filter } from '../Models/Restaurants.json';

export function getRestaurantByCityName(req,res) {
    const cityName = req.params.cityname;
    const result = filter(item => item.city === cityName)
    res.status(200).json({
        message:'Restaurant list by City Name Fetched',
        restaurant : result
    })
}