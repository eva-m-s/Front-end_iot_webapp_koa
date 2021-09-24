import {useState, useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FillForm from './components/FillForm';
import MainView from './components/MainView';


function App() {
  const [showFillForm, setshowFillForm]=useState(true)
  const [islocalStoregeEmpty, setislocalStoregeEmpty]=useState(true)

  useEffect(() => {
    if ((localStorage.getItem('type') === null)&& (localStorage.getItem('species') === null)){
        setislocalStoregeEmpty(true)}
    else {setislocalStoregeEmpty(false)}
}, []);
  
   
  const [plants]=useState([
  {
  id: 1,
  type: 'Kaktusowate' ,
  species:[
  {
      nr: 11,
      name: 'Opuncja',
      temp: 'hot' ,
      hum: 'medium' ,
      soil: 'dry' ,
      ligh: 'strong' 
  },
  {
      nr: 12,
      name: 'Aloes',
      temp: 'hot' ,
      hum: 'high' ,
      soil: 'dry' ,
      ligh: 'strong' 
  },
  ]},
  {
  id: 2,
  type: 'Kwitnące' ,
  species:[
      {
          nr: 14,
          name: 'Storczyk',
          temp: 'warm' ,
          hum: 'medium' ,
          soil: 'medium' ,
          ligh: 'medium' 
      },
      {
          nr: 15,
          name: 'Skrzydłokwiat',
          temp: 'medium' ,
          hum: 'low' ,
          soil: 'wet' ,
          ligh: 'low' 
      }
  ]},
  {
    id: 3,
    type: 'Inny' ,
    species:[
        {
            name: 'Inny',
            nr: 16,
            temp: 'medium' ,
            hum: 'medium' ,
            soil: 'medium' ,
            ligh: 'medium' 
        }
    ]}
] )
  return (
    <div className="App">
        {islocalStoregeEmpty  && <FillForm plants={plants} />}
        {!islocalStoregeEmpty &&  <MainView onOk ={()=>{setislocalStoregeEmpty(true);console.log(islocalStoregeEmpty)}}/>}
    </div>
  );
}
export default App;
