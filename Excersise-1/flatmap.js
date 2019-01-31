var arr=[5, [22], [[14]], [[4]],[5,6]];
console.log(arr.reduce((acc,item) => acc.concat(item),[]).reduce((acc,item) => acc.concat(item),[]));