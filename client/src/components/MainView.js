import {useState} from 'react'
import DataBoxTemp from './DataBoxTemp'
import DataBoxHum from './DataBoxHum'
import DataBoxSun from './DataBoxSun'
import DataBoxSoil from './DataBoxSoil'
import AlertMessage from './AlertMessage'
import WateringMessage from './WateringMessage'
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
        },
        {
        "average": 0.25 ,
        "id": "888a92a6-0ca3-480d-9bef-072ec687a1e9" ,
        "maximum": 1 ,
        "maximumAt": "2021-09-09 13:46:37" ,
        "minimum": 0 ,
        "minimumAt": "2021-09-10 12:25:38" ,
        "parameter": "soil"
        },
        {
        "average": 60 ,
        "id": "888a92a6-0ca3-480d-9bef-072ec687a111" ,
        "maximum": 80 ,
        "maximumAt": "2021-09-09 20:51:37" ,
        "minimum": 54 ,
        "minimumAt": "2021-09-10 12:25:38" ,
        "parameter": "humidity"
        },
        {
        "average": 50 ,
        "id": "888a92a6-0ca3-480d-9bef-072ec687a111" ,
        "maximum": 95 ,
        "maximumAt": "2021-09-09 12:05:37" ,
        "minimum": 8 ,
        "minimumAt": "2021-09-10 2:25:38" ,
        "parameter": "light"
        }              
      ])
    return (
        <div className="container main-view ">
            <div className="row row justify-content-around">
                <DataBoxTemp parameter="Temperatura" image={temp} record={record} data={data} type={"temperature"}/>  
                <DataBoxHum parameter="Wilgotność powietrza" image={hum} record={record} data={data} type={"humidity"}/>  
                <DataBoxSun parameter="Nasłonecznienie" image={sun} record={record} data={data} type={"light"}/>  
            </div>
            <div className="row row justify-content-around">
            <div className="col">
            <div className="row justify-content-around">
                <DataBoxSoil parameter="Wilgotnośc gleby" image={soil} record={record} data={data} type={"soil"}/>
                </div>
                </div>
                <div className="col">
                    <div className="row justify-content-around">
                     <AlertMessage alertMessege={"Za mało wody"}/>  
                    </div>  
                    <div className="row justify-content-around">
                     <WateringMessage date={"2021-11-10"}/>  
                    </div> 
                </div>
            </div>
        </div>
    
        
    )
}

export default MainView
