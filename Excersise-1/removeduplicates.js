var arr=[1,2,3,4,2,5,1];
var result=[];
arr.forEach(function(item){
if(result.indexOf(item)<0){
    result.push(item);
}
});
console.log("Array after removing duplicates\t"+result);
