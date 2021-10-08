import {useState,useEffect} from 'react';
import alert from '../images/alert.png';
import {tempFuzz} from './functions.js';
import {humFuzz} from './functions.js';
import {soilFuzz} from './functions.js';
import {lightFuzz} from './functions.js';

/*....................................
---------------VARIABLES--------------
....................................*/
let messageData = "";
let messageDataHum = "";
let messageDataSun = "";
let messageDataSoil = "";
let refVal;

//-------------FUNCTION TO GET TYPE--------------
function getType(){
    const storedType = localStorage.getItem('type');
    if(!storedType) return 'Inny';
    else return JSON.parse(storedType);
}
//------------FUNCTION TO GET SPECIES--------------
function getSpecies(){
    const storedSpecies = localStorage.getItem('species');
    if(!storedSpecies) return 'Inny';
    else return JSON.parse(storedSpecies);
}

const AlertMessage = ({record, plants}) => {
    const [messageList, setMessageList] = useState([{messege:""}]);
    const [type]=useState(getType);
    const [species]=useState(getSpecies);

   /* const temp = plants.filter(plant => plant.type === type).flatMap(plant => (
        plant.species.flatMap(function(names){
        return names.name; }))).filter(function(names){
            return names === species;  
        }).flatMap(function(temps){
            return temps;
        })*/
    
    /*.....................................................
    -------GETTING REFERENCIAL VALUES FOR PLANTS-----------
    ......................................................*/    
    useEffect(() => {
    if(species==='Inny'&& type ==='Inny'){
        refVal = plants.filter(plant => plant.type === type).flatMap(plant => (
        plant.species.filter(function(names){
            return names.name === species; }))) 
        .flatMap(function(refs){
            const tempRefs=[refs.temp,refs.hum, refs.soil,refs.light];
           return [tempRefs[0][0],tempRefs[1][0],tempRefs[2][0],tempRefs[3][0]]
        })}
    else if(species==='Inny'&& type ==='Kwitnące'){
    refVal = plants.filter(plant => plant.type === 'Inny').flatMap(plant => (
        plant.species.filter(function(names){
            return names.name === 'Inny'; }))) 
        .flatMap(function(refs){
            const tempRefs=[refs.temp,refs.hum, refs.soil,refs.light];
            return [tempRefs[0][2],tempRefs[1][2],tempRefs[2][2],tempRefs[3][2]]
        })}
    else if(species==='Inny'&& type ==='Kaktusowate'){
        refVal = plants.filter(plant => plant.type === 'Inny').flatMap(plant => (
            plant.species.filter(function(names){
                return names.name === 'Inny'; }))) 
            .flatMap(function(refs){
                const tempRefs=[refs.temp,refs.hum, refs.soil,refs.light];
                return [tempRefs[0][1],tempRefs[1][1],tempRefs[2][1],tempRefs[3][1]]
            })}

    else{refVal = plants.flatMap(plant => (
        plant.species.filter(function(names){
            return names.name === species; }))) 
        .flatMap(function(refs){
            return [refs.temp,refs.hum, refs.soil,refs.light]
        })}
   /* const refVal = plants.flatMap(plant => (
        plant.species.filter(function(names){
            return names.name === species; }))) 
        .flatMap(function(refs){
            return [refs.temp,refs.hum, refs.soil,refs.light]
        });*/
    /*.....................................................
    ------------------COMPARE TEMPERATURE-------------------
    ......................................................*/     
    const unpackTemp = record.map(function(record){
        return record.temperature;
    });
    if (tempFuzz(unpackTemp) > refVal[0]) {
    messageData={   
    messege: "Za gorąco!"
    }
    //setMessageList((messageList) => [messageData]);
    }
    else if (tempFuzz(unpackTemp) < refVal[0]) {
        messageData={   
        messege: "Za zimno!"
        }
        //setMessageList((messageList) => [messageData]);
        }
    else {
        messageData={   
        messege: ""
        }
        //setMessageList((messageList) => [messageData]);
        }
        setMessageList((messageList) => [messageData]);

        /*.....................................................
        ------------------COMPARE HUMIDITY-------------------
        ......................................................*/
        const unpackHum = record.map(function(record){
            return record.humidity;
        });
        if (humFuzz(unpackHum) > refVal[1]) {
        messageDataHum={   
        messege: "Za wilgotno!"
        }
        //setMessageList((messageList) => [messageData]);
        }
        else if (humFuzz(unpackHum) < refVal[1]) {
            messageDataHum={   
            messege: "Za sucho!"
            }
            //setMessageList((messageList) => [messageData]);
            }
        else {
            messageDataHum={   
            messege: ""
            }
            //setMessageList((messageList) => [messageData]);
            }
            
        setMessageList((messageList) => [...messageList,messageDataHum]);

        /*.....................................................
        ------------------COMPARE LIGHT-------------------
        ......................................................*/
        const unpackSun = record.map(function(record){
            return record.light;
        });
        if (lightFuzz(unpackSun) > refVal[3]) {
        messageDataSun={   
        messege: "Za dużo słońca!"
        }
        //setMessageList((messageList) => [...messageList, messageData]);
        }
        else if (lightFuzz(unpackSun) < refVal[3]) {
            messageDataSun={   
            messege: "Za mało słońca!"
            }
           // setMessageList((messageList) => [...messageList,messageData]);
            }
        else {
            messageDataSun={   
            messege: ""
            }
            //setMessageList((messageList) => [...messageList,messageData]);
            }
            
            setMessageList((messageList) => [...messageList,messageDataSun]); 

        /*.....................................................
        -----------------------COMPARE SOIL--------------------
        ......................................................*/
        const unpackSoil = record.map(function(record){
            return record.soil;
        });
        if (soilFuzz(unpackSoil) > refVal[2]) {
        messageDataSoil={   
        messege: "Za dużo wody!"
        }
        //setMessageList((messageList) => [...messageList, messageData]);
        }
        else if (soilFuzz(unpackSoil) < refVal[2]) {
            messageDataSoil={   
            messege: "Za mało wody!"
            }
            // setMessageList((messageList) => [...messageList,messageData]);
            }
        else {
            messageDataSoil={   
            messege: ""
            }
            //setMessageList((messageList) => [...messageList,messageData]);
            }
            setMessageList((messageList) => [...messageList,messageDataSoil]);
}, [record,species,type,plants]);

/*.....................................................
------------ACTUAL ALLERT MESSAGE COMPONENT------------
......................................................*/
    return (
        <div className="message">
            <div className="row align-items-center">
                <div className="col-sm-4"><img src={alert} alt="Alert"/>  </div>
                <div className="col-sm-8">
                {messageList.map((messageContent,index) => (
                    <h5 key ={index}>{messageContent.messege}</h5>
                
                ))}
                </div>
            </div>
        </div>
    )
}

export default AlertMessage
