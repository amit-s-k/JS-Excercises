function replaceAllOccurances(str){
    var originalLength=str.length;
    var modifiedLength=str.replace(/e/g,"").length;
    console.log(originalLength);
    console.log(modifiedLength);
    var demo=originalLength-modifiedLength;
    console.log("Number Of Occurances: "+demo);
}
replaceAllOccurances("done for me");