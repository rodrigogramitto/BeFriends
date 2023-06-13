import React, { useState, useRef } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const events = [
  { title: 'Alabama Jousting Meet', start: new Date('June 13, 2023 07:30:00'), end: new Date('June 13, 2023 21:30:00') },
  { title: 'Big Chungus Hunt', start: new Date('June 15, 2023 07:30:00'), end: new Date('June 15, 2023 21:30:00') },
  { title: 'Antonio Banderas Day', start: new Date('June 4, 2023 07:30:00'), end: new Date('June 5, 2023 21:30:00') }
];

const MyCalendar = () => {
  const [displayEvent, toggleDisplay] = useState(false);
  const EventName = useRef('');
  const StartDate = useRef('');
  const EndDate = useRef('');

  const displayEventModal = () => {
    toggleDisplay(true);
  };

  const closeEventModal = () => {
    toggleDisplay(false);
  };

  const submitEvent = (e) => {
    e.preventDefault();
    const start = new Date(StartDate.current.value)
    const newEvent = {}
    newEvent.name = EventName.current.value;
    newEvent.start = new Date(StartDate.current.value);
    newEvent.end = new Date(EndDate.current.value);
    console.log('New Event:', newEvent);
  }

  return (
    <div>
      <Calendar
        events={events}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />

      <button className="btn" onClick={displayEventModal}>Add Event</button>
      <dialog id="my_modal_3" className="modal" open={displayEvent}>
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeEventModal}>✕</button>
          <input placeholder="Event Name" ref={EventName} /> <br />
          <label>StartDate <br /><input type="date" ref={StartDate} /></label>
          <label>End Date <br /><input placeholder="End Date" type="date" ref={EndDate} /></label>
          <button type="button" className="btn" onClick={submitEvent}>Add!</button>

        </form>
      </dialog>
    </div>
  );
};

export default MyCalendar;
