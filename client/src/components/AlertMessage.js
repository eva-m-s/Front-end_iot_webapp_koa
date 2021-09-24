import {useState,useEffect} from 'react'
import alert from '../images/alert.png';


const AlertMessage = ({record}) => {

    const [messageList, setMessageList] = useState([{messege:""}]);
    
    
    
    useEffect(() => {
    const messageData={   
    messege: "test"
    }
    setMessageList((messageList) => [...messageList,messageData]);
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
