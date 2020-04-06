# group-object
grouping and sorting function for an object using multiple properties

## Installation

Install with npm

```
npm install @hunters/group-object
```

## Usage

Include the module

```javascript
var groupObj = require('@hunters/group-object');
// group an object for multiple properties

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

var groupedData = groupObj.group(arrObj,['price','city']);
console.log(groupedData); 

var groupedData = groupObj.group(arrObj,'city');
console.log(groupedData); 

// sort a json object for multiple properties
let sortedData = groupObj.objSort(arrObj,['city','state','price']);
console.log(sortedData); 

var sortedData = groupObj.objSort(arrObj,'city');
console.log(sortedData); 
```
## Notes

Javascript helper functions for json object grouping and sorting for multiple properties

## License

**MIT**
