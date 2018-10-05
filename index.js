function findMatching (list, name){
return list.filter(function (driverName) {
return driverName.toLowerCase() === name.toLowerCase();
});
}

function fuzzyMatch(list, nickName){
 return list.filter(function (driverName) {
return driverName.slice(0, driverName.length) === name.toLowerCase();
});
}

function matchName(drivers){
  
}