let name = "ravi";
let dept = "IT";
let id = "1295";
let getDept = function(){
    return dept;

}
let getId = function(){
    return id;

}
let setDept = function(newDept){
    dept = newDept;
}
let setId = function(newId){
    id = newId;

}
let getName = function(){
    return name;

}
let setName = function(newName){
    name = newName;

}
export {getDept,setDept,getId,setId,getName,setName}