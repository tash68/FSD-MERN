import { Router } from 'express';

// importing all the controllers to handle requests 
import { getCityList, addCityList } from '../Controllers/City';
import { getMealType, addMealType } from '../Controllers/MealType';
import { getRestaurantByCity, filterSearch, getRestaurantById, getItemsByRestaurant, addRestaurantList } from '../Controllers/Restaurant';
import { signUp, login } from '../Controllers/User';
import { payment, callback } from '../Controllers/PaymentGateway';

// initializing and resigtering express routers 
const router = Router();

// registering all the routes - API endpoints 
router.get('/cityList', getCityList);
router.get('/getRestaurantsbycity/:cityId', getRestaurantByCity);
router.get('/mealtype', getMealType);
router.post('/restaurantfilter', filterSearch);
router.get('/getResById/:resId', getRestaurantById);
router.get('/getItemsbyrestaurant/:resId', getItemsByRestaurant);
router.post('/signup', signUp);
router.get('/login', login);
router.post('/payment', payment);
router.post('/callback', callback);


router.post('/addcityList', addCityList);
router.post('/addmealtype', addMealType);
router.post('/addRestaurantList', addRestaurantList);

// exporting the router
export default router;