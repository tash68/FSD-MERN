const ratingData = [
    { restaurant: 'Taco Bell', rating: 5 },
    { restaurant: 'wow momo', rating: 4 },
    { restaurant: 'Taco bell', rating: 3 },
    { restaurant: 'Domino', rating: 2 },
    { restaurant: 'Subway', rating: 3 },
    { restaurant: 'Domino', rating: 1 },
    { restaurant: 'Subway', rating: 4 },
    { restaurant: 'Pizza Hut', rating: 5 }
];

// a)
const headers = Array.from(new Set(ratingData.map(({ restaurant }) => restaurant))); 
let arr = [];
headers.map((head) => {
    let total = 0; 
    let count = 0; 
    const filteredratingData = ratingData.filter(obj => obj.restaurant == head); 
    filteredratingData.map((item) => {
        total = filteredratingData.reduce((prev, next) => prev + next.rating, 0);
        count++;
    })
    arr.push({ 'restaurant': head, 'averageRating': (total / count).toFixed(2) });  
})
return arr;

// o/p----> [{ restaurant: 'Wow momo', averageRating: 4},
//           { restaurant: 'Taco bell', averageRating: 4},
//           { restaurant: 'Domino', averageRating: 1.5},
//           { restaurant: 'Subway', averageRating: 3.5},
//           { restaurant: 'Pizza Hut', averageRating: 5}]


// b)
arr.filter(item => item.averageRating >= 4);

// o/p---->[{ restaurant: 'wow momo', averageRating: 4},
//          { restaurant: 'Taco bell', averageRating: 4},
//          { restaurant: 'Pizza Hut', averageRating: 5}]