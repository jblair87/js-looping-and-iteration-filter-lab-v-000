function findMatching (list, name){
return list.filter(function (driverName) {
return driverName.toLowerCase() === name.toLowerCase();
});
}

function fuzzyMatch(list, nickName){
 return list.filter(function (driverName) {
return driverName.slice() === name.toLowerCase();
});
}

function matchName(drivers){
  
}