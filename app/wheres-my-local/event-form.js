"use client"

import { useState } from "react";

export default function EventForm({addNewEventFunc, closeFormFunc}) {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [game, setGame] = useState("");
    const [location, setLocation] = useState("");
    const [attendees, setAttendees] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");

    const handleIdChange = (event) => setId(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        let newEvent = {
            id: id,
            name: name,
            date: date,
            game: game,
            location: location,
            attendees: attendees,
            photoUrl: photoUrl
        }

        addNewEventFunc(newEvent);

        setId("");
        setName("");
        setDate("");
        setGame("");
        setLocation("");
        setAttendees("");
        setPhotoUrl("");

        closeFormFunc();
    }

    return(
        <div onClick={closeFormFunc} className="absolute w-full h-full bg-gray-700/65 flex items-center justify-center" >
            <form
                onSubmit={handleSubmit}
                onClick={ (event) => event.stopPropagation() }
                className="max-w-md p-5 bg-blue-300 text-black"
            >
                <h2 className="text-2xl text-center mb-2">Add new event to host</h2>
                <div className="mb-2">
                    <label className="inline-block w-40">ID:</label>
                    <input type="text" onChange={handleIdChange} value={id} />
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Name:</label>
                    <input type="text" value={name} onChange={ (event) => setName(event.target.value) } />
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Date:</label>
                    <input type="text" value={date} onChange={ (event) => setDate(event.target.value) } />
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Game:</label>
                    <input type="text" value={game} onChange={ (event) => setGame(event.target.value) } />
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Location:</label>
                    <input type="text" value={location} onChange={ (event) => setLocation(event.target.value) } />
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Attendees:</label>
                    <input type="text" value={attendees} onChange={ (event) => setAttendees(event.target.value) } />
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Photo:</label>
                    <input type="text" value={photoUrl} onChange={ (event) => setPhotoUrl(event.target.value) } />
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-green-700 text-white rounded px-1.5"
                    >Add new event</button>
                    <button
                        type="button"
                        onClick={closeFormFunc}
                        className="bg-blue-700 text-white rounded px-1.5 ml-3"
                    >Close Form</button>
                </div>
            </form>
        </div>
    );
}