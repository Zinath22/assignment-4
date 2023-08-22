// function findAddress(obj){
//     // if(typeof obj !== "object"){
//     //     return "please provide me a valid object"
//     // }
//    if(obj.street === obj.street || 
//      obj.house === obj.house || 
//      obj.society === obj.society){
//    return " "+street+", "+house+","+society;
// }
// else(obj.street !== obj.street || obj.house === undefined || obj.society === undefined){
//     return '__';
// }
// }
// const obj = {
//     // street: 10,
//     house:"15A",
//     society:"Earth Perfect"
// }
// console.log(findAddress(obj))


// 3 
function sortMaker(arr) {
  result = []
    
    if( arr[0] ===  arr[1]){
            return "equal";
        }
        if(arr[0] < 0 || arr[1] < 0){
            return "invalid input"
        }
        
        if( arr[0] > arr [1]){
          return [arr[0], arr[1]];
          } 
        
      else{
        return [arr[1], arr[0]];
            }
    }
  
const arr =[2,3];
// const arr =[1,2];
// const arr =[4,2];
// const arr = [4,4];
// const arr = [-2,3];
console.log(sortMaker(arr));