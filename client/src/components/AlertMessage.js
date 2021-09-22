import alert from '../images/alert.png';

const AlertMessage = ({alertMessege}) => {
    return (
        <div className="message">
            <div class="row align-items-center">
                <div class="col-sm-4"><img src={alert} alt="Alert"/>  </div>
                <div class="col-sm-8">{alertMessege}</div>
            </div>
        </div>
    )
}

export default AlertMessage
