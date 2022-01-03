function BillingInfo(props) {

    const { seatInfo } = props
    let price = 0

    return (
        <div className="info">
            <h3>Billing Information:</h3>
            {seatInfo.map(value => <div key={value.id}>{value.seat}: {value.price} Taka <noscript> {price += value.price}</noscript></div >)}
            <hr />
            <div>Total: {price} Taka</div>
        </div >
    )
}

export default BillingInfo