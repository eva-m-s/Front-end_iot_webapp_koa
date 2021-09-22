import {useState} from 'react'
import DataBox from './DataBox'
import Message from './Message'
import temp from "../images/temp.png";
import hum from "../images/hum.png";
import sun from "../images/sun.png";
import soil from "../images/soil.png";

const MainView = ({onOk}) => {
    const [record]=useState([
        {
            "datetime": "2021-09-10 12:25:38" ,
            "humidity": 64 ,
            "id": "67664640-83cf-493f-bfee-54f611e39127" ,
            "light": 95 ,
            "soil": 0 ,
            "temperature": 20
            }
            
      ])

      const [data]=useState([
        {
        "average": 18.75 ,
        "id": "36699f98-b0ec-443d-a63a-cd94ecc5325b" ,
        "maximum": 20 ,
        "maximumAt": "2021-09-10 12:25:38" ,
        "minimum": 10 ,
        "minimumAt": "2021-09-10 12:12:53" ,
        "parameter": "temperature"
        }           
      ])
    return (
        <div className="container-fluid main-view ">
            <div className="row row justify-content-around">
                <DataBox parameter="Temperatura" image={temp} record={record} data={data}/>  
                <DataBox parameter="Wilgotność powietrza" image={hum} record={record} data={data}/>  
                <DataBox parameter="Nasłonecznienie" image={sun} record={record} data={data}/>  
            </div>
            <div className="row row justify-content-around">
                <DataBox parameter="Wilgotnośc gleby" image={soil} record={record} data={data}/>
                <Message/> 
            </div>
        </div>
    
        
    )
}

export default MainView
