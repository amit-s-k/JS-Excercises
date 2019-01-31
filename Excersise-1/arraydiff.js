var firstArr=[1,2,3,4,5];
var secondArr=[2,3,4,5,6];
for(let i=0;i<firstArr.length;i++){
    firstArr[i]=firstArr[i]-secondArr[i];
}
console.log(firstArr);