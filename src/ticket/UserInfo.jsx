function UserInfo(props) {

    const { totalAmount } = props

    return (
        <div className="info">
            <h3>User Information:</h3>
            <div>
                Name: Muhammad Lam
            </div>
            <div>
                Gender: Male
            </div>
            <div>
                Date: {new Date().toLocaleDateString()}
            </div>
            <div>
                Amount: {totalAmount} Taka
            </div>
            <button>Purchase</button>
        </div>
    )
}

export default UserInfo