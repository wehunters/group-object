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
var groupedData =groupedDatagroupObj.group(arrs,'id');
console.log(addresses); 
## Notes

This module does not decode any mime-word or punycode encoded strings, it is only a basic parser for parsing the base data, you need to decode the encoded parts later by yourself

## License

**MIT**
