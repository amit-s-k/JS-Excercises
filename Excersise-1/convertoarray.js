var obj = {
"One":"1",
"Two":"2",
"Three":"3",
"Four":"4"
}

var arr=[];
for (prop in obj){
    arr.push(obj[prop]);
}
console.log(arr);
