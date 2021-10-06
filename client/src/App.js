import io from 'socket.io-client';
import {useState, useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FillForm from './components/FillForm';
import MainView from './components/MainView';

//const socket = io.connect("http://192.168.1.18:3001");
//const socket = io.connect("http://192.168.1.15:3001");
const socket = io.connect("http://localhost:3001");

let pdt=[];

function App() {
  //const [showFillForm, setshowFillForm]=useState(true)
  const [islocalStoregeEmpty, setislocalStoregeEmpty]=useState(true)

  useEffect(() => {
    if ((localStorage.getItem('type') === null)&& (localStorage.getItem('species') === null)){
        setislocalStoregeEmpty(true)}
    else {setislocalStoregeEmpty(false)}
}, []);

/*const [plants,setPlants]=useState([])
      useEffect(() => {
        socket.on('getPlants2', (plants) => {
        pdt.push(plants)
        setPlants(pdt)
        //setTimeout(function() {setPlants(pdt);},10);
        console.log(pdt)
        });
      }, []);*/
  
 const [plants,setPlants] = useState([])
 useEffect(() => {
    socket.on("getPlants", (plants) => {
      setPlants(plants);
    });
  }, []);
 
  return (
    <div className="App">
        {islocalStoregeEmpty  && <FillForm plants={plants} />}
        {!islocalStoregeEmpty &&  <MainView plants={plants} socket={socket} onOk ={()=>{setislocalStoregeEmpty(true);console.log(islocalStoregeEmpty)}}/>}
    </div>
  );
}
export default App;
