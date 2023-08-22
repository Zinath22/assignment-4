function cubeNumber(number) {
 
    if(typeof number !== "number" ){
  
    return "please provide  number input"; 
   }

  const cube = Math.pow(number, 3)
     return cube;
    }
    function matchFinder(string1,string2) {
if(typeof string1 !== 'string' || typeof string2 !== 'string'){
    return "please provide string value";
        }
        if(string1.indexOf(string2) !== -1){
            return true;
        }
        else{
            return false;
        }
    }
function sortMaker(arr) {
        if( arr[0] > arr [1]){
            return [arr[0], arr[1]];
          }
      if( arr[0] ===  arr[1]){
                return "equal";
            }
            if(arr[0] < 0 || arr[1] < 0){
                return "invalid input"
            }
            else{
          return [arr[1], arr[0]];
                }
        }
       function findAddress(obj){
        if(typeof obj !== "object"){
            return "please provide me a valid object"
        }
        else{
            const street = obj.street || "__";
            const house = obj.house || "__";
            const society = obj.society || "__";
          return ""+street+","+house+","+society;
        }
    }
   function canPay(changeArray, totalDue) {
              if ([changeArray[0]] == 0){
                return "Array is empty"
              }
             
            let sum = 0;
            for(let i = 0; i < changeArray.length ; i++){
            sum += changeArray[i];}

         if(sum >= totalDue){
           return true;
           }
            else if(sum < totalDue){
          return false;
        }
        }
      
      
