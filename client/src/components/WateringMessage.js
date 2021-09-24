import watercan from '../images/watercan.png';

const AlertMessage = ({date}) => {
    return (
        <div className="message">
            <div className="row align-items-center">
                <div className="col-sm-3"><img src={watercan} alt="Alert"/>  </div>
                <div className="col-sm-8">
                    <h5>Przewidywana data następnego podlania: {date} </h5>
                </div>
            </div>
        </div>
    )
}

export default AlertMessage
