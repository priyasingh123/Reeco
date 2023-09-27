import DetailItem from "./DetailItem";

const Details = () => {
    return (
        <div className="d-flex justify-content-center bg-red">
            <div className="border border-3 col-10 mt-5 mb-5 d-flex justify-content-between rounded-2">
                <DetailItem heading={"Supplier"} detail={"East coast Fruits & Vegetables"}/>
                <div class="vr"></div>
                <DetailItem heading={"Shipping date"} detail={"Thu, Feb 10"}/>
                <div class="vr"></div>
                <DetailItem heading={"Total"} detail={"$ 15,028.3"}/>
                <div class="vr"></div>
                <DetailItem heading={"Category"} detail={"TODO"}/>
                <div class="vr"></div>
                <DetailItem heading={"Department"} detail={"300-444-678"}/>
                <div class="vr"></div>
                <DetailItem heading={"Status"} detail={"Awaiting your approval"}/>
            </div>
        </div>
    )
}

export default Details;