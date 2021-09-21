import DataBox from './DataBox'
import Message from './Message'
import temp from "../images/temp.png";
import hum from "../images/hum.png";
import sun from "../images/sun.png";
import soil from "../images/soil.png";

const MainView = ({onOk}) => {
    return (
        <div className="container-sm main-view ">
            <div className="row row justify-content-around">
                <DataBox parameter="Temperatura" image={temp}/>  
                <DataBox parameter="Wilgotność powietrza" image={hum}/>  
                <DataBox parameter="Nasłonecznienie" image={sun}/>  
            </div>
            <div className="row row justify-content-around">
                <DataBox parameter="Wilgotnośc gleby" image={soil}/>
                <Message/> 
            </div>
        </div>
    
        
    )
}

export default MainView
