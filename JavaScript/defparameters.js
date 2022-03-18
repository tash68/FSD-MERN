


// this is general one
// function calcTotalPrice(costOfFood, Tax, deliveryCharges){
//     const result = costOfFood+deliveryCharges+Tax;

//     console.log(result);

// }
// calcTotalPrice(400,35,25);

// default parameters
// you can use default value if value is not assigned
function calcTotalPrice(costOfFood, Tax, deliveryCharges=15){  // if we dont pass the value then the default one will consider this 15 and gives you the o/p
    const result = costOfFood+deliveryCharges+Tax;
    console.log(result);
}
// regular membership
calcTotalPrice(600, 25, 50);//675

// pro membership
calcTotalPrice(800, 30, 40);//870  we passed the value so now it will overwrite the default value 15 and takes our value for the calc 
calcTotalPrice(800,30);// 845      we didnt pass the value so default value 15 is considered for calc 