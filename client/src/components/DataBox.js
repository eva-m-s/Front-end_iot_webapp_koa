const DataBox = ({parameter,image,record,data}) => {
    return (
<div className="container data-box">
    <div className="row">
        <label className="data-box-label">{parameter}</label>
    </div>
<div className="row">
  <div className="col-6">
    <img src={image} alt="Temp"/>   
  </div>

  <div className="col-6 align-self-center">
  {record.map((record) => (
    <div className="row align-items-end data-box-current">
        {record.temperature} &#176;C
    </div>
  ))}
    <div className="row ">
    {data.map((data) => (
      <span> Średnia temperatura dobowa: {data.average} &#176;C </span>
    ))}
    </div>      
  </div>
  </div>
  <div className="row align-items-center">
    <div className="col-5 align-self-start">
    {data.map((data) => (
     <span> Maksymalna temperatura: {data.maximum} &#176;C [{data.maximumAt}]</span>
    ))}
    </div>
    <div className="col-5 align-self-start">
    {data.map((data) => (
     <span> Minimalna temperatura: {data.minimum} &#176;C [{data.minimumAt}] </span>
    ))}
    </div>
  </div> 
</div>

    )
}

export default DataBox
