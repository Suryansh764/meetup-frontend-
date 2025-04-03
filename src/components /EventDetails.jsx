import Header from "./Header";
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

function EventDetails() {
  const { id } = useParams();
  const { data, loading, error } = useFetch("http://localhost:3000/events");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <p>No events found.</p>;

  const event = data.find((event) => event._id === id);

  if (!event) {
    return <p>Event not found.</p>;
  }

  return (
    <>
      <Header />

      <main className="container my-4">
        <div className="row">
          <section className="col-md-6">
            <div className="container mx-2">
              <h2>{event.title}</h2>
              <p>
                Hosted By:
                <br />
                <strong>{event.hostedBy}</strong>
              </p>
              <p>
                <img
                  src={event.image}
                  style={{
                    width: "600px",
                    height: "300px",
                    objectFit: "cover",
                  }}
                  className="img-fluid shadow-lg"
                />
              </p>
              <p>
                <strong className="fs-3">Details:</strong>
                <p>{event.details}</p>
              </p>
              <p>
                <strong className="fs-3">Additional Information:</strong>
                <p>
                  <strong>Dress Code:</strong> {event.dressCode}
                  <br />
                  <strong>Age Restrictions:</strong> {event.ageRestrictions}
                </p>
              </p>
              <p>
                <strong className="fs-3">Event Tags:</strong>
              </p>
              <div className="event-tags">
                {event.eventTags.map((tag, index) => (
                  <button
                    key={index}
                    className="btn btn-success me-3"
                    style={{ pointerEvents: "none" }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="col-md-6">
            <div className="container mx-2">
              <div className="card mb-4 shadow-sm py-2">
                <div className="card-body">
                  <h6 className="card-subtitle mb-4 text-body-secondary d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-clock me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                    </svg>{" "}
                    {event.startDate} to <br />
                    {event.endDate}
                  </h6>
                  <h6 className="card-subtitle mb-4 text-body-secondary d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-geo-alt me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>{" "}
                    {event.location}
                  </h6>
                  <h6 className="card-subtitle mb-4 text-body-secondary d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-currency-rupee me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                    </svg>
                    {event.price}
                  </h6>
                </div>
              </div>
              <strong className="fs-3">
                Speakers: ({event.speakers.length})
              </strong>

              <div className="row">
                {event.speakers.map((speaker, index) => (
                  <div className="col-md-6 ">
                    <div className="card text-center my-3 shadow">
                      <img
                        src="https://placehold.co/50x50?text=Speaker+1"
                        className="rounded-circle w-50 h-50 card-img-top mx-auto d-block mt-4"
                        alt="..."
                      />
                      <div className="card-body">
                        <p className="card-text">
                          <strong className="fs-4">
                            {speaker.speakerName}
                          </strong>
                        </p>
                        <p className="card-text">{speaker.designation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button className="btn btn-success px-4">RSVP</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default EventDetails;
