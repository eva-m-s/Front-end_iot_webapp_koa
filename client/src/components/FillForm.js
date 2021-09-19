import {useState} from 'react'
import '../App.css';

const FillForm = ({plants}) => {
const [type, setType]=useState('Inny')
const [species, setSpecies]=useState('Inny')
let filtered;
/*filtered=plants.filter(function(pl){
    return pl.type==='Kwitnące';
})*/
    return (
        <div className="container fill-form">
            <form>
            <div>
                    <h3>Witaj w Monitorze Warunków Uprawy Roślin Doniczkowych!</h3>
                    <p>
                        Wybierz rodzinę oraz gatunek rośliny, która będzie monitorowana przez nasz inteligentny system.
                    </p>
                </div>
                
                <div className="form-group">
                    <label>Typ</label>
                    <select className="form-select custom-select mb-3" onChange={(e)=>
                         setType(e.target.value)
                         }>
                        <option defaultValue>Inny</option>
                        {plants.map((plant) => (
                        <option key ={plant.id} value={plant.type}>{plant.type}</option>
                        ))} 
                    </select>
                </div>

                <div className="form-group">
                    <label>Gatunek</label>
                    <select className="form-select mb-3" onChange={(e)=>
                    //console.log(type)
                    setSpecies(e.target.value)
                    }>
                        <option defaultValue>Inny</option>
                        {
                        type != 'Inny'
                        ? (plants.filter(plant => plant.type === type).flatMap(plant => (
                        plant.species.flatMap(function(names,index){
                        return <option key ={names.name} value={names.name}>{names.name}</option>
                        }))))
                        : plants.flatMap((plant) => (
                         plant.species.flatMap(function(names,index){
                        return <option key ={names.name} value={names.name}>{names.name}</option>
                        })))}

                    </select> 
                </div>
                
                <button className="w-100 btn btn-lg btn-success" type="submit">OK
                </button>

            </form>
        </div>
    )
}

export default FillForm
