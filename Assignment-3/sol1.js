// 1. Create a JavaScript restaurantManager class with the following properties:

class restaurantManager{
    restaurantList = [{ //0
        id: 1,
        restaurantName: 'Teluguness',
        address: 'Hi-tech city',
        city: 'Hyderabad'
    },
    {  //1
        id: 2,
        restaurantName: ' The Vintage',
        address: 'Rudhrampet bypass',
        city: 'Anathapur',
    },
    {  //2 
        id: 3,
        restaurantName: 'la-la-land',
        address:'Gachibowli',
        city: 'Hyderabad'
    },
    {  //3
        id: 4,
        restaurantName:'Skyhy live',
        address:'Gachibowli',
        city: 'Hyderabad'
    },
    {  //4
        id: 5,
        restaurantName:'Kashi art cafe',
        address:'Princess street',
        city: 'Kochi',
    },
    {  //5
        id: 6,
        restaurantName: 'Paris hotel street',
        address: 'Logans rd',
        city: 'Thalassery'
    }] // length - 5
    // Use Case: This will contain a list of restaurant object, with the restaurant name,address, and city

    // // In the class the array we created is in the format of [{0},{1},{2},{3},{4},{5}] as each of them contained some info they are displayed like that with curly braces but here after every closed brace a comma is important so that it indicates the separation...
   // // Arrow functions allow us to write shorter function syntax, instead of the function keyword and the brackets we simply write in this formIt gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword...

    printAllRestaurantNames = () => {
        return this.restaurantList.map(restaurant => restaurant.restaurantName);
    }
    // Use Case: This will print the name of all restaurant names in restaurantList on console
    // returns - - ->> 5 {'Teluguness', 'The vintage', 'la-la land', 'Skyhy live', 'Kashi art cafe', 'paris hotel street' } length-5 - - - <<

    // // map() creates a new array from calling a function for every array element. map() calls a function once for each element in an array. map() does not execute the function for empty elements. map() does not change the original array...
    // // The filter() method creates a new array filled with elements that pass a test provided by a function.The filter() method does not execute the function for empty elements.The filter() method does not change the original array...

    filterRestaurantByCity = (cityName) => {
        return this.restaurantList.filter(restaurant => restaurant.city == cityName);
    }
    // Use Case: This will filter the restaurant on the basis of the city provided in arguments, Argument: "city" type: "string"
}

const resobj = new restaurantManager();
resobj.printAllRestaurantNames();
resobj.filterRestaurantByCity('Kochi');
// returns - - ->> 4: { id: 4, restaurantName: 'Kashi art cafe', address: 'Princess street', city: 'Kochi'}  length: 1 - - - <<