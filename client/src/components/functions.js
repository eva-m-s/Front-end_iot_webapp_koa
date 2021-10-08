/*.......................................
--------------TEMPERATURE----------------
........................................*/

const tempFuzz=(tempX)=>{
    if(tempX >= 30){
    
        return 3 //'hot'
    }  
    else if(20 < tempX && tempX < 30){
        return 2 //'very warm'
    }
    else if(10 <= tempX && tempX <=20){
        return 1 //'warm'
    }
    else {

        return 0 //'cold'
    }
}

/*.......................................
-----------------HUMIDITY----------------
........................................*/

const humFuzz=(humX)=>{
    if(humX >= 60){
    
        return 3 //'high'
    }  
    else if(50 <= humX && humX < 60){
        return 2 //'high medium'
    }
    else if(30 <= humX && humX <50){
        return 1 //'low medium'
    }
    else {

        return 0 //'low'
    }
}

/*.......................................
-----------------SOIL-------------------
........................................*/

const soilFuzz=(soilX)=>{
    if(soilX >= 90){
    
        return 4 //'basically water'
    }  
    else if(70 <=soilX && soilX < 90){
        return 3 //'very wet'
    }
    else if(50 <= soilX && soilX <70){
        return 2 //'wet'
    }
    else if(30 <= soilX && soilX <50){
        return 1 //'low medium'
    }
    else {

        return 0 //'dry'
    }
}

/*.......................................
-----------------LIGHT-------------------
........................................*/

const lightFuzz=(lightX)=>{
    if(lightX >= 95){
    
        return 3 //'strong'
    }  
    else if(80 <=lightX && lightX < 95){
        return 2 //'high medium'
    }
    else if(60 <= lightX && lightX <70){
        return 1 //'low medium'
    }
   
    else {

        return 0 //'dark
    }
}

export {tempFuzz,humFuzz,soilFuzz,lightFuzz};