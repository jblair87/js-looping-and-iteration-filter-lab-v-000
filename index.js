function findMatching (list, name){
return list.filter(function (driverName) {
return driverName.toLowerCase() === name.toLowerCase();
});
}

function fuzzyMatch(list, nickName){
  let nameLength = nickName.length
 return list.filter(function (driverName) {
return driverName.slice(0, driverName.length) === nickName;
});
}

function matchName(drivers){
  
}