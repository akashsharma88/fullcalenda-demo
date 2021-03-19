import React from 'react'
import { DisplayLabelValue } from './DisplayLabelValue'
const convert24To12Hr = timeString => {
    const timeString12hr = new Date('1970-01-01T' + timeString + 'Z')
        .toLocaleTimeString({},
            { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
        );
    return timeString12hr
}
export const EventContent = ({ data }) => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span><b>Booking date & time:</b></span>
                    <span style={{ fontSize: 12 }}>{`${data.bookingDate} ${convert24To12Hr(data?.timeslot?.startTime)} - ${convert24To12Hr(data?.timeslot?.endTime)}`}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span><b>Status:</b></span>
                    <span style={{ fontSize: 12 }}>{data.status}</span>
                </div>
            </div>
            <div >
                <div className="display-flex-wrrap">
                    <div className="display-flex-column" style={{ marginRight: 5 }}>
                        <h3>Patient details:</h3>
                        <DisplayLabelValue label="Patient name" value={`${data.patient.firstName} ${data.patient.lastName}`} />
                        <DisplayLabelValue label="Age" value={data.patient.age} />
                        <DisplayLabelValue label="Email" value={data.patient.email} />
                        <DisplayLabelValue label="Contact number" value={data.patient.contact} />
                        <DisplayLabelValue label="Gender" value={data.patient.gender} />
                        <DisplayLabelValue label="Doctor name" value={data.doctor.name} />
                        <DisplayLabelValue label="Clinic name" value={data.clinic.name} />
                        <DisplayLabelValue label="Treatment type" value={data.treatmentType.name} />
                    </div>
                    <div className="display-flex-column">
                        <h3>Booked by:</h3>
                        <div className="" style={{ display: 'flex', flexDirection: 'column' }}>
                            <DisplayLabelValue label="Name" value={`${data.bookedBy.firstName} ${data.bookedBy.lastName}`} />
                            <DisplayLabelValue label="Age" value={data.bookedBy.age} />
                            <DisplayLabelValue label="Email" value={data.bookedBy.email} />
                            <DisplayLabelValue label="Contact number" value={data.bookedBy.contact} />
                            <DisplayLabelValue label="Gender" value={data.bookedBy.gender} />
                        </div>
                        <div className="display-flex-column">
                            <h3>Payment details:</h3>
                            <div className="" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <DisplayLabelValue label="Amount" value={`Rs.${data.amount}`} />
                                <DisplayLabelValue label="Paid" value={data.paymentDone ? "PAID" : "UNPAID"} />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
