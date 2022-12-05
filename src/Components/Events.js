import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { useEffect, useState } from "react";
export default function Events() {
  const APIURL = "https://api.calendariocultural.era-coding.com/api/events/";
  const key = "dfa8a33065e485486c1a0af3ae7350e37cb93a99";
  const [data, setData] = useState([]);
  console.log(data);
  const token = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${key}`,
    },
  };
  const getEvents = () => {
    fetch(APIURL, token)
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log(data);
  };

  useEffect(() => {
    getEvents();
  }, []);
  return (
    <div className="container py-5">
      <div className="container">
        <h2 className="primary-color fs-4  mb-3">Category</h2>
        <div className="row d-flex wrap gap-3 mb-5">
          <a href="#" className="text-dark text-decoration-none col rounded-2 p-4 fw-bold" style={{minWidth:"150px", backgroundColor:"#F8F7FA"}}>All</a>
          <a href="#" className="text-dark text-decoration-none col rounded-2 p-4 fw-bold" style={{minWidth:"150px", backgroundColor:"#F8F7FA"}}>News</a>
          <a href="#" className="text-dark text-decoration-none col rounded-2 p-4 fw-bold" style={{minWidth:"150px", backgroundColor:"#F8F7FA"}}>In Cairo</a>
          <a href="#" className="text-dark text-decoration-none col rounded-2 p-4 fw-bold" style={{minWidth:"150px", backgroundColor:"#F8F7FA"}}>Technology</a>
          <a href="#" className="text-dark text-decoration-none col rounded-2 p-4 fw-bold" style={{minWidth:"150px", backgroundColor:"#F8F7FA"}}>Soon</a>
        </div>
        <div className="row">
        <h2 className="primary-color fs-4 mb-3">Events</h2>

          {data.map((event, index) => (
            <a href="#" key={event.id} className="col-md-3 text-decoration-none text-dark p-0 event-card">
              <div className="card-img p-0">
                <img
                  className="w-100"
                  style={{ height: "200px" }}
                  src={event.image}
                  alt={event.title}
                />
              </div>
              <div className="card-body p-0">
                <p className="px-3 my-3 fw-bold fs-5 primary-color">
                  {event.title}
                </p>
                <div
                  className="px-3"
                  dangerouslySetInnerHTML={{ __html: event.description }}
                />
                <div className="d-flex align-items-center justify-content-between text-muted pb-4 px-3">
                  <p className="m-0"><AiOutlineClockCircle/> {event.date}</p>
                  <p className="m-0"><HiLocationMarker/> {event.location}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
