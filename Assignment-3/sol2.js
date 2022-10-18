// 2. Please find order details for Kashi art cafe in Kochi as:

const orderData ={
    'Below 500': 19, //0
    '500-1000': 23,  //1
    '1000-1500': 04, //2
    '1500-2000': 68, //3
    'Above 2000': 05 //4
};

// a. Calculate the total number of orders placed for the restaurant?.

const total = object.values(orderData).reduce((prev, next) => prev + next); //sum of all key values - - - reduce()- - - The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0)

// 119 order placed in total (19+23+04+68+05=119)

// b. Calculate the number of order proportion options.

const finalfigures = object.keys(orderData); //final keys of the obj like here it is 5 as there are five figure ranges in the array - - - The Object.keys()- - - method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would. ""Object.keys(obj)"" is the syntax and here obj is refered to be The object of which the enumerable's own properties are to be returned. Finally this returns an array whose elements are strings corresponding to the enumerable properties found directly upon object

// 5 are there indexed from {0-4}

// c. Calculate the percentage of each proportion in below format:

const result = finalfigures.map((item, index) => {
    return{
        'id': index + 1,
        'restaurant': 'Kashi art cafe',
        'order': item,
        'order percentage': ((orderData[item] / total) *100).toFixed(2)
    }
})
// // output // //

// [{ id:1, order: 'Below 500', order percentage:'15.9',restaurant: 'Kashi art cafe'}
//  { id:2, order: '500-1000', order percentage: '19.3', restaurant:'Kashi art cafe'}
//  { id:3, order: '1000-1500', order percentage: '3.3', restaurant:'Kashi art cafe'}
//  { id:4, order: '1500-2000', order percentage: '57.1',restaurant:'Kashi art cafe'}
//  { id:5, order: 'Above 2000', order percentage: '4.2',restaurant:'Kashi art cafe'}]