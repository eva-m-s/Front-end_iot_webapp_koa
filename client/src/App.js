import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FillForm from './components/FillForm';
import MainView from './components/MainView';


function App() {
  const [showFillForm, setshowFillForm]=useState(true)
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
  }
  ]},
  {
  id: 2,
  type: 'Kwitnące' ,
  species:[
      {
          nr: 13,
          name: 'Storczyk',
          temp: 'warm' ,
          hum: 'medium' ,
          soil: 'medium' ,
          ligh: 'medium' 
      },
      {
          nr: 14,
          name: 'Skrzydłokwiat',
          temp: 'medium' ,
          hum: 'low' ,
          soil: 'wet' ,
          ligh: 'low' 
      }
  ]}
] )
  return (
    <div className="App">
        {showFillForm && <FillForm plants={plants} onOk ={()=> setshowFillForm(!showFillForm)} />}
        {!showFillForm && <MainView onOk ={()=> setshowFillForm(!showFillForm)}/>}
    </div>
  );
}
export default App;
