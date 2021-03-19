import React, { useState } from 'react'
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
import './Calendar.css'
import FullCalendar from 'fullcalendar-reactwrapper';
import { EventDetail } from './EventDetail';

export const Calendar = (props) => {
    const { events, EventContentComponent } = props
    const [open, setOpen] = useState(false)
    const [evData, setEvData] = useState({})
    const [currentView, setCurrentView] = useState('month')
    const [currentDate, setCurrentDate] = useState(new Date())
    const _handleClick = (info, jsEvent, view) => {
        jsEvent.preventDefault();
        setCurrentView(view.name)
        if (view.name === 'agendaDay')
            setCurrentDate(new Date(view.title))
        const { extendedProps } = info
        setOpen(true)
        setEvData(extendedProps)
    }
    return (
        <div >
            <FullCalendar
                id="calendar-app"
                header={{
                    left: 'prev next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay,listWeek'
                }}
                defaultView={currentView}
                defaultDate={currentDate}
                navLinks={true}
                editable={false}
                eventLimit={true}
                events={events}
                eventClick={_handleClick}

                {...props}
            />

            <EventDetail open={open} closeModal={setOpen} data={evData} title={`Appointment ID: ${evData?.appointmentId}`} eventContentComponent={EventContentComponent} />
        </div>
    )
}
