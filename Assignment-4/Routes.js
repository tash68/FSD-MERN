import { Router } from 'express';

// import all the controller components
import { getCityList } from '../Controllers/City';
import { getRestaurantByCityName } from '../Controllers/Restaurants';
import { getMealtypes } from '../Controllers/Mealtype';

// initialize the express router
const router = Router();

// register all the routes
router.get('/getCityList',getCityList);
router.get('/getRestaurantByCityName/:cityname', getRestaurantByCityName);
router.get('/getMealtypes', getMealtypes);

// export the routes
export default router;