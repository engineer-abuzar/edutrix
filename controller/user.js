let arr=[1,2,3,4,5,6];
let i=0;
(function fun(){
     
     for (i=0;i<arr.length;i++){
        if(i==2)
            return i
        console.log(i)
     }   
    
})()

