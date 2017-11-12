// const person = { 
//     name: 'Karen',
//     age: 39,
//     location: {
//         city: 'Philadelphia',
//         temp: 88
//     }
// };

// const { name: firstName = 'Anonymos', age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${city} in ${temperature}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'maria'
//     }
// };

// const {name: publisherName = 'Penguin'} = book.publisher;
// console.log(publisherName); 

// const address = ['1299 S Juniper Strret', 'Philadelphia','Pennsylvania', '19147'];

// const [, , state = 'New York'] = address;

// console.log(`You are in  ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75' ];

const [coffeeType, , medium] = item

console.log(`A medium ${coffeeType} costs ${medium}`);