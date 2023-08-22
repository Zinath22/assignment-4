

    // function cubeNumber(number) {
 
    //     if(typeof number !== "number" || number < 0){
      
    //     return "please provide me positive number input"; 
    //    }
    
    //     const result = number * number * number;
    //      return result;
        
    //     }
    //     // const cube = cubeNumber(2)
    //     // console.log(cube);
    //     // console.log(cubeNumber('hi'));
    //     console.log(cubeNumber(-3));


       // 2 
    //    function matchFinder(string1,string2) {
    //     const string1LowerCase = string1.toLowerCase(string1,string2)

    //     if(typeof string1 !== 'string' || typeof string2 !== 'string'){
    //         return "please provide string value";
    //     }
    //     if(string1.includes(string2)){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }
    // const string1 = "Peter Parker ".toLowerCase();
    // const string2 = "Pen".toLowerCase(string1);
    
    // console.log(matchFinder(string1,string2));

        // // //  3 
        function sortMaker(arr) {
          
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

            //  4 
          //   function findAddress(obj){
          //     if(typeof obj !== "object"){
          //         return "please provide me a valid object"
          //     }
          //     else{
          //         const street = obj.street || "__";
          //         const house = obj.house || "__";
          //         const society = obj.society || "__";
          //       return " "+street+", "+house+","+society;
          //     }
          // }
          // const obj = {
          //     street: 10,
          //     house:"15A",
          //     society:"Earth Perfect"
          // }
          // console.log(findAddress(obj))
          

            //   5 
      //       function canPay(changeArray, totalDue) {
      //         if ([changeArray[0]] == 0){
      //           return "Array is empty"
      //         }
             
      //       let sum = 0;
      //       for(let i = 0; i < changeArray.length ; i++){
      //       sum += changeArray[i];}

      //    if(sum >= totalDue){
      //      return true;
      //      }
      //       else if(sum < totalDue){
      //     return false;}
        
      //   }
      //  const changeArray = [ 5,3,5 ];
      // const totalDue = 10;
      // console.log(canPay(changeArray,totalDue));

      // 4 
     

    //         function findAddress(obj) {
    //           const properties = ['street', 'house', 'society'];
    //           const values = [];
    //           for (let i = 0; i < properties.length; i++) {
    //             const property = properties[i];
    //             if (obj[property] !== undefined) {
    //               values.push(obj[property]);
    //             }
    //             else{
    //               values.push('__');
    //             }
    //         }
    //         return values.join(',');
         
    //       }
          
    //   const input = { street: 10, house: "15A", society: "Earth Perfect" };
    // console.log(findAddress(input)) 