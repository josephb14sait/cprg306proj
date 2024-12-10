"use client"

import { useState } from "react";
import eventData from "./events.json";
import EventList from "./event-list";
import EventForm from "./event-form";

export default function HostingPage(){

    let eventArray = eventData.map( (event) => ( {...event} )  );
    const [listOfEvents, setListOfEvents] = useState(eventArray);

    const addNewEvent = (newEventObj) => {
        setListOfEvents( [...listOfEvents, newEventObj] );
    }

    const removeEvent = (event) => {
        let thisEventList = listOfEvents.filter(
            (event) => event.id != event.target.getAttribute("data-event-id")
        );
        setListOfEvents(thisEventList);
    }

    const [formOpen, setFormOpen] = useState(false);
    const openForm = () => setFormOpen(true);
    const closeForm = () => setFormOpen(false);

    return(
        <main>
            { formOpen && <EventForm addNewEventFunc={addNewEvent} closeFormFunc={closeForm} />}
            <div className="w-8 h-8 rounded-full overflow-hidden absolute right-10 top-6">
                <button
                    type="button"
                    onClick={openForm}
                    className="bg-blue-700 text-white text-3xl w-full h-full leading-none relative"
                >+</button>
            </div>
            <EventList listOfEventsArray={listOfEvents} removeEventFunc={removeEvent} />
            
        </main>
    );
}