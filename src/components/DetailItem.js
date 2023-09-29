const DetailItem = ({heading, detail}) => {
    return (
        <div className="d-flex flex-column m-2 p-2">
            <div className="fw-bold text-secondary fs-6">{heading}</div>
            <div className="fw-bold">{detail ? detail: <>
            <i class="bi bi-snow me-2">
            </i><i class="bi bi-egg-fried me-2"></i>
            <i class="bi bi-egg me-2"></i>
            <i class="bi bi-cup-straw me-2"></i>
            
            </>}</div>
        </div>
    )
}

export default DetailItem;