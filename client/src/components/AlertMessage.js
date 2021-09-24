import {useState,useEffect} from 'react'
import alert from '../images/alert.png';
let messageData = "";
let messageDataHum = "";
let messageDataSun = "";
let messageDataSoil = "";
const AlertMessage = ({record}) => {


    const [messageList, setMessageList] = useState([{messege:""}]);
    
    
    
    useEffect(() => {
    const unpackTemp = record.map(function(record){
        return record.temperature;
    });
    if (unpackTemp >10) {
    messageData={   
    messege: "Za gorąco!"
    }
    //setMessageList((messageList) => [messageData]);
    }
    else if (unpackTemp < 5) {
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
