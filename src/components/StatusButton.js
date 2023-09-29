const StatusButton = ({status}) => {
    let type;
    switch(status) {
        case "Approved":
            type = 'success'
            break;
        case "Price Updated":
            type = 'success'
            break;
        case "Quantity Updated":
            type = 'success'
            break;
        case "Quantity and Price Updated":
            type = 'success'
            break;
        case "Missing":
            type = 'danger'
            break;
        case "Missing - Urgent":
            type = 'warning'
            break;
    }
    return (
        <div className={`btn btn-${type} h-25 mr-3 pe-none`}>
            {status}
        </div>
    )
}

export default StatusButton