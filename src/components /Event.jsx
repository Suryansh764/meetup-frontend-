import useFetch from "../useFetch";
import { useState } from "react";
import { Link } from "react-router-dom";

const Events = ({ searchQuery }) => {
  const { data, loading, error } = useFetch("https://meetup-backend-psi.vercel.app/events");

  const [event, setEvent] = useState("Both");

  const filteredEvents = data
    ?.filter((data) => event === "Both" || event === data.type)
    .filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.eventTags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

  return (
    <div>
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-md-6">
          <h2 className="display-5 fw-semibold">Meetup Events</h2>
        </div>
        <div className="col-md-2">
          <div className="form-group">
            <select
              onChange={(e) => setEvent(e.target.value)}
              className="form-control "
              id="eventSelect"
            >
              <option value="" disabled selected>
                Choose a type...
              </option>
              <option value="Both">Both</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <div className="row mb-5">
          {filteredEvents?.map((event) => (
            <div className="col-md-4">
              <div key={event._id} className="card mt-3">
                <img
                  src={event.image}
                  className="card-img-top img-fluid"
                  alt={event.title}
                  style={{
                    width: "420px",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
                <span class="position-absolute top-0 start-0 m-2 px-3 py-1 bg-light text-black rounded">
                  {event.type} Event
                </span>
              </div>
              <p>
                <span className="text-success">
                  {event.date} &middot; {event.time}
                </span>{" "}
                <br />
                <Link
                  className="text-dark fs-4 fw-bold"
                  style={{
                    textDecoration: "none",
                    pointerEvents: "auto",
                    color: "inherit",
                  }}
                  to={`/events/${event._id}`}
                >
                  {event.title}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
