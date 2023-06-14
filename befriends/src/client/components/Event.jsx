import React from 'react';

const Event = ({ selectedEvent, closeSelectedEvent, displaySelectedEvent }) => {
    if(selectedEvent) {
      return (
      <div>
    <dialog id="my_modal_3" className="modal" open={displaySelectedEvent}>
      <form method="dialog" className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeSelectedEvent}>✕</button>
        <h2 className="font-bold text-lg">{selectedEvent.title}</h2>
        <date className="py-4">{'Starts: ' + ' ' + new Date(selectedEvent.start).toLocaleString()}</date><br />
        <date className="py-4">{'Ends: ' + ' ' + new Date(selectedEvent.end).toLocaleString()}</date>
      </form>
    </dialog>
    </div>
      )
    } else {
      return null
    }
}

export default Event;
