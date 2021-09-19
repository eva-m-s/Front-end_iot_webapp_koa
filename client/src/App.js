import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FillForm from './components/FillForm';


function App() {const [plants]=useState([
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
        <FillForm plants={plants}/>
    </div>
  );
}
export default App;
