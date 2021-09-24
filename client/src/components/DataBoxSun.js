const DataBoxSun = ({parameter,image,record,data,type}) => {
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
    <div key ={record.id} className="row align-items-end data-box-current">
        {record.light} %
    </div>
  ))}
    <div className="row ">
    {data.filter(data => data.parameter === type).flatMap(data => (
      <span key ={data.id}> Średnia dobowa: {data.average} % </span>
    ))}
    </div>      
  </div>
  </div>
  <div className="row align-items-center">
    <div className="col-5 align-self-start">
    {data.filter(data => data.parameter === type).flatMap(data => (
     <span key ={data.id}> Maksymalne nasłonecznienie: {data.maximum} % [{data.maximumAt}]</span>
    ))}
    </div>
    <div className="col-5 align-self-start">
    {data.filter(data => data.parameter === type).flatMap(data => (
     <span key ={data.id}> Minimalne nasłonecznienie: {data.minimum} % [{data.minimumAt}] </span>
    ))}
    </div>
  </div> 
</div>

    )
}

export default DataBoxSun
