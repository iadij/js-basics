// find char count in a string

function findCharCountInStringV1(value) {
    const obj = {}
    for(let i=0;i<value.length;i++)
    {
        let count=0;
        for(let j=0;j<value.length;j++)
        {
            if(value[i]==value[j])
            count++;
        }
       obj[value[i]]=count
    }
    return obj
}

console.log(findCharCountInStringV1("hello"));
// h: 1
// e: 1
// l: 2
// o : 1

function findChatCount(value) {
    const obj = {}
    for (let index = 0; index < value.length; index++) {
        if(obj[value[index]] !== undefined ){
            obj[value[index]] += 1
        } else {
            obj[value[index]] = 1
        }
    }
    return obj
}

function findChatCountV2(value) {
    const obj = {}
    for (let index = 0; index < value.length; index++) {
        obj[value[index]] = (obj[value[index]] || 0)+1
    }
    return obj
}


console.log(findChatCountV2("hello"));
