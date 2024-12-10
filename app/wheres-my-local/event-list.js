import { useState } from "react";
import EventCard from "./event-card";

export default function EventList({ listOfEventsArray, removeEventFunc }) {

    const [sortBy, setSortBy] = useState("id");

    listOfEventsArray.sort( (a, b) => {
        if (isNaN(parseInt(a[sortBy]))) {
            let nameA = a[sortBy].toUpperCase();
            let nameB = b[sortBy].toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        } else {
            return a.id - b.id;
        }
    });

    const handleChangeSort = (event) => setSortBy(event.target.value);


    return (
        <section className="p-5">
            <h1 className="text-4xl text-left mb-3">Fighting Game Locals</h1>
            <div>
                <select onChange={handleChangeSort}>
                    <option value="id">ID</option>
                    <option value="name">Name</option>
                </select>
            </div>
            <div className="grid grid-cols-2 gap-5">
                {
                    listOfEventsArray.map(
                        (event) => (
                            <EventCard
                                eventObj={event}
                                key={event.id}
                                removeEventFunc={removeEventFunc}
                            />
                        )
                    )
                }
            </div>
        </section>
    );
}