import watercan from '../images/watercan.png';

const AlertMessage = ({date}) => {
    return (
        <div className="message">
            <div class="row align-items-center">
                <div class="col-sm-3"><img src={watercan} alt="Alert"/>  </div>
                <div class="col-sm-8">
                    <h5>Przewidywana data następnego podlania: {date} </h5>
                </div>
            </div>
        </div>
    )
}

export default AlertMessage
