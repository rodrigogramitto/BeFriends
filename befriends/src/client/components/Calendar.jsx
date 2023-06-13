import React, { useState } from 'react';
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
  const [showEventForm, setShowEventForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleAddEventClick = (date) => {
    setSelectedDate(date);
    setShowEventForm(true);
  };

  const handleEventFormClose = () => {
    setShowEventForm(false);
    setSelectedDate(null);
  };

  const handleEventFormSubmit = (eventData) => {
    // Handle event submission (e.g., saving to a database)
    console.log('Event data:', eventData);
    setShowEventForm(false);
    setSelectedDate(null);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleAddEventClick(new Date())}>Add Event</button>
      </div>
      <Calendar
        events={events}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      {showEventForm && (
        <EventForm
          date={selectedDate}
          onClose={handleEventFormClose}
          onSubmit={handleEventFormSubmit}
        />
      )}
    </div>
  );
};

const EventForm = ({ date, onClose, onSubmit }) => {
  const [eventTitle, setEventTitle] = useState('');

  const handleTitleChange = (event) => {
    setEventTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const eventData = {
      title: eventTitle,
      start: date,
      end: date,
    };
    onSubmit(eventData);
  };

  return (
    <div>
      <h3>Add Event</h3>
      <p>Date: {date.toDateString()}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Event Title:
          <input type="text" value={eventTitle} onChange={handleTitleChange} />
        </label>
        <br />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default MyCalendar;
