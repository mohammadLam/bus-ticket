import { Component } from 'react'
import Seat from './Seat'
import SeatInfoBox from './SeatInfoBox'
import BillingInfo from './BillingInfo'
import UserInfo from './UserInfo'
import Container from './Container'

class Bus extends Component {
    state = {
        /*  seats: [
            0, 0, 1, 1,
            1, 1, 0, 0,
            1, 0, 3, 3,
            1, 1, 1, 0,
            1, 1, 1, 0,
            0, 0, 1, 0,
            0, 1, 1, 0,
            1, 0, 1, 0,
            0, 0, 0, 1,
            0, 0, 1, 0,
            1, 0, 1, 0, 0
        ], */

        seats: [
            0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 3, 3, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1,
            0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0
        ],

        selectedSeatInfo: [],

        totalAmount: 0,

        coachLetter: [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z'
        ]
    }

    selectSeatFn = id => {
        const { seats, selectedSeatInfo, totalAmount } = this.state
        let seat_list = [...seats]
        let userSelectedSeat = [...selectedSeatInfo]
        let seat, price
        seat = this.id_to_letter(id)
        price = this.setSeatPriceFn(id)

        // যদি সিট এর ভ্যালু unavailable হয়
        if (seat_list[id] === 1) {
            console.log('Someone all ready purchased')
        }

        // যদি সিট এর ভ্যালু available হয়
        else if (seat_list[id] === 0 && selectedSeatInfo.length < 4) {
            seat_list[id] = 2 // তাহলে সিটের ভ্যালু selected করে দিবে
            userSelectedSeat.push({ id, seat, price }) // userSelectedSeat ভ্যারিয়েবলে সিটের আইডি বসিয়ে দিবে

            this.setState({
                seats: seat_list,
                selectedSeatInfo: userSelectedSeat,
                totalAmount: totalAmount + price
            })
        }

        // যদি সিট এর ভ্যালু someoneClicked হয়
        else if (seat_list[id] === 3) {
            console.log('Someone select this seat')
        }

        // যদি সিট এর ভ্যালু selected হয়
        else if (seat_list[id] === 2) {
            seat_list[id] = 0 // তাহলে সিটের ভ্যালু available করে দিবে
            let minusAmount
            userSelectedSeat.forEach((value, i) => {
                if (value.id === id) {
                    minusAmount = value.price
                    userSelectedSeat.splice(i, 1)
                }
            })

            this.setState({
                seats: seat_list,
                selectedSeatInfo: userSelectedSeat,
                totalAmount: totalAmount - minusAmount
            })
        } else {
            console.log('Your maximum seat reached')
        }
    }

    getSeatInfo = () => {
        console.log(this.state.selectedSeatInfo)
    }

    // সিটের ইনডেক্স নিবে এবং সিটের নাম্বার রিটার্ন করবে
    id_to_letter(skip = 0) {
        let count = 0
        const { coachLetter } = this.state

        for (let coach = 0; coach < coachLetter.length; coach++) {
            for (let i = 0; i < 4; i++) {
                count++
                if (count === skip + 1) {
                    return coachLetter[coach] + (i + 1)
                }
            }
        }
    }

    setSeatPriceFn = id => {
        let seatId = id + 1 // User give seat id + 1

        if (seatId <= 8) return 500
        else if (seatId <= 20) return 450
        else if (seatId <= 28) return 400
        else return 350
    }

    render() {
        const seatType = ['available', 'unavailable', 'selected', 'someone']
        const { seats, selectedSeatInfo, totalAmount } = this.state

        return (
            <Container>
                <h1>Purchase ticket:</h1>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'start',
                        paddingBottom: '1rem'
                    }}>
                    <div className='bus'>
                        <div className='driver'>
                            <img
                                src='/img/ticket/stearing.svg'
                                alt='stearing'
                                className='stearing'
                            />
                            <img
                                src='/img/ticket/driver.svg'
                                alt='driver'
                                className='driver-seat'
                            />
                        </div>
                        {seats.map((seat, i) => (
                            <Seat
                                type={seatType[seat]}
                                seatId={i}
                                key={i}
                                selectSeatFn={this.selectSeatFn}
                                seatno={this.id_to_letter(i)}
                            />
                        ))}
                        <div className='divider'></div>
                    </div>

                    <div>
                        <SeatInfoBox type={seatType} />
                        {selectedSeatInfo.length >= 1 ? (
                            <BillingInfo seatInfo={selectedSeatInfo} />
                        ) : (
                            ''
                        )}
                        <UserInfo totalAmount={totalAmount} />
                        <button onClick={this.getSeatInfo}>
                            Get information
                        </button>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Bus
