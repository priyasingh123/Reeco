const StatusButton = ({status}) => {
    let type;
    switch(status) {
        case "Approved":
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
        <div className={`btn btn-${type} h-25 mr-3`}>
            {status}
        </div>
    )
}

export default StatusButton