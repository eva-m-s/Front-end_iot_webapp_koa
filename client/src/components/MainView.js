import {useState,useEffect} from 'react'
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
/*....................................
---------------VARIABLES--------------
....................................*/
let dt=[];
const storedType = localStorage.getItem('type');
const storedSpecies = localStorage.getItem('species');


const MainView = ({onOk,socket,plants}) => {

//---------GET CURRENT CONDITIONS--------
      const [record,setRecord]=useState([])
      useEffect(() => {
        socket.on('getRecord', (record) => {
        setRecord([record])
        console.log([record])
        });
      }, [socket]);
      
//--------GET CONDITIONS STATISTICS------- 
      const [data,setData]=useState([])
      useEffect(() => {
       // dt=[];
        socket.on('getData', (data) => { 
        dt.push(data)
        //setTimeout(function() {setData(dt);},10); 
        setData(data);
        
      });
        
        console.log(dt)
      }, [socket]);

/*.....................................................
------------ACTUAL MAIN VIEW COMPONENT------------
......................................................*/
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
                     <AlertMessage record={record} plants={plants}/>  
                    </div>  
                    <div className="row justify-content-around">
                     <WateringMessage date={"2021-11-10"}/>  
                    </div>
                    </div>
                    <div className="col align-content-end">
                    <div className="row row justify-content-evenly">
                    <div className="col-7 align-content-center">
                    <div className="chosen w-100">Wybrany typ: <b>{storedType}</b> wybrany gatunek: <b>{storedSpecies}</b></div>
                   </div>
                    <div className="col-3 align-content-center">
                    <button onClick={onOk} className="w-75 btn btn-lg btn-success btn-mine">Zmień</button>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    
        
    )
}

export default MainView
