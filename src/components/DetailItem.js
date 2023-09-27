const DetailItem = ({heading, detail}) => {
    return (
        <div className="d-flex flex-column m-2 p-2">
            <div className="fw-bold text-secondary fs-6">{heading}</div>
            <div className="fw-bold">{detail}</div>
        </div>
    )
}

export default DetailItem;