const DataBoxTemp = ({parameter,image,record,data,type}) => {
    return (
<div className="container data-box">
    <div className="row">
        <label className="data-box-label">{parameter}</label>
    </div>
<div className="row">
  <div className="col-4">
    <img src={image} alt="Temp"/>   
  </div>

  <div className="col-7 align-self-center">
  {record.map((record) => (
    <div className="row align-items-end data-box-current">
        {record.temperature} &#176;C
    </div>
  ))}
    <div className="row ">
    {data.filter(data => data.parameter === type).flatMap(data => (
      <span> Średnia dobowa: {data.average} &#176;C </span>
    ))}
    </div>      
  </div>
  </div>
  <div className="row align-items-center">
    <div className="col-5 align-self-start">
    {data.filter(data => data.parameter === type).flatMap(data => (
     <span> Maksymalna temperatura: {data.maximum} &#176;C [{data.maximumAt}]</span>
    ))}
    </div>
    <div className="col-5 align-self-start">
    {data.filter(data => data.parameter === type).flatMap(data => (
     <span> Minimalna temperatura: {data.minimum} &#176;C [{data.minimumAt}] </span>
    ))}
    </div>
  </div> 
</div>

    )
}

export default DataBoxTemp
