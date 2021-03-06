import {useState,useEffect} from 'react'
import '../App.css';

/*....................................
---------------VARIABLES--------------
....................................*/
let currentType;
let currentSpecies;
let buttonState;
let selectSpeciesState=true;

//-------------FUNCTION TO GET TYPE--------------
function getType(){
    const storedType = localStorage.getItem('type');
    if(!storedType) return 'Inny';
    else return JSON.parse(storedType);
}

//-------------FUNCTION TO GET SPECIES--------------
function getSpecies(){
    const storedSpecies = localStorage.getItem('species');
    if(!storedSpecies) return 'Inny';
    else return JSON.parse(storedSpecies);
}

const FillForm = ({plants}) => {

    const [type, setType]=useState(getType)
    const [species, setSpecies]=useState(getSpecies)

    /*.....................................................
    -----------SET BUTTONSTATE WHEN PAGE RENDERS-----------
    ......................................................*/
    useEffect(() => {
    currentType = document.getElementById("select_type").value;
    currentSpecies = document.getElementById("select_species").value;
    (currentType!=='Wybierz typ' && currentSpecies!=='Wybierz gatunek')
    ? buttonState=false
    : buttonState=true
    }, [])

    /*useEffect(() => {
		localStorage.setItem('type', JSON.stringify(type));
	}, [type]);

    useEffect(() => {
		localStorage.setItem('species', JSON.stringify(species));
	}, [species]);*/


    /*{plants.flatMap((plant => (
        plant.species.flatMap(function(names,index){
        return names.name})))).filter(function(names){
        return names !=="Aloes";
        }).flatMap(function(names,index){
        return console.log(names)
    })}*/

    /*.....................................................
    ------------------OK BUTTON FUNCTION-------------------
    ......................................................*/
    const onAccept=()=>{
        localStorage.setItem('type', JSON.stringify(type));
        localStorage.setItem('species', JSON.stringify(species));
    }

    /*.....................................................
    ------------ACTUAL FILL FORM COMPONENT------------
    ......................................................*/
        return (
            <div className="container fill-form">
                <form>
                <div>
                        <h3>Witaj w Monitorze Warunk??w Uprawy Ro??lin Doniczkowych!</h3>
                        <p>
                            Wybierz rodzin?? oraz gatunek ro??liny, kt??ra b??dzie monitorowana przez nasz inteligentny system.
                        </p>
                    </div>
                    
                    <div className="form-group">
                        <label>Typ</label>
                        <select className="form-select custom-select mb-3" id="select_type" onClick={(e)=>{
                            selectSpeciesState=false;
                            setType(e.target.value)
                            currentType=document.getElementById("select_type").value; 
                            currentSpecies = document.getElementById("select_species").value; 
                            console.log(currentType,currentSpecies)
                            if(currentType!=='Wybierz typ' && currentSpecies!=='Wybierz gatunek')
                            {
                                buttonState=false
                            }
                            else {
                                buttonState=true
                            }
                        }}>
                            <option hidden className="select-form-default" defaultValue>Wybierz typ</option>
                            {plants.flatMap((plant) => (
                            <option key ={plant.id} value={plant.type}>{plant.type}</option>
                            ))} 
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Gatunek</label>
                        <select disabled ={selectSpeciesState} className="form-select mb-3" id="select_species" onClick={(e)=>{
                        setSpecies(e.target.value)
                        currentType = document.getElementById("select_type").value;
                        currentSpecies = document.getElementById("select_species").value;
                        if (currentSpecies!=='Wybierz gatunek' && currentType!=='Wybierz typ')
                            {
                                buttonState=false
                            }
                        else {
                            buttonState=true
                        }  
                        }}>
                            <option hidden className="select-form-default" defaultValue>Wybierz gatunek</option>
                            {type !== 'Inny' && <option value="Inny">Inny</option>}
                            {
                            type !== 'Inny'
                            ? (plants.filter(plant => plant.type === type).flatMap(plant => (
                            plant.species.flatMap(function(names,index){
                            return <option key ={names.nr} value={names.name}>{names.name}</option>
                            }))))
                            : plants.flatMap((plant) => (
                            plant.species.flatMap(function(names){
                            return <option key ={names.nr} value={names.name}>{names.name}</option>
                            })))}
                           
                        </select>

                    </div>
                    
                    <button disabled = {buttonState} onClick={onAccept} className="w-100 btn btn-lg btn-success">OK</button>
                </form>
            </div>
        )
    }

export default FillForm
