const groupObject = require('./index');


let arrObj = [{
    "h_id": "3",
    "city": "Dallas",
    "state": "TX",
    "zip": "75201",
    "price": "162500"
},
{
    "h_id": "4",
    "city": "Bevery Hills",
    "state": "CA",
    "zip": "90210",
    "price": "319250"
},
{
    "h_id": "6",
    "city": "Dallas",
    "state": "TX",
    "zip": "75000",
    "price": "556699"
},
{
    "h_id": "5",
    "city": "New York",
    "state": "NY",
    "zip": "00010",
    "price": "962500"
}
];
console.log("Data for processing :");
console.log(arrObj);

let sortedData = groupObject.objSort(arrObj, ['city', 'state', 'price']);
console.log("Data for after sorting :");
console.log(sortedData);

var groupedData = groupObject.group(arrObj, ['price', 'city']);
console.log("Data for after grouping :");
console.log(groupedData);

