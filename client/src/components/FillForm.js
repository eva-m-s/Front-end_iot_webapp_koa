import {useState,useEffect} from 'react'
import '../App.css';

function getType(){
    const storedType = localStorage.getItem('type');
    if(!storedType) return 'Inny';
    else return JSON.parse(storedType);

}

function getSpecies(){
    const storedSpecies = localStorage.getItem('species');
    if(!storedSpecies) return 'Inny';
    else return JSON.parse(storedSpecies);
}


const FillForm = ({plants}) => {
    const [type, setType]=useState(getType)
    const [species, setSpecies]=useState(getSpecies)

    /*useEffect(() => {
		localStorage.setItem('type', JSON.stringify(type));
	}, [type]);

    useEffect(() => {
		localStorage.setItem('species', JSON.stringify(species));
	}, [species]);*/

    const onAccept=()=>{
        localStorage.setItem('type', JSON.stringify(type));
        localStorage.setItem('species', JSON.stringify(species));
    }



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
                            <option defaultValue>{type}</option>
                            {plants.filter(plant =>plant.type !==type).flatMap((plant) => (
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
                            <option defaultValue>{species}</option>
                            {
                            type !== 'Inny'
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
                    
                    <button onClick={onAccept} className="w-100 btn btn-lg btn-success">OK</button>

                </form>
            </div>
        )
    }

export default FillForm
