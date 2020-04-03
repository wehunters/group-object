# group-object
grouping and sorting function for an object

## Installation

Install with npm

```
npm install @hunters/group-object
```

## Usage

Include the module

```javascript
var groupObj = require('@hunters/group-object');
```

group an object for a key

```javascript
var arrs=[
    {
        id:1,
        name:"aaa",
        values:"atest"
    },{
        id:1,
        name:"aaa",
        values:"atest"
    },{
        id:1,
        name:"bbbb",
        values:"btest"
    },{
        id:2,
        name:"ccc",
        values:"ctest"
    },{
        id:1,
        name:"ccc",
        values:"ctest"
    }
];
var groupedData =groupedDatagroupObj.group(arrs,['id','name');
console.log(addresses); 
```



```javascript
// sort a json object for given keys

let arrToSort = [{
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
let keys = ['city','state','price'];
let sortedData = obj.objsort(arrToSort,keys);
```
## Notes

Javascript helper functions for json object grouping and sorting

## License

**MIT**
