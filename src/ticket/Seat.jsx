import { Component } from 'react'

class Seat extends Component {
    render() {
        const { type, seatId, selectSeatFn, seatno } = this.props
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                <img
                    className='seat'
                    src={`img/ticket/${type}.svg`}
                    alt='seat'
                    data-seatno={seatno}
                    onClick={() => selectSeatFn(seatId)}
                />
                <small>{seatno}</small>
            </div>
        )
    }
}

export default Seat
