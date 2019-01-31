var arr =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

console.log(arr.filter(item => item.occupation=="Programmer"));
console.log("\n");
console.log(arr.sort(function(item1,item2){
if(item1.age>item2.age){
    return -1;
}else if(item1.age<item2.age){
return 1;
}else{
    return 0;
}
}));

var list=[];
var temp2={};
var temp={};

for(let i=0;i<arr.length;i++){
    temp2={};
    list=[];
    temp2.name=arr[i].name;
    temp2.age=arr[i].age;
    list.push(temp2);
    if(arr[i].occupation in temp){
        temp[arr[i].occupation].push(temp2);
    }else{
    temp[arr[i].occupation]=list;
    }
}
console.log(temp);
var map=new Map();
map.set("names",arr.map(item=>item.name));
console.log(map);



