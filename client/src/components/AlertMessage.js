import {useState,useEffect} from 'react'
import alert from '../images/alert.png';
import {tempFuzz} from './functions.js'
let messageData = "";
let messageDataHum = "";
let messageDataSun = "";
let messageDataSoil = "";


function getType(){
    const storedType = localStorage.getItem('type');
    if(!storedType) return 'Inny';
    else return JSON.parse(storedType);
}

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

        const temp = plants.filter(plant => plant.type === type).flatMap(plant => (
        plant.species.filter(function(names){
            return names.name === species; }))) 
        .flatMap(function(temps){
            return temps.temp;
        })

    useEffect(() => {
    const unpackTemp = record.map(function(record){
        return record.temperature;
    });
    if (unpackTemp >30) {
    messageData={   
    messege: "Za gorąco!"
    }
    //setMessageList((messageList) => [messageData]);
    }
    else if (unpackTemp < temp) {
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

        const unpackHum = record.map(function(record){
            return record.humidity;
        });
        if (unpackHum > 90) {
        messageDataHum={   
        messege: "Za wilgotno!"
        }
        //setMessageList((messageList) => [messageData]);
        }
        else if (unpackHum < 50) {
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

        const unpackSun = record.map(function(record){
            return record.light;
        });
        if (unpackSun > 95) {
        messageDataSun={   
        messege: "Za dużo słońca!"
        }
        //setMessageList((messageList) => [...messageList, messageData]);
        }
        else if (unpackSun < 20) {
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
            console.log(tempFuzz(30))
            setMessageList((messageList) => [...messageList,messageDataSun]); 

        const unpackSoil = record.map(function(record){
            return record.soil;
        });
        if (unpackSoil > 80) {
        messageDataSoil={   
        messege: "Za dużo wody!"
        }
        //setMessageList((messageList) => [...messageList, messageData]);
        }
        else if (unpackSoil < 30) {
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
    
     }, [record]);
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
