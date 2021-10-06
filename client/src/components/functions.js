
const tempFuzz=(tempX)=>{
    if(tempX >= 30){
    
        return 'hot'
    }  
    else if(20 < tempX && tempX < 30){
        return 'warm'
    }
    else if(10 <= tempX && tempX <=20){
        console.log(tempFuzz)
        return 'medium'
    }
    else {
        console.log(tempFuzz)
        return 'cold'
    }
}
export {tempFuzz};