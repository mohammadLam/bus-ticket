function SeatInfoBox({ type }) {

    return (
        <div className="info">
            <div>
                <img src={`img/ticket/${type[0]}.svg`} alt="seat" />
                <span>Available Seat</span>
            </div>

            <div>
                <img src={`img/ticket/${type[1]}.svg`} alt="seat" />
                <span>Unavailable Seat</span>
            </div>

            <div>
                <img src={`img/ticket/${type[2]}.svg`} alt="seat" />
                <span>Your Selected Seat</span>
            </div>

            <div>
                <img src={`img/ticket/${type[3]}.svg`} alt="seat" />
                <span>Someone Selected</span>
            </div>

            <div>
                <img src={`img/ticket/driver.svg`} alt="seat" />
                <span>Driver Seat</span>
            </div>

        </div>
    )
}

export default SeatInfoBox