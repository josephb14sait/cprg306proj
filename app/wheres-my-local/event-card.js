export default function EventCard({ eventObj, removeEventFunc }) {

    const { id, name, date, game, location, attendees, photoUrl } = eventObj;

    return (
        <div className="max-w-lg bg-gray-600 p-2">
            <div className="inline-block align-middle">
                {photoUrl && (<img className="max-h-28 rounded" src={photoUrl} />)}
            </div>
            <div className="inline-block align-middle ml-3">
                <h3 className="text-2xl">{name}</h3>
                <h2 className="text-xl">{game}</h2>
                <p className="text-lg">Date: {date}</p>
                <p className="text-lg">Location: {location}</p>
                <p className="text-lg">Attendees: {attendees}</p>
                <button
                    type="button"
                    onClick={removeEventFunc}
                    data-event-id={id}
                    className="text-sm bg-red-700 text-white rounded px-1"
                >Remove</button>
            </div>
        </div>
    );
}