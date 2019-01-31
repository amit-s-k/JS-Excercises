(function(){
    var number=prompt("Enter a number");
    var numberAsList=number.split("");
    
    var output="";
    for(let i=0;i<=numberAsList.length-1;i++){
        if(numberAsList[i]%2==0 && numberAsList[i+1]%2==0){
            output+=numberAsList[i]+"-";
        }
        else{
            output+=numberAsList[i];
        }
    }
    document.getElementById("text").innerHTML="Output after inserting dashes : "+output;
})();
