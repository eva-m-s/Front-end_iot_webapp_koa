const DataBox = ({parameter,image}) => {
    return (
<div className="container data-box">
    <div className="row">
        <label>{parameter}</label>
    </div>
<div className="row">
  <div className="col">
    <img src={image} alt="Temp"/>   
  </div>

  <div className="col">
    <div className="row">
        Obecna temperatura: 20C
    </div>
    <div className="row">
        Średnia temperatura dobowa: 21C
    </div>      
  </div>
  </div>
  <div className="row">
    <div className="col">
      Maksymalna temperatura: 25 C (12:15)
    </div>
    <div className="col">
        Minimalna temperatura: 18 C (2:35)
    </div>
  </div> 
</div>
    )
}

export default DataBox
