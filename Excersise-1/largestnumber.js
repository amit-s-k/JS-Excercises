var a=[-10,2,3,5,-4];
var largest=a[0];
for (let i=1;i<a.length;i++){
    if(a[i]>largest){
        largest=a[i];
    }
}
console.log("Largest Number: "+largest);