function findDuplicateChar(value)
{
    const obj={}
    const duplicates = []
    for (let index = 0; index < value.length; index++) {
        const element = value[index];
        obj[element] = (obj[element] || 0) + 1
        if (obj[element] > 1 && !duplicates.includes(element)) {
            duplicates.push(element)
        }
    }
    return duplicates
}

function findDuplicateCharV1(value)
{
    const obj={}
    for (let index = 0; index < value.length; index++) {
        const element = value[index];
        obj[element] = (obj[element] || 0) + 1
    }
    
    const duplicates = []
    for (const key in obj) {
        if(obj[key] > 1){
            duplicates.push(key)
        }
    }
    return duplicates
}
console.log(findDuplicateCharV1("helllo"))

console.log("test");